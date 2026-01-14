import axios from 'axios';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Destructure fields from the request body
    const { copy, type, context, tone } = req.body;

    // Validate required fields
    if (!copy || !type) {
      return res.status(400).json({ error: 'Missing required fields: copy and type are required.' });
    }

    // specific system prompt acting as a senior UX writer
    const systemPrompt = `You are a Senior UX Writer and Content Strategist. 
    Your goal is to critique and improve UI microcopy based on best practices for clarity, conciseness, and human-centered design.
    You will receive a piece of UI copy, its type (e.g., button, label), context, and a desired tone which will guide your critique and rewrite.
    
    Output your response as a valid JSON object with the following structure:
    {
      "critique": {
        "assessment": "One-sentence overall take",
        "strengths": ["List 1 or 2 distinct strengths"],
        "issues": [
          {
            "problem": "Specific problem identified",
            "explanation": "Why this is an issue",
            "principle": "UX writing principle violated (e.g., Clarity, Conciseness)"
          }
        ]
      },
      "rewrite": {
        "suggested": "The improved version of the copy",
        "reasoning": "Why this rewrite is better"
      }
    }
    Limit "issues" to 1-3 items.
    Do not include markdown formatting (like \`\`\`json) in the response, just the raw JSON.`;

    // specific user prompt with the provided details
    const userPrompt = `
      Critique this UI copy:
      Original Copy: "${copy}"
      Element Type: ${type}
      Context: ${context || "None provided"}
      Desired Tone: ${tone}
    `;

    // Debugging: Check if keys are present (do not log the actual key in production logs if possible, but for local dev it helps)
    console.log("Using Gemini Model:", process.env.GEMINI_MODEL);
    console.log("API Key present:", !!process.env.GEMINI_API_KEY);

    if (!process.env.GEMINI_API_KEY) {
       throw new Error("GEMINI_API_KEY is missing in environment variables.");
    }

    // Call the Google Gemini API securely
    const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1/models/${process.env.GEMINI_MODEL}:generateContent`,
  {
    contents: [
      {
        role: "user",
        parts: [
          { text: systemPrompt },
          { text: userPrompt }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.3
    }
  },
  {
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY
    }
  }
);


    // Extract the generated text from the API response
    // Accessing candidates[0].content.parts[0].text as requested
    const generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('No content generation returned from Gemini API');
    }

    // Parse the extracted text as JSON
    // Clean potential markdown blocks if the model ignores the instruction
    const cleanedText = generatedText.replace(/```json|```/g, '').trim();
    const parsedData = JSON.parse(cleanedText);

    // Return the parsed JSON to the frontend
    return res.status(200).json(parsedData);

  } catch (error) {
    console.error('Error processing critique request:', error.message);
    if (error.response) {
        console.error('API Error Data:', JSON.stringify(error.response.data, null, 2));
    }
    
    // Handle JSON parse errors specifically
    if (error instanceof SyntaxError) {
       return res.status(502).json({ error: 'Failed to parse AI response. Use a different model or try again.' });
    }

    // Return appropriate error status
    const status = error.response?.status || 500;
    const errorMessage = error.response?.data?.error?.message || error.message;

    return res.status(status).json({ 
      error: status === 429 ? 'Quota Exceeded' : 'Internal Server Error', 
      details: errorMessage
    });
  }
}

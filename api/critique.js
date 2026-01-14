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
    You will receive a piece of UI copy, its type (e.g., button, label), context, and a desired tone.
    
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

    // Call the Google Gemini API securely
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{
          role: "user",
          parts: [{ text: systemPrompt + "\n\n" + userPrompt }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
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
    console.error('Error processing critique request:', error);
    
    // Handle JSON parse errors specifically
    if (error instanceof SyntaxError) {
       return res.status(502).json({ error: 'Failed to parse AI response. Use a different model or try again.' });
    }

    // Return appropriate error status
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      details: error.response?.data || error.message 
    });
  }
}

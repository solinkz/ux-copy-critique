import axios from "axios";

export async function analyzeUXCopy(copy, type, context, tone) {
  try {
    const response = await axios.post("/api/critique", {
      copy,
      type,
      context,
      tone,
    });

    return response.data;
  } catch (error) {
    console.error("UX Copy analysis error:", error);

    // Normalize error for the UI
    if (error.response) {
      throw new Error(error.response.data?.error || "Server error");
    }

    throw new Error("Network error. Please try again.");
  }
}

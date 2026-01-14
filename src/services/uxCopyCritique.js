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
      const status = error.response.status;
      const message = error.response.data?.error || "Server error";
      throw new Error(`${status}: ${message}`);
    }

    throw new Error("Network error. Please try again.");
  }
}

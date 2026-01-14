export interface CritiqueResponse {
  critique: {
    assessment: string;
    strengths: string[];
    issues: {
      problem: string;
      explanation: string;
      principle: string;
    }[];
  };
  rewrite: {
    suggested: string;
    reasoning: string;
  };
}

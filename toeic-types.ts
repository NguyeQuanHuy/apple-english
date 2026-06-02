// Shared types for TOEIC mini tests

export type ToeicQuestion = {
  id: string;
  part: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  section: "listening" | "reading";
  question: string;
  options: string[];
  correctIndex: number;
  explain?: string;

  // For listening: text the audio should "speak"
  audioText?: string;
  // For Part 1: brief Vietnamese description of what the image shows
  imagePrompt?: string;
  // For Part 3/4: conversation context (in Vietnamese, for after submission review)
  conversationContext?: string;
  // For Part 6/7: passage text
  passage?: string;
};

export type ToeicLevel = {
  id: "beginner" | "intermediate" | "advanced";
  title: string;
  targetScore: string;
  description: string;
  whoFor: string;
  difficultyNote: string;
  emoji: string;
  color: "ember" | "teal" | "gold";
  timeLimit: number; // seconds
  questions: ToeicQuestion[];
};

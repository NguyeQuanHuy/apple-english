export type ToeicYearlySet = {
  id: string;
  year: number;
  title: string;
  description?: string;
  timeLimitSec: number;
  questions: {
    id: number;
    part: number;
    question: string;
    options: string[];
    correctIndex: number;
    explain?: string;
    passage?: string;
  }[];
};

export const TOEIC_YEARLY: ToeicYearlySet[] = [];

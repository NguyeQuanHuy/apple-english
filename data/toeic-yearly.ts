export type ToeicYearlySet = {
  id: string;
  year: number;
  title: string;
  questions: {
    id: number;
    part: number;
    question: string;
    options: string[];
    answer: string;
    explanation?: string;
  }[];
};

export const TOEIC_YEARLY: ToeicYearlySet[] = [];
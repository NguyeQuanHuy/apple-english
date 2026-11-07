export type SchoolWord = { en: string; vi: string; example: string };

export type SchoolQuiz = { prompt: string; options: string[]; correctIndex: number; explain: string };

export type SchoolUnit = {
  id: string; // unique within a grade, e.g. "u1"
  title: string; // Vietnamese
  titleEn: string;
  words: SchoolWord[];
  grammar: {
    title: string;
    explain: string;
    forms: string[];
    examples: { en: string; vi: string }[];
  };
  quiz: SchoolQuiz[];
};

export type SchoolGrade = {
  grade: number;
  focus: string; // what this grade builds, one line
  units: SchoolUnit[];
};

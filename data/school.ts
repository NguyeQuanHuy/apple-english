import type { SchoolGrade } from "./school-types";
import { PRIMARY } from "./school-primary";
import { LOWER_SECONDARY } from "./school-lower";
import { UPPER_SECONDARY } from "./school-upper";

export type { SchoolGrade, SchoolUnit, SchoolWord, SchoolQuiz } from "./school-types";

export const SCHOOL_LEVELS: { id: "primary" | "lower" | "upper"; title: string; grades: SchoolGrade[]; desc: string }[] = [
  { id: "primary", title: "Tiểu học", grades: PRIMARY, desc: "Lớp 3–5 · Chào hỏi, gia đình, mẫu câu ngắn, làm quen các thì cơ bản" },
  { id: "lower", title: "Trung học cơ sở", grades: LOWER_SECONDARY, desc: "Lớp 6–9 · Hệ thống thì, so sánh, câu điều kiện, bị động, tường thuật" },
  { id: "upper", title: "Trung học phổ thông", grades: UPPER_SECONDARY, desc: "Lớp 10–12 · Ngữ pháp nâng cao và từ vựng cho kỳ thi tốt nghiệp" },
];

export const SCHOOL_GRADES: SchoolGrade[] = SCHOOL_LEVELS.flatMap((l) => l.grades);

export const getGrade = (g: number) => SCHOOL_GRADES.find((x) => x.grade === g);
export const unitKey = (grade: number, unitId: string) => `school-${grade}-${unitId}`;
export const levelOf = (g: number) => SCHOOL_LEVELS.find((l) => l.grades.some((x) => x.grade === g))!;

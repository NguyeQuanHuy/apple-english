import { notFound } from "next/navigation";
import { BEGINNER_LESSONS } from "@/data/beginner-lessons";
import { EXTRA_LESSONS } from "@/data/extra-lessons";
import { LessonPlayer } from "@/components/lessons/lesson-player";

// A0–A1 lessons (b-01…b-10) plus the A2 lessons (b-11…b-20)
const ALL_LESSONS = [...BEGINNER_LESSONS, ...EXTRA_LESSONS];

export function generateStaticParams() {
  return ALL_LESSONS.map((l) => ({ slug: l.id }));
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = ALL_LESSONS.find((l) => l.id === slug);
  if (!lesson) notFound();
  return <LessonPlayer lesson={lesson} />;
}

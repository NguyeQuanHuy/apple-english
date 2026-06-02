import { notFound } from "next/navigation";
import { BEGINNER_LESSONS } from "@/data/beginner-lessons";
import { LessonPlayer } from "@/components/lessons/lesson-player";

export function generateStaticParams() {
  return BEGINNER_LESSONS.map((l) => ({ slug: l.id }));
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = BEGINNER_LESSONS.find((l) => l.id === slug);
  if (!lesson) notFound();
  return <LessonPlayer lesson={lesson} />;
}

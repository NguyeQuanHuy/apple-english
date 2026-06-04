export interface BlogPost {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  tags?: string[];
  date?: string;
  readingTime?: string;
  content: object[];
}

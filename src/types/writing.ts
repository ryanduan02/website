import type React from "react";

export type Writing = {
  slug: string;              // unique internal id, used for navigation
  title: string;
  summary: string;
  date?: string;
  content: React.ReactNode;  // full post content (JSX)
};

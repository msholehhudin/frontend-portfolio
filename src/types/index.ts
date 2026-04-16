export interface Project {
  id: string;
  title: string;
  tags: string[];
  tagVariants: ("blue" | "green" | "amber")[];
  description: string;
  highlight: string;
  tech: string[];
  featured?: boolean;
  caseStudyContent?: {
    body: string;
    impact: string;
  };
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  current?: boolean;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  active?: boolean;
}

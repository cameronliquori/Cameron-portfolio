export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type SubList = {
  heading?: string; // omit for unlabeled flowing paragraphs
  items: string[];
};

// One generic, flexible block used for every part of a case study's body —
// Overview, Challenge, Key Decisions, Outcome, whatever a given project needs.
// Order and shape vary case-by-case; nothing is hardcoded in the template.
export type CaseStudySectionData = {
  id: string;
  heading?: string;
  subheading?: string;
  fullWidth?: boolean; // true = spans the full page width; false/omitted = constrained to a 760px reading column
  subLists?: SubList[];
  images?: { id: string; caption?: string }[]; // shown beside the text in a 2-col layout
  metrics?: Metric[]; // optional stat cards rendered at the end of this section
};

export type ProjectCardData = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  tags: string[];
  eyebrow: string;
};

export type CaseStudyData = ProjectCardData & {
  heroDescription: string;
  sections: CaseStudySectionData[];
  reflection?: {
    heading?: string;
    text: string;
  };
};



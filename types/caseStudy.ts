// Shared type definitions for case study content.
// The goal of this model is: Cameron edits data, not code, when adding real copy.

export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type SubList = {
  heading: string;
  items: string[];
};

export type ContentSection = {
  id: string;
  heading: string;
  subheading?: string;
  subLists?: SubList[];
  images?: { id: string; caption?: string }[];
};

export type ProjectCardData = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  tags: string[];
  eyebrow: string;
};

// Every field here is fully optional. There is no fallback text anywhere
// in the components — if a heading/label is omitted, it simply doesn't
// render (not replaced with default copy). Add only what you need per project.
export type SectionHeadings = {
  overviewHeading?: string;
  needLabel?: string;
  goalLabel?: string;
  planLabel?: string;
  challengeHeading?: string;
  limitationsLabel?: string;
  teamLabel?: string;
  timelineLabel?: string;
  outcomeHeading?: string;
  reflectionHeading?: string;
};

export type CaseStudyData = ProjectCardData & {
  heroDescription: string;
  headings?: SectionHeadings;
  overview: {
    need: string[];
    goal: string[];
    plan: string[];
  };
  challenge: {
    limitations: string[];
    team: string[];
    timeline: string[];
  };
  decisionSections: ContentSection[];
  outcome: {
    images: { id: string; caption?: string }[];
    metrics: Metric[];
  };
  reflection: string;
};


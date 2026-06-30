// Shared type definitions for case study content.
// The goal of this model is: Cameron edits data, not code, when adding real copy.

export type Metric = {
  value: string; // e.g. "920K+"
  label: string; // e.g. "participants"
  detail?: string; // e.g. "Highest-attended live event in RH history."
};

export type SubList = {
  heading: string; // e.g. "Early explorations", "Setting content guidelines"
  items: string[];
};

// A flexible content section used for "The Challenge", "Key Decision" blocks,
// "Cross-functional leadership", etc. Structure (sublist labels) varies per project,
// so subLists is just an ordered array rather than fixed fields.
export type ContentSection = {
  id: string;
  heading: string; // e.g. "Key Decision 1", "The Challenge"
  subheading?: string; // optional one-line summary under the heading
  subLists?: SubList[];
  images?: { id: string; caption?: string }[]; // placeholder images paired with this section
};

export type ProjectCardData = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  tags: string[];
  eyebrow: string; // e.g. "0 → 1 launch | Systems Design | Content Design"
};

export type CaseStudyData = ProjectCardData & {
  heroDescription: string; // "Project description, key metrics at a glance"
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
  decisionSections: ContentSection[]; // variable-length, variable-label sections
  outcome: {
    images: { id: string; caption?: string }[];
    metrics: Metric[];
  };
  reflection: string;
};

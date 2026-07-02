export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type SubList = {
  heading?: string;
  items: string[];
  asList?: boolean;
};

export type CaseStudySectionData = {
  id: string;
  heading?: string;
  subheading?: string;
  fullWidth?: boolean;
  subLists?: SubList[];
  images?: { id: string; src?: string; caption?: string; aspect?: string }[];
  metrics?: Metric[];
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
  heroMetricsSummary?: string;
  heroImage?: string;
  sections: CaseStudySectionData[];
  reflection?: {
    heading?: string;
    text: string | string[];
  };
};




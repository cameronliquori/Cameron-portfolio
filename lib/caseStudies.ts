import { CaseStudyData } from "@/types/caseStudy";

// Reusable placeholder content for sections you haven't written yet.
// Swap these out section-by-section as real copy comes in — the shape stays the same.
const placeholderDecisionSection = (id: string, heading: string) => ({
  id,
  heading,
  subheading: "High-level overview of this decision and why it mattered.",
  subLists: [
    {
      heading: "Early explorations",
      items: ["Wireframing, information architecture, pitch to CEO"],
    },
    {
      heading: "Setting content guidelines",
      items: ["Lorem ipsum set dolor"],
    },
    {
      heading: "Cross-functional collaboration",
      items: ["Lorem ipsum set dolor"],
    },
    {
      heading: "Key decisions",
      items: ["XYZ"],
    },
  ],
  images: [{ id: `${id}-img-1` }, { id: `${id}-img-2` }],
});

export const caseStudies: CaseStudyData[] = [
  {
    slug: "hood-holidays",
    title: "HOOD Holidays 2025",
    subtitle: "6 days. $7M in prizes. 100+ screens. One content POV to take it from 0 to 1.",
    company: "Robinhood",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "0 → 1 launch | Systems Design | Content Design",
    heroDescription:
      "A six-day live event with $7M in prizes, 100+ screens, and a single content point of view holding it all together.",
    overview: {
      need: ["Lorem ipsum set dolor"],
      goal: ["Lorem ipsum set dolor"],
      plan: ["Lorem ipsum set dolor"],
    },
    challenge: {
      limitations: [
        "Needed to drive growth without eroding trust",
        "Legal/compliance constraints limited messaging flexibility",
        "Experience spanned 100+ screens and 7 daily reveals",
        "Needed to sustain anticipation across an entire week",
      ],
      team: ["Lorem ipsum et dolor"],
      timeline: ["Lorem upsum et dolor"],
    },
    decisionSections: [
      placeholderDecisionSection("decision-1", "Key Decision 1"),
      placeholderDecisionSection("decision-2", "Key Decision 2"),
      placeholderDecisionSection("decision-3", "Key Decision 3"),
      placeholderDecisionSection("cross-functional", "Cross-functional leadership"),
    ],
    outcome: {
      images: [
        { id: "hood-outcome-1" },
        { id: "hood-outcome-2" },
        { id: "hood-outcome-3" },
        { id: "hood-outcome-4" },
      ],
      metrics: [
        {
          value: "920K+",
          label: "participants",
          detail: "Highest-attended live event in RH history.",
        },
        {
          value: "+120K",
          label: "Gold subscriptions",
          detail: "Most new Gold subs in 7 days in RH history.",
        },
        {
          value: "7.84M",
          label: "social impressions",
          detail: "Content cited as a primary driver of virality.",
        },
        {
          value: "500K",
          label: "participants on Day 5",
          detail: "Simultaneously tuning in to reveal their gift.",
        },
      ],
    },
    reflection: "Lorem ipsum set dolor",
  },
  {
    slug: "gold-card",
    title: "Gold Card Voice & Tone",
    subtitle: "Building a voice system—and a seat at the table.",
    company: "Robinhood",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "Systems Design | Content Design",
    heroDescription: "Building a voice system—and a seat at the table.",
    overview: {
      need: ["Lorem ipsum set dolor"],
      goal: ["Lorem ipsum set dolor"],
      plan: ["Lorem ipsum set dolor"],
    },
    challenge: {
      limitations: ["Lorem ipsum set dolor"],
      team: ["Lorem ipsum et dolor"],
      timeline: ["Lorem upsum et dolor"],
    },
    decisionSections: [
      placeholderDecisionSection("decision-1", "Key Decision 1"),
      placeholderDecisionSection("decision-2", "Key Decision 2"),
    ],
    outcome: {
      images: [{ id: "gold-card-outcome-1" }, { id: "gold-card-outcome-2" }],
      metrics: [],
    },
    reflection: "Lorem ipsum set dolor",
  },
  {
    slug: "gold-rewards",
    title: "Gold Rewards program",
    subtitle: "Demystifying and legitimizing crypto through intentional content.",
    company: "Robinhood",
    tags: ["Growth", "Content Design"],
    eyebrow: "Growth | Content Design",
    heroDescription: "Demystifying and legitimizing crypto through intentional content.",
    overview: {
      need: ["Lorem ipsum set dolor"],
      goal: ["Lorem ipsum set dolor"],
      plan: ["Lorem ipsum set dolor"],
    },
    challenge: {
      limitations: ["Lorem ipsum set dolor"],
      team: ["Lorem ipsum et dolor"],
      timeline: ["Lorem upsum et dolor"],
    },
    decisionSections: [
      placeholderDecisionSection("decision-1", "Key Decision 1"),
      placeholderDecisionSection("decision-2", "Key Decision 2"),
      placeholderDecisionSection("decision-3", "Key Decision 3"),
    ],
    outcome: {
      images: [{ id: "gold-rewards-outcome-1" }, { id: "gold-rewards-outcome-2" }],
      metrics: [],
    },
    reflection: "Lorem ipsum set dolor",
  },
  {
    slug: "page-ai-chatbot",
    title: "Page | AI Chatbot",
    subtitle: "A writer's quest to create an AI assistant that analyzes your voice and edits within it.",
    company: "Personal project",
    tags: ["AI", "Conversation Design"],
    eyebrow: "AI | Conversation Design",
    heroDescription:
      "A writer's quest to create an AI assistant that analyzes your voice and edits within it.",
    overview: {
      need: ["Lorem ipsum set dolor"],
      goal: ["Lorem ipsum set dolor"],
      plan: ["Lorem ipsum set dolor"],
    },
    challenge: {
      limitations: ["Lorem ipsum set dolor"],
      team: ["Lorem ipsum et dolor"],
      timeline: ["Lorem upsum et dolor"],
    },
    decisionSections: [
      placeholderDecisionSection("decision-1", "Key Decision 1"),
      placeholderDecisionSection("decision-2", "Key Decision 2"),
    ],
    outcome: {
      images: [{ id: "page-outcome-1" }, { id: "page-outcome-2" }],
      metrics: [],
    },
    reflection: "Lorem ipsum set dolor",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

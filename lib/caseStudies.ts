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
      "A six-day, advent-calendar-style holiday promotion rewarding customers with gifts ranging from Rolex watches to a Porsche — built from concept to launch in three months.",
    overview: {
      need: [
        "Robinhood needed a flagship 2025 holiday promotion that felt iconic and differentiated from typical incentive structures, while still driving measurable subscription and engagement growth.",
      ],
      goal: [
        "Reward customers across 6 days with exclusive gifts — including Rolex watches, a Porsche, and crypto rewards — with 4 days exclusive to Gold members and 2 open to all customers.",
      ],
      plan: [
        "As Content Designer on a 3-person core team alongside Product Design and Product Management, own content strategy, interaction design decisions, and end-to-end content execution across 100+ screens, from initial concept through launch.",
      ],
    },
    challenge: {
      limitations: [
        "Just three months to design and ship a fully bespoke promotional experience from scratch",
        "Nearly one million participants engaging simultaneously during peak days",
        "100+ unique product surfaces across six event days",
        "Intense legal and compliance requirements spanning sweepstakes, subscription, IP, and crypto regulations",
        "Operational constraints prevented gifts from being delivered immediately after claim — fulfillment required 12–20 hours of manual verification, creating a gap between anticipation and reward",
      ],
      team: ["3-person core team: Content Design, Product Design, Product Management"],
      timeline: ["3 months, concept to launch"],
    },
    decisionSections: [
      {
        id: "decision-1",
        heading: "Key Decision 1: Turn Waiting Into Anticipation",
        subheading:
          "Reframing a 12–20 hour fulfillment delay as a moment of anticipation rather than friction.",
        subLists: [
          {
            heading: "The constraint",
            items: [
              "Gift claims and gift reveals had to be separate states, creating a 12–20 hour gap between claiming and unwrapping a gift.",
            ],
          },
          {
            heading: "The approach",
            items: [
              "Developed a content strategy centered on anticipation — each day's gift lineup reveal opened with a 'drumroll' moment emphasizing the excitement of the unknown while reinforcing a guaranteed reward.",
              "Reframed a backend limitation into a core emotional beat of the experience.",
            ],
          },
          {
            heading: "Result",
            items: [
              "Lineup reveals became major moments of excitement in-product and on social, sustaining momentum across all six days.",
            ],
          },
        ],
        images: [{ id: "hood-decision-1-img-1" }, { id: "hood-decision-1-img-2" }],
      },
      {
        id: "decision-2",
        heading: "Key Decision 2: Build a Scalable Content Framework for Delight",
        subheading:
          "Establishing a consistent voice across 100+ screens and 40+ unique prizes.",
        subLists: [
          {
            heading: "Guiding principles",
            items: [
              "Inspire delight through playfulness and surprise",
              "Create momentum through anticipation and reward",
              "Keep value instantly understandable",
            ],
          },
          {
            heading: "Approach",
            items: [
              "Leaned into a more playful, emotionally expressive side of Robinhood's typically informational in-product voice.",
              "Used AI as an ideation tool during early exploration — generating broad sets of options, then curating, rewriting, and refining to meet Robinhood's voice and quality standards.",
            ],
          },
          {
            heading: "Result",
            items: [
              "Scaled creative variation efficiently while maintaining a high editorial bar across dozens of prize reveal states.",
            ],
          },
        ],
        images: [{ id: "hood-decision-2-img-1" }, { id: "hood-decision-2-img-2" }],
      },
      {
        id: "decision-3",
        heading: 'Key Decision 3: Reward Curiosity With "Sneak Peeks"',
        subheading:
          "Pitching a system that rewarded exploration even when there wasn't a gift to unwrap.",
        subLists: [
          {
            heading: "The idea",
            items: [
              "Users who attempted to unwrap a gift early were met with playful messaging acknowledging they'd been caught peeking.",
              "Referring a friend unlocked an early clue about the next day's prizes in the form of a riddle.",
            ],
          },
          {
            heading: "Goals served",
            items: [
              "Rewarded curiosity and exploration",
              "Encouraged referrals",
              "Increased repeat engagement",
              "Created compelling upgrade moments for non-Gold users — sneak peeks revealed upcoming Gold-exclusive prizes",
            ],
          },
          {
            heading: "Result",
            items: [
              "Riddles became a major driver of community engagement, generating large discussion threads across X and Reddit as users collaboratively decoded clues.",
            ],
          },
        ],
        images: [{ id: "hood-decision-3-img-1" }, { id: "hood-decision-3-img-2" }],
      },
      {
        id: "cross-functional",
        heading: "Cross-functional Leadership",
        subheading: "Serving as a connective partner across Product, Design, and Legal/Compliance.",
        subLists: [
          {
            heading: "Product & Design",
            items: [
              "Worked closely with Product Design and Product Management during concept exploration, helping shape user journeys, information architecture, and wireframes presented to Robinhood's CEO.",
            ],
          },
          {
            heading: "Legal & Compliance",
            items: [
              "Led ongoing content review with 15+ Legal and Compliance stakeholders across multiple regulatory domains.",
              "Created a daily decision-making forum that resolved ambiguity quickly without sacrificing product velocity or UX quality.",
            ],
          },
        ],
        images: [{ id: "hood-cross-functional-img-1" }, { id: "hood-cross-functional-img-2" }],
      },
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
          label: "participants across 6 days",
          detail: "Highest-attended live event in Robinhood history (496K participants on Day 5).",
        },
        {
          value: "200K+",
          label: "new Gold subscriptions",
          detail: "60K above finance target.",
        },
        {
          value: "7.84M",
          label: "social impressions",
          detail: "Content cited as a key driver of social media virality.",
        },
      ],
    },
    reflection:
      "When you're building something from the ground up, the only limitation is your imagination — and what engineering can reasonably create from scratch in three months. The biggest constraint was the gap between gift claim and gift reveal. The content strategy successfully transformed that delay into anticipation, but the experience still asked users to internalize a less intuitive mental model than an immediate reward flow. If revisiting the experience, I'd explore ways to reduce or eliminate that operational gap so the emotional payoff feels even more seamless.",
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

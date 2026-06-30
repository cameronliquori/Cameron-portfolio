import { CaseStudyData } from "@/types/caseStudy";

export const caseStudies: CaseStudyData[] = [
  {
    slug: "hood-holidays",
    title: "HOOD Holidays 2025",
    subtitle: "6 days. $7M in prizes. 100+ screens. One content POV to take it from 0 to 1.",
    company: "Robinhood",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "0 → 1 launch | Systems Design | Content Design",
    heroDescription:
      "6 days. $7M in luxury prizes. 1 content POV to take it to 100.",
    heroMetricsSummary: "920K participants · +200K new Gold subscribers · 7.84M social impressions",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        fullWidth: true,
        subLists: [
          {
            items: [
              "HOOD Holidays was Robinhood’s 2025 flagship holiday promotion: a six-day, advent calendar–style experience designed to reward customers with exclusive gifts ranging from Rolex watches and a Porsche to crypto rewards. Each day, customers could opt in to receive one gift from that day’s lineup, with four days exclusive to Robinhood Gold members and two available to all customers.",
              "As the Content Designer on a three-person core team alongside Product Design and Product Management, I partnered in shaping the experience from initial concept through launch—owning content strategy, interaction design decisions, and end-to-end content execution across 100+ screens.",
            ],
          },
        ],
      },
      {
        id: "challenge",
        heading: "The Challenge",
        fullWidth: true,
        subLists: [
          {
            items: [
              "This project combined creative ambition with unusually complex execution constraints.",
              "We had just three months to design and ship a fully bespoke promotional experience from scratch. The event needed to feel iconic, celebratory, and highly differentiated from Robinhood’s typical incentive structures while still driving measurable business impact.",
              "At the same time, the experience had to support:",
              ],
            },
            {
            asList: true,
            items: [
              "Nearly one million participants engaging simultaneously during peak days",
              "100+ unique product surfaces across six event days",
              "Intense legal and compliance requirements spanning sweepstakes, subscription, IP, and crypto regulations",
              "Operational constraints that prevented gifts from being delivered immediately after claim",
            ],
          },
          {
            items: [
              "The biggest UX challenge emerged from that final constraint: users could “opt in” to claim a gift immediately after that day’s gift lineup was revealed, but fulfillment and “reveal” of a user’s specific gift required manual verification and could take 12–20 hours. This created a potentially disappointing gap between anticipation and reward.",
              "A unique challenge I took on was turning that waiting period into something emotionally engaging, rather than frustrating.",
            ],
          },
        ],
      },
      {
        id: "decision-1",
        heading: "Key Decision 1: Turn Waiting Into Anticipation",
        subLists: [
          {
            items: [
              "Engineering established early that gift claims and gift reveals had to be separate states.",
              "Rather than treating this delay as friction to explain away, I reframed it as a design opportunity. I developed a content strategy centered around anticipation: making the daily gift lineup reveal feel nearly as exciting as the eventual gift unwrap.",
              "Each day’s gift lineup reveal opened with content designed to create a sense of buildup and possibility—a “drumroll” moment that emphasized the excitement of the unknown while reinforcing a simple promise: if you’re here seeing the reveal, you’re guaranteed a gift in a few short hours.",
              "This shift transformed a backend limitation into a core emotional beat of the experience.",
              "The lineup reveals became major moments of excitement both in-product and on social, helping sustain momentum across all six days.",
            ],
          },
        ],
        images: [{ id: "hood-decision-1-img-1" }, { id: "hood-decision-1-img-2" }],
      },
            {
        id: "decision-2",
        heading: "Key Decision 2: Build a Scalable Content Framework for Delight",
        subLists: [
          {
            items: [
              "This experience spanned more than 100 screens and 40+ unique prizes— consistency was critical.",
              "I established three guiding content principles early in development:",
            ],
          },
          {
            asList: true,
            items: [
              "Inspire delight through playfulness and surprise",
              "Create momentum through anticipation and reward",
              "Keep value instantly understandable",
            ],
          },
          {
            items: [
              "Robinhood's in-product voice often leans informational in complex financial contexts. HOOD Holidays gave us room to lean into a more playful, emotionally expressive side of the brand without sacrificing clarity.",
              "To scale this voice across dozens of prize reveal states, I used AI as an ideation tool during early exploration—generating broad sets of options, then curating, rewriting, and refining final content to ensure every surface met Robinhood's voice and quality standards.",
              "This allowed me to scale creative variation efficiently while maintaining a high editorial bar.",
            ],
          },
        ],
        images: [{ id: "hood-decision-2-img-1" }, { id: "hood-decision-2-img-2" }],
      },
      {
        id: "decision-3",
        heading: "Key Decision 3: Reward Curiosity With "Sneak Peeks"",
        subLists: [
          {
            items: [
              "One of my most impactful contributions was pitching and designing a “sneak peek” system. Above all, HOOD Holidays was meant to inspire delight. Rewarding exploration keeps that momentum going even when there isn’t a gift to unwrap.",
              "If users attempted to unwrap a gift early, they were met with playful messaging acknowledging that they had been caught peeking. Instead of ending the interaction there, we created an incentive loop: referring a friend unlocked an early clue about the next day’s prizes in the form of a riddle.",
              "This served multiple goals simultaneously:",
              ],
          },
          {
            asList: true,
            items: [
              "Rewarded curiosity and exploration",
              "Encouraged referrals",
              "Increased repeat engagement",
              "Created compelling upgrade moments for non-Gold users",
            ],
          },
          {
            items: [
              "For non-Gold customers, sneak peeks also revealed prizes from future Gold-exclusive days, naturally linking desire with upgrade motivation.",
              "The riddles became a major driver of community engagement, generating large discussion threads across X and Reddit as users collaboratively decoded clues and speculated about upcoming prizes.",
            ],
          },
        ],
        images: [{ id: "hood-decision-3-img-1" }, { id: "hood-decision-3-img-2" }],
      },
      {
        id: "cross-functional",
        heading: "Cross-Functional Leadership",
        subLists: [
          {
            items: [
              "Beyond content execution, I served as a connective partner across multiple disciplines.",
              "I worked closely with Product Design and Product Management during concept exploration, helping shape user journeys, information architecture, and wireframes that we successfully presented to Robinhood’s CEO.",
              "I also led ongoing content review with 15+ Legal and Compliance stakeholders across multiple regulatory domains, creating a daily decision-making forum that allowed the team to resolve ambiguity quickly without sacrificing product velocity or UX quality.",
              "This structure helped us maintain clarity, compliance, and consistency across all in-product and external surfaces.",
            ],
          },
        ],
        images: [{ id: "hood-cross-functional-img-1" }, { id: "hood-cross-functional-img-2" }],
      },
            {
        id: "outcome",
        heading: "Outcome",
        images: [
          { id: "hood-outcome-1" },
          { id: "hood-outcome-2" },
          { id: "hood-outcome-3" },
          { id: "hood-outcome-4" },
        ],
        metrics: [
          {
            value: "920K+",
            label: "unique participants across 6 days",
            detail: "Highest-attended live event in Robinhood history",
          },
          {
            value: "200K+",
            label: "new Robinhood Gold subscriptions",
            detail: "60K above finance target",
          },
          {
            value: "7.84M",
            label: "social impressions",
            detail: "Content cited as a key driver of social media virality",
          },
          {
            value: "496K",
            label: "participants on Day 5",
            detail: "Captured the attention of nearly half a million users at once",
          },
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      text: "When you’re building something from the ground up, the only limitation is your imagination… and what engineering can reasonably create from scratch in three months. The largest product constraint I felt was the gap between gift claim and gift reveal. While I believe the content strategy successfully transformed that delay into anticipation, the end-to-end experience still required users to internalize a less intuitive mental model than an immediate reward flow. If revisiting the experience, I would explore ways to reduce or eliminate this operational gap altogether so the emotional payoff feels even more seamless.",
    },
  },
  {
    slug: "gold-card",
    title: "Gold Card Voice & Tone",
    subtitle: "Building a voice system—and a seat at the table.",
    company: "Robinhood",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "Systems Design | Content Design",
    heroDescription: "Building a voice system—and a seat at the table.",
    sections: [
      {
        id: "placeholder",
        subLists: [{ items: ["Content coming soon."] }],
      },
    ],
  },
  {
    slug: "gold-rewards",
    title: "Gold Rewards program",
    subtitle: "Demystifying and legitimizing crypto through intentional content.",
    company: "Robinhood",
    tags: ["Growth", "Content Design"],
    eyebrow: "Growth | Content Design",
    heroDescription: "Demystifying and legitimizing crypto through intentional content.",
    sections: [
      {
        id: "placeholder",
        subLists: [{ items: ["Content coming soon."] }],
      },
    ],
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
    sections: [
      {
        id: "placeholder",
        subLists: [{ items: ["Content coming soon."] }],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}


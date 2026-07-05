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
   heroImage: "Hood-holidays-full-header.jpg",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        fullWidth: true,
        subLists: [
          {
            items: [
              "HOOD Holidays was Robinhood’s 2025 flagship holiday promotion: a six-day, advent calendar–style experience designed to <strong>reward customers with exclusive gifts</strong> ranging from Rolex watches and a Porsche to crypto rewards. Each day, customers could opt in to receive one gift from that day’s lineup, with four days exclusive to Robinhood Gold members and two available to all customers.",
              "As the <strong>lead Content Designer</strong> on a three-person core team alongside Product Design and Product Management, I partnered in shaping the experience from initial concept through launch—<strong>owning content strategy, interaction design decisions, and end-to-end content execution</strong> across 100+ screens.",
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
              "We had just three months to design and ship a fully bespoke promotional experience from scratch. The event needed to feel <strong>iconic</strong>, <strong>celebratory</strong>, and <strong>highly differentiated</strong> from Robinhood’s typical incentive structures while still driving measurable business impact.",
              "At the same time, the experience had to support:",
              ],
            },
            {
            asList: true,
            items: [
              "Nearly 1M participants engaging simultaneously during peak days",
              "100+ unique product surfaces across six event days",
              "Intense legal and compliance requirements spanning sweepstakes, subscription, IP, and crypto regulations",
              "Operational constraints that prevented gifts from being delivered immediately after claim",
            ],
          },
          {
            items: [
              "The biggest UX challenge emerged from that final constraint: users could “opt in” to claim a gift immediately upon the gift lineup announcement, but fulfillment and “reveal” of a user’s specific gift required manual verification—a 12–20 hour process.",
              "This created a potentially disappointing gap between anticipation and reward.",
              "I aimed to make the waiting period feel <strong>emotionally engaging and intentional</strong>, not frustrating.",
            ],
          },
        ],
      },
      {
        id: "decision-1",
        heading: "Key Decision 1: Create Anticipation",
        subLists: [
          {
            items: [
              "Engineering established early that gift claims and gift reveals had to be separate states.",
              "I reframed this built-in friction as a design opportunity. <strong>I developed a content strategy centered around anticipation:</strong> making the daily gift lineup reveal feel nearly as exciting as the eventual gift unwrap.",
              "Each day’s gift lineup reveal opened with content designed to create a sense of buildup and hype.",
              "This “drumroll” moment maintained excitement while reinforcing a simple promise: if you’re here seeing the reveal, you’re guaranteed a gift later today.",
              "The lineup reveals became major moments of excitement both in-product and on social, transforming a backend limitation into a core emotional beat of the experience.",
            ],
          },
        ],
        images: [
  { id: "hood-decision-1-img-1", src: "/Hood-holidays-lineupgif.GIF", caption: "Day 3's gift lineup reveal" },
  { id: "hood-decision-1-img-2", src: "/Hood-holidays-lineup-image.PNG" },
],
      },
            {
        id: "decision-2",
        heading: "Key Decision 2: Build a Scalable Content Framework",
        subLists: [
          {
            items: [
              "This experience spanned more than 100 screens and 40+ unique prizes—<strong>consistency was critical.</strong>",
              "I established three guiding content principles early in development:",
            ],
          },
          {
            asList: true,
            items: [
              "Inspire <strong>delight</strong> through playfulness and surprise",
              "Create <strong>momentum</strong> through anticipation and reward",
              "Keep <strong>value</strong> instantly understandable",
            ],
          },
          {
            items: [
              "Robinhood's in-product voice leans informational in complex financial contexts. HOOD Holidays allowed me to leverage a more playful, emotionally expressive side of the brand without sacrificing clarity.",
              "To scale this voice across dozens of prize reveal states, I used <strong>AI as an ideation tool</strong> during early exploration.",
              "I generated broad sets of options, then curated, rewrote, and refined final content to ensure every surface met Robinhood's voice and quality standards.",
              "This allowed me to <strong>scale creative variation efficiently</strong> while maintaining a high editorial bar.",
            ],
          },
        ],
        images: [
          { id: "hood-decision-2-img-1", src: "/Hood-holidays-day6-reveal.PNG", caption: "Creating momentum" },
          { id: "hood-decision-2-img-2", src: "/Hood-holidays-rolex-daytona.PNG", caption: "Prize reveal: Rolex Daytona" }],
      },
           {
        id: "decision-3",
        heading: 'Key Decision 3: Reward Curiosity With "Sneak Peeks"',
        fullWidth: true,
        subLists: [
          {
            items: [
              'One of my proudest contributions: pitching and designing a <strong>"sneak peek"</strong> system.',
              "Above all, HOOD Holidays was meant to inspire delight. Rewarding exploration maintains momentum even when there isn't a gift to unwrap.",
              "If users tried to unwrap a gift early, they were met with playful content acknowledging that they'd been caught peeking. Instead of ending the interaction there, <strong>I advocated for an incentive loop:</strong> referring a friend unlocked an early clue about the next day's prizes in the form of a riddle.",
              "These riddles could hint at prizes gated behind Gold members-only days, naturally linking desire with upgrade motivation for non-Gold users.",
              "This served multiple goals simultaneously:",
            ],
          },
          {
            asList: true,
            items: [
              "Encouraged curiosity and exploration",
              "Increased referrals",
              "Boosted repeat engagement",
              "Created compelling upgrade moments for non-Gold users",
            ],
          },
          {
            items: [
              "The riddles became a <strong>major driver of community engagement,</strong> generating discussion threads across X as users collaboratively decoded clues and speculated about upcoming prizes.",
            ],
          },
        ],
      },
      {
        id: "decision-3-images",
        images: [
          { id: "hood-decision-3-img-1", src: "/hood-holidays-sneakpeek-gif1.GIF" },
          { id: "hood-decision-3-img-2", src: "/Hood-holidays-sneakpeek-3.PNG" },
          { id: "hood-decision-3-img-3", src: "/Hood-holidays-sneakpeek-4.PNG", caption: "Day 2's grand prize: a trip to Hawaii" },
          { id: "hood-decision-3-img-4", src: "/Hood-holidays-riddle-6.PNG", caption: "Day 6's grand prize: a Porsche 911" },
        ],
      },
      {
        id: "cross-functional",
        heading: "Cross-Functional Leadership",
        subLists: [
          {
            items: [
              "Beyond content execution, I served as a connective partner across multiple disciplines.",
              "I worked closely with Product Design and Product Management during concept exploration, helping shape <strong>user journeys, information architecture, and wireframes</strong> that we successfully presented to Robinhood’s CEO.",
              "I also <strong>led daily content reviews with 15+ Legal and Compliance stakeholders</strong> across multiple regulatory domains, creating an ongoing decision-making forum for resolving ambiguity quickly without sacrificing product velocity or UX quality.",
              "This structure helped us maintain clarity, compliance, and consistency across all in-product and external surfaces.",
            ],
          },
        ],
        images: [
  { id: "hood-cross-functional-img-1", src: "/Hood-holidays-wireframe.jpg", aspect: "aspect-[16/9]", caption: "Early concept exploration that became the promo framework, presented to Robinhood's CEO" },
],
      },
            {
        id: "outcome",
        heading: "Outcome",
        images: [
  { id: "hood-outcome-1", src: "/Hood-holidays-outcome-2.PNG" },
  { id: "hood-outcome-2", src: "/Hood-holidays-outcome-3.jpg" },
  { id: "hood-outcome-3", src: "/Hood-holidays-outcome-4.PNG" },
  { id: "hood-outcome-4", src: "/Hood-holidays-outcome-5.JPEG" },
],
        metrics: [
          {
            value: "920K+",
            label: "unique participants across 6 days",
            detail: "Highest-attended live event in Robinhood history",
          },
          {
            value: "200K",
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
            detail: "Captured the attention of nearly half a million users simultaneously",
          },
        ],
      },
    ],
          reflection: {
      heading: "Reflection",
      text: [
        "When you're building something from the ground up, the only limitation is your imagination… and what engineering can reasonably create from scratch in three months.",
        "The largest product constraint I felt was the gap between gift claim and gift reveal. While I believe the content strategy successfully transformed that delay into anticipation, the end-to-end experience still required users to internalize a less intuitive mental model than an immediate reward flow.",
        "If revisiting the experience, I would explore ways to reduce or eliminate this operational gap altogether so the emotional payoff feels even more seamless.",
      ],
    },
  },
    {
    slug: "gold-card",
    title: "Gold Card Voice & Tone",
    subtitle: "Building a voice system and a seat at the table—from copy support to strategic partner.",
    company: "Robinhood",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "Systems Design | Content Design",
    heroDescription: "Building a voice system and a seat at the table—from copy support to strategic partner.",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        fullWidth: true,
        subLists: [
          {
            items: [
              "After <strong>Robinhood's acquisition of X1,</strong> the Gold Card entered Robinhood's product ecosystem as a premium credit card with 3% cash back, exclusive benefits, and a separate app experience.",
              "When I joined as the team's first embedded Content Designer, two gaps became clear: the Gold Card's existing infrastructure <strong>lacked a cohesive voice strategy,</strong> and content design was treated as a <strong>late-stage polish layer</strong> rather than a strategic partner.",
              "My goals were twofold: define a scalable voice and tone system for the Gold Card, and demonstrate how content could improve user trust, reduce friction, and influence product decisions.",
            ],
          },
          {
            heading: "My role",
            asList: true,
            items: [
              "<strong>First embedded Content Designer</strong> on the Gold Card team",
              "Led end-to-end content audit of the live experience",
              "Created Gold Card voice, tone, and grammar standards",
              "Rewrote onboarding and key product surfaces",
              "Partnered with Product, Design, and leadership on messaging strategy",
            ],
          },
        ],
      },
      {
        id: "challenge",
        heading: "The Challenge: Redefining Premium",
        fullWidth: true,
        subLists: [
          {
            items: [
              "The Gold Card's legacy voice wasn't built under Robinhood's content standards.",
              "Robinhood's brand voice is approachable, conversational, and human. The Gold Card, meanwhile, was being shaped around lofty descriptors like <strong>white-glove</strong> and <strong>concierge</strong>—but without a shared understanding of <em>how those qualities translated in language.</em>",
              "In practice, \"premium\" had become shorthand for formal. This assumption showed up across the experience: dense, passive language sometimes created friction at high-stakes moments, especially onboarding, where users were asked for sensitive information without enough context.",
              "This revealed the central challenge: <em>How do you make a financial product feel elevated without sacrificing warmth, clarity, or trust?</em>",
              "I landed on an insight that shaped my path forward: <strong>Premium doesn't mean formal—it means intentional.</strong>",
              "Premium experiences don't feel elevated because they sound stuffy. It's because every detail feels deliberate: <strong>clear</strong> when stakes are high, <strong>restrained</strong> when simplicity is needed, and <strong>aspirational</strong> when emotion matters.",
            ],
          },
        ],
      },
      {
        id: "audit",
        heading: "Audit: Diagnosing the Problem",
        subLists: [
          {
            items: [
              "Rather than immediately rewriting screens, I audited the full live experience to identify where language was creating friction. Three patterns emerged—especially visible in onboarding.",
            ],
          },
        ],
        table: {
          headers: ["Pattern", "Symptom", "User impact", "Content solution"],
          rows: [
            [
              "Overly formal, dry language",
              "Dense legal phrasing, lengthy and vague CTAs",
              "Reduced understanding and trust",
              "Reframe with confidence and brevity",
            ],
            [
              "Weak information hierarchy",
              "Passive voice created unclear ownership of action",
              "Increased cognitive load in high-stakes flows",
              "Make ownership clear with active voice",
            ],
            [
              "Friction and dead ends",
              "Unhappy paths lacked clarity—recovery paths were unclear",
              "Higher frustration and drop-off in sensitive moments",
              "Provide context and next steps when questions arise",
            ],
          ],
        },
      },
      {
        id: "shared-language",
        heading: "Building a Shared Language",
        subLists: [
          {
            items: [
              "A major challenge: <strong>feedback around content was highly subjective</strong>. Conversations often sounded like \"make this more premium\" or \"more white-glove\" without clear criteria for decision-making.",
              "To solve this, I created a <strong>Gold Card content standards framework</strong> that <em>translated abstract taste into actionable guidance</em> and gave the team shared language for evaluating tradeoffs.",
              "The voice system centered around three principles:",
            ],
          },
          {
            asList: true,
            items: [
              "<strong>Premium, not pretentious</strong>: elevated but not exclusionary.",
              "<strong>Confident, not cold</strong>: warmer language without sacrificing credibility.",
              "<strong>Clear and concise, above all</strong>: in high-stakes moments, clarity is king.",
            ],
          },
          {
            items: [
              "I also adapted Robinhood's broader editorial standards—including active voice, grammar, and readability guidance—to ensure Gold Card maintained consistency with the larger product ecosystem.",
              "This shifted content discussions away from personal preference and towards <strong>clearer, more intentional decisions.</strong>",
            ],
          },
        ],
        images: [
          {
            id: "gold-card-voice-framework",
            src: "/Voice-framework.png",
            aspect: "aspect-[4/3]",
            caption: "The Gold Card needed to feel premium without creating distance—elevating the experience through clarity, warmth, and intentional language.",
          },
        ],
      },
      {
        id: "reducing-friction",
        heading: "Reducing Friction in High-Stakes Moments",
        fullWidth: true,
        subLists: [
          {
            items: [
              "One of the largest onboarding drop-off points occurred when users were asked to provide their Social Security number.",
              "The screen requested highly sensitive information without clearly answering the questions users actually cared about: <em>Why do you need this? Will you conduct a hard pull on my credit? What happens next?</em>",
              "I introduced <strong>lightweight disclosure content</strong> explaining that Robinhood would use the SSN to perform a soft pull of the user's credit report and verify their identity, along with <strong>clear expectations</strong> of the timeline for next steps.",
              "Users are far more willing to share sensitive information when they understand why it's needed and what happens next. In high-stakes financial flows, clarity is one of the strongest trust signals you can offer.",
              "This small content change decreased ambiguity at a psychologically sensitive moment and helped <strong>reduce onboarding drop-off</strong> after launch.",
            ],
          },
        ],
      },
      {
        id: "earning-seat",
        heading: "Earning a Seat at the Table",
        fullWidth: true,
        subLists: [
          {
            items: [
              "My manager and I initiated this audit proactively to challenge the team's existing mental model of content as late-stage execution, and to demonstrate content's end-to-end impact on UX, trust, and conversion.",
              "A turning point came when leadership reviewed my onboarding audit and <strong>approved the proposed changes</strong> in full.",
              "The shift became most visible in live messaging workshops. Instead of bringing me in late to refine microcopy, leadership began inviting me to pressure-test messaging directions in real time—<strong>using content to shape decisions</strong> instead of polishing them.",
              "The voice framework continued to be used after my move to a different team, and later helped inform foundational messaging for Robinhood Banking.",
            ],
          },
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      text: "This project reinforced something I still believe deeply: content design is rarely just about the words on a screen. Done well, it shapes how teams think, how products build trust, and how strategy becomes tangible in the user experience.",
    },
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


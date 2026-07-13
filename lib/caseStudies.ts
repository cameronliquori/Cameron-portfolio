import { CaseStudyData } from "@/types/caseStudy";

export const caseStudies: CaseStudyData[] = [
  {
    slug: "hood-holidays",
    title: "HOOD Holidays 2025",
    subtitle: "6 days. $7M in prizes. 100+ screens. One content POV to take it to 100.",
    company: "Robinhood",
    thumbnail: "/Hood-holidays-hero.jpg",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "0 → 1 launch | Systems Design | Content Design",
    heroDescription:
      "6 days. $7M in luxury prizes. 1 content POV to take it to 100.",
    heroMetricsSummary: "920K participants · +200K new Gold subscribers · 7.84M social impressions",
   heroImage: "Hood-holidays-full-header.jpg",
    titleNoWrap: true,
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
        ],
      },
      {
        id: "decision-1",
        heading: "Key Decision 1: Create Anticipation",
        subLists: [
          {
            items: [
              "The biggest UX challenge emerged from that final constraint: users could “opt in” to claim a gift as soon as that day's prizes were announced, but fulfillment and “reveal” of a user’s specific gift required manual verification—a <strong>12–20 hour process</strong>.",
              "My goal: reframe this built-in friction into something engaging and intentional.",
              "<strong>I developed a content strategy centered around anticipation:</strong> making the daily gift lineup reveal as exciting as the eventual gift unwrap.",
              "Each day’s gift lineup reveal opened with content designed to create buildup and hype.",
              "These “drumroll” moments reinforced the key benefit: if you’re here seeing the reveal, you’re guaranteed a gift later today.",
              "The lineup reveals became major moments of excitement both in-product and on social, turning a backend limitation into a core emotional beat of the experience.",
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
              "This experience spanned more than 100 screens and 40+ unique prizes—<strong>consistency was critical.</strong> I established three guiding content principles early in development:",
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
              "Robinhood's in-product voice leans informational in complex financial contexts. For HOOD Holidays, I leveraged a more playful, emotionally expressive side of the brand without sacrificing clarity.",
              "To scale this voice across dozens of prize reveal states, I used <strong>AI as an ideation tool</strong> during early exploration.",
              "I generated broad sets of options, then curated, rewrote, and refined final content to ensure every surface met Robinhood's voice and quality standards.",
              "This allowed me to <strong>scale creative variation efficiently</strong> while maintaining a high editorial bar.",
            ],
          },
        ],
        images: [
          { id: "hood-decision-2-img-1", src: "/Hood-holidays-day6-reveal.PNG" },
          { id: "hood-decision-2-img-2", src: "/Hood-holidays-rolex-daytona.PNG" }],
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
              "If users tried to unwrap a gift early, they saw a playful message acknowledging that they'd been caught peeking. Instead of ending the interaction there, <strong>I advocated for an incentive loop:</strong> referring a friend unlocks an early clue about the next day's prizes in the form of a riddle.",
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
          { id: "hood-decision-3-img-3", src: "/Hood-holidays-sneakpeek-4.PNG", caption: "Day 2: a trip to Hawaii" },
          { id: "hood-decision-3-img-4", src: "/Hood-holidays-riddle-6.PNG", caption: "Day 6: a Porsche 911" },
        ],
      },
      {
        id: "cross-functional",
        heading: "Cross-Functional Leadership",
        subLists: [
          {
            items: [
              "Beyond content execution, I served as a connective partner across multiple disciplines.",
              "I worked closely with Product Design and Product Management to explore and create concepts, helping shape <strong>user journeys, information architecture, and wireframes</strong> that we successfully presented to Robinhood’s CEO.",
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
            detail: "Highest attendance for a live event in Robinhood history",
          },
          {
            value: "200K",
            label: "new Robinhood Gold subscriptions",
            detail: "Exceeded finance's target by 60K",
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
    thumbnail: "/Option-2.PNG",
    tags: ["Systems Design", "Content Design"],
    eyebrow: "Systems Design | Content Design",
    heroDescription: "Building a voice system and a seat at the table—from copy support to strategic partner.",
    heroImage: "Gold-card-hero.PNG",
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
              "Robinhood's brand voice is approachable, conversational, and human. The Gold Card, meanwhile, was being shaped around lofty descriptors like <em>white-glove</em> and <em>luxury</em>—but without a shared understanding of <strong>how those qualities translated in language.</strong>",
              "In practice, \"premium\" had become shorthand for formal. This assumption showed up across the experience: dense, passive language created friction at high-stakes moments, especially onboarding, where users were asked for sensitive information without enough context.",
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
              "<strong>Confident, not cold</strong>: channeling high-end concierge energy.",
              "<strong>Clear and concise, above all</strong>: in financial contexts, clarity is king.",
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
    title: "Gold Rewards Program",
    subtitle: "Building a premium membership beyond APY.",
    company: "Robinhood",
    tags: ["Growth", "Systems Design", "Content Design"],
    eyebrow: "Growth | Systems Design | Content Design",
    heroDescription: "Building a premium membership beyond APY.",
    heroMetricsSummary: "120K new Gold subscriptions · 5 distinct reward types · Reusable patterns for recurring monthly rewards",
    heroImage: "/Rewards-hero.JPG",
    titleNoWrap: true,
    sections: [
      {
        id: "overview",
        heading: "Overview",
        fullWidth: true,
        subLists: [
          {
            items: [
              "Robinhood Gold is a premium subscription built around a hero value proposition: a market-leading APY on uninvested cash. But as interest rates fluctuated, that advantage became less differentiated, while many members weren’t engaging with Gold’s other benefits.",
              "To continue growing the membership, we needed to <em>redefine what Gold represented</em>—and give members a compelling reason to stay subscribed beyond APY alone.",
              "The objective: create recurring, <strong>\“no-brainer\”</strong> value that users could immediately understand, whether or not they were active traders.",
              "Every reward needed to answer one question: Would this alone make Gold feel worth $5 a month?",
              "To accomplish this, our team created the <strong>Gold Rewards Program</strong>: a monthly ecosystem of premium experiences, exclusive products, and limited-time perks designed to deliver memorable value and give members a reason to return every month.",
              "From the earliest concept sketches through launch, I partnered closely with Product Design to shape the experience, leading content strategy, information architecture, product naming, UX writing, and cross-functional product definition across the program.",
            ]
          },
          {
            heading: "My role",
            asList: true,
            items: [
              "Content strategy",
              "Product naming",
              "Information architecture",
              "UX writing",
              "Cross-functional product definition",
              "Design partnership"
            ]
          }
        ]
      },
      {
        id: "decision-1",
        heading: "Key Decision 1: Defining a New Rewards Language",
        subLists: [
          {
            items: [
              "Before we designed new rewards, we had to answer a more fundamental question: what should the Gold Rewards Program actually be?",
              "When we kicked off, Robinhood already had multiple incentive ecosystems: Gold membership benefits, Gold Card point rewards, Offers Hub, and promotional incentives. Introducing another destination created an immediate risk—users could easily assume this was undifferentiated from the existing offers experience.",
              "The Offers Hub team initially proposed that we merged the new program directly into their page. I advocated against this—the Offers Hub intentionally mixed Gold and non-Gold promotions. The Gold Rewards program, on the other hand, needed to feel like an exclusive membership benefit—not another standard list of promotions.",
              "Keeping the experiences separate reinforced the premium, Gold-only positioning while creating a clearer mental model for customers.",
              "I also pushed against using Gold Card points for the MVP of our rewards program. While reusing the existing points ecosystem might have created internal consistency, it would have excluded Gold members without the credit card and complicated the experience with another prerequisite."
            ]
          }
        ],
        images: [
          { id: "gold-rewards-decision-1-diagram", src: "/Chart of perks.png", caption: "Ecosystem positioning diagram", aspect: "aspect-[16/9]" }
        ]
      },
      {
        id: "decision-1-table",
        table: {
          headers: ["Option", "Pros", "Cons"],
          rows: [
            [
              "Merge into Offers Hub",
              "Easier for engineering",
              "Dilutes Gold-exclusive positioning"
            ],
            [
              "Merge with Gold Card points",
              "Aligns with existing rewards structure in ecosystem",
              "Excludes Gold customers who don't have the credit card"
            ],
            [
              "Separate Gold Rewards Program page",
              "Clearer and cleaner mental model",
              "New destination, need to build from scratch"
            ]
          ],
          footer: "My recommendation: Separate Gold Rewards Program page"
        }
      },
      {
        id: "decision-2",
        heading: "Key Decision 2: Making Value Feel Tangible",
        subLists: [
          {
            items: [
              "Gold needed to feel aspirational and packed with real-world value, rather than transactional.",
              "Instead of asking, \"How can we save people money with Gold?\" we asked, \"What would feel genuinely exciting to receive every month?\"",
              "Due to this, we intentionally chose experiences, physical goods, and surprises over traditional discounts.",
              "From April through June, the ecosystem included:"
            ]
          },
          {
            asList: true,
            items: [
              "Monthly first-come, first-served ticket drops for high-profile sporting events",
              "Monthly crypto mystery gifts",
              "Six complimentary months of DashPass",
              "The Gold Collection merchandise store",
              "A limited-time Gold Bar Private Sale"
            ]
          },
          {
            items: [
              "Although the launch included five distinct reward types, my goal wasn't to design five separate experiences. I established <strong>reusable patterns for naming, hierarchy, eligibility, and recurring user flows</strong> so future rewards could slot naturally into the experience without reinventing it each month."
            ]
          }
        ],
        images: [
          { id: "gold-rewards-decision-2-img-1", src: "/Crypto gift.GIF", caption: "Crypto mystery gift" },
          { id: "gold-rewards-decision-2-img-2", src: "/World cup.GIF", caption: "World Cup ticket drop" }
        ]
      },
      {
        id: "decision-3",
        heading: "Key Decision 3: Designing Excitement Without Creating False Expectations",
                subLists: [
          {
            items: [
              "The first-come, first-served ticket drops introduced an unusual content design challenge: how do you create anticipation without creating unrealistic expectations?",
              "Winning required users to opt in, join a Shopify-hosted queue at a specific time, and compete for an extremely limited number of tickets—sometimes only 20 tickets for 100,000 entrants.",
              "The experience needed to feel exciting while accurately communicating that participation didn't guarantee success.",
              "We ran this structure several times, with each drop functioning as a live usability test. After each event, we refined the experience based on observed user confusion."
            ]
          },
          {
            asList: true,
            items: [
              "After the Super Bowl drop, I rewrote the in-app instructions to make participation requirements <strong>more explicit.</strong>",
              "Following the NBA Finals drop, I revised queue messaging within Shopify to more clearly distinguish joining the queue from actually receiving tickets.",
              "When the Gold Bar Private Sale surfaced similar frustrations, our team ultimately shifted away from first-come-first-served mechanics entirely.",
              "For the World Cup ticket drop, we moved to asynchronous backend allocation, significantly <strong>reducing disappointment while preserving excitement.<strong>"
            ]
          },
          {
            items: [
              "Each drop informed the next. By treating launch as the beginning rather than the finish line, we both refined the experience and evolved the underlying system with every release."
            ]
          }
        ],
        images: [
          { id: "gold-rewards-decision-3-diagram", src: "", caption: "Diagram placeholder: iteration cycle across drops" }
        ]
      },
      {
        id: "beyond-product",
        heading: "Designing Beyond the Product",
        subLists: [
          {
            items: [
              "Because the ticket experience couldn't be hosted inside Robinhood, we designed and launched a companion Shopify experience that still needed to feel unmistakably Robinhood.",
              "Working within an unfamiliar platform meant establishing new patterns for navigation, privacy messaging, and content structure while maintaining a seamless voice across two products.",
              "Creating a consistent voice and customer experience across two platforms became just as important as designing the rewards themselves."
            ]
          }
        ],
        images: [
          { id: "gold-rewards-beyond-img-1", src: "", caption: "iPhone screen placeholder" },
          { id: "gold-rewards-beyond-img-2", src: "", caption: "iPhone screen placeholder" }
        ]
      },
{
        id: "outcome",
        heading: "Outcome",
        fullWidth: true,
        subLists: [
          {
            items: [
              "The Gold Rewards Program drove more than <strong>120,000</strong> new Gold subscriptions within 3 months of launch, helping reposition Gold around recurring monthly value rather than a single hero benefit.",
              "Among the available rewards, the monthly crypto gifts became the strongest acquisition driver, while recurring monthly rewards encouraged users to return rather than viewing Gold as a one-time purchase.",
              "The first-come, first-served events also gave us valuable insight about expectation management, ultimately influencing how future limited releases were designed."
            ]
          }
        ]
      },
      {
        id: "outcome-images",
        images: [
          { id: "gold-rewards-outcome-1", src: "", caption: "Outcome image placeholder" },
          { id: "gold-rewards-outcome-2", src: "", caption: "Outcome image placeholder" },
          { id: "gold-rewards-outcome-3", src: "", caption: "Outcome image placeholder" },
          { id: "gold-rewards-outcome-4", src: "", caption: "Outcome image placeholder" }
        ],
        metrics: [
          {
            value: "120K+",
            label: "new Gold subscriptions",
            detail: "Total within first 3 months"
          },
          {
            value: "5",
            label: "distinct reward types launched",
            detail: "Tickets, crypto gifts, DashPass, merchandise, and private sales"
          },
          {
            value: "Reusable templates",
            label: "for recurring monthly rewards",
            detail: "Naming, hierarchy, eligibility, and user flows built to scale"
          }
        ]
      },

    ],
    reflection: {
      heading: "Reflection",
      text: [
        "Gold Rewards began as a response to changing market conditions, but the project ultimately became about something much larger: redefining what Gold membership meant.",
        "The biggest lesson I took away was that strong subscription products aren't built around a single feature. They're built around a system of reasons to return.",
        "This project reinforced how content strategy can shape both how a product is understood and what the product becomes."
      ]
    }
  },
  {
    slug: "page-ai-chatbot",
    title: "Coming soon...",
    subtitle: "Coming soon...",
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


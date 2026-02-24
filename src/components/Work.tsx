import { motion } from "motion/react";
import { ArrowRight, Search, Lightbulb, TestTube, Rocket, Users, Clock, Target, ZoomIn, ZoomOut, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface ProjectContext {
  company: string;
  duration: string;
  team: string;
  myRole: string;
}

interface ProcessImage {
  url: string;
  caption: string;
  phase: string;
}

interface CaseStudy {
  title: string;
  tagline: string;
  context: ProjectContext;
  problem: string;
  challenge: string;
  approach: {
    phase: string;
    description: string;
    icon: any;
    details: string[];
  }[];
  processImages: ProcessImage[];
  keyInsight: string;
  solution: string;
  solutionImages: string[];
  outcomes: {
    metric: string;
    description: string;
  }[];
  learnings: string[];
  heroImage: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "CapchainX",
    tagline: "Designing Infrastructure for Legally-Backed Tokenized Equity (ICO Platform)",
    context: {
      company: "CapchainX (Blockchain Fintech Startup)",
      duration: "1 year",
      team: "1 UI/UX Designer (me), CEO, CTO, 2 frontend developers, 2 fullstack developers, 1 Business Analyst",
      myRole: "End-to-end Product Designer, UX Strategy, Design System Owner, Marketing Website Design"
    },
    problem: "Small to mid-sized companies face significant barriers when raising capital through traditional IPO processes; regulatory complexity, high costs, and limited accessibility. Meanwhile, blockchain-based fundraising (ICOs) was emerging but lacked legitimacy, clarity, and trust. Companies needed a compliant, structured way to tokenize equity and raise capital through blockchain, but the intersection of cryptocurrency, fundraising, and equity created massive skepticism and confusion for both companies and investors.",
    challenge: "The core challenge was twofold: First, I needed to learn blockchain technology, ICO mechanics, and traditional IPO structures from scratch while designing the platform. Second, I had to design for extreme complexity; translating highly technical financial and blockchain concepts into something clear and navigable for users who were equally unfamiliar with the space. The product required building trust in an inherently skeptical domain while making the complex understandable without oversimplifying critical financial decisions.",
    approach: [
      {
        phase: "Learning & Discovery",
        description: "Since blockchain and ICO mechanics were entirely new to me, I treated this as both a design and learning process. I studied the company's investor deck, conducted multiple working sessions with the CEO, and deeply researched how traditional IPO structures worked to understand their decentralized equivalent.",
        icon: Search,
        details: [
          "Studied blockchain technology and Ethereum-based token mechanics",
          "Learned traditional IPO processes to understand tokenized equity equivalents",
          "Conducted working sessions with CEO to understand legal structure and business model",
          "Researched regulatory requirements and compliance frameworks for ICOs",
          "Analyzed existing crypto platforms to identify trust gaps and design patterns"
        ]
      },
      {
        phase: "Trust & Clarity Strategy",
        description: "In a high-risk financial domain, clarity is a prerequisite for trust. I focused on designing for legitimacy through transparency, education, and responsibility; avoiding crypto hype while emphasizing structured infrastructure and legal compliance.",
        icon: Lightbulb,
        details: [
          "Required KYC process for all companies to reinforce legitimacy and compliance",
          "Designed messaging that emphasized legal consultation and contractually-backed tokens",
          "Created educational content explaining 'Crypto Equity' in plain language",
          "Built progressive disclosure to reveal complex information in digestible steps",
          "Avoided financial promises; focused on transparency through real-time fundraising timelines"
        ]
      },
      {
        phase: "Structured Flow Design",
        description: "I broke down the ICO creation process into clear, guided steps with strategic guardrails to prevent misconfiguration. The design intentionally prioritized clarity over speed, treating each decision point as an opportunity for education rather than conversion optimization.",
        icon: TestTube,
        details: [
          "Designed step-by-step ICO setup: token supply, equity percentage, pricing mechanism",
          "Created contextual tooltips and validation to explain unfamiliar blockchain concepts",
          "Built auction logic options (Constant, Exponential, Tiered pricing) with clear explanations",
          "Implemented legal document upload and review process with status transparency",
          "Designed monitoring dashboard showing token metrics, wallet balances, and fundraising progress"
        ]
      },
      {
        phase: "MVP Launch & Validation",
        description: "I delivered a complete MVP including product flows, design system, and marketing website. The CEO approved the design as development-ready for early adopters. The platform successfully launched publicly with functional ICO infrastructure.",
        icon: Rocket,
        details: [
          "Created end-to-end company onboarding (manual screening for legal validation)",
          "Built ICO setup, legal review, and launch monitoring dashboards",
          "Designed investor participation flow with real-time transaction states",
          "Developed complete design system for consistency and scalability",
          "Launched marketing website emphasizing credibility and compliance over hype"
        ]
      }
    ],
    processImages: [],
    keyInsight: "Product readiness does not equal market readiness. In financial infrastructure products, trust-building and market education are as important as usability. A product can be technically ready and beautifully structured, yet still struggle without ecosystem trust, regulatory confidence, and public understanding. Infrastructure products must align with market maturity; not just feature completeness.",
    solution: "I designed CapchainX as a compliance-first ICO platform that prioritized clarity, transparency, and trust over speed and hype. The platform guided companies through structured ICO setup with educational guardrails, required legal documentation review, and provided real-time fundraising transparency. Every design decision emphasized legitimacy: KYC requirements, plain-language explanations, contextual education, and avoiding speculative messaging. The result was a product that successfully launched and was operationally ready; but taught me that infrastructure adoption requires ecosystem-level trust beyond interface clarity.",
    solutionImages: [
      "https://i.ibb.co/LX4vhL7s/Dashboard.png",
      "https://i.ibb.co/nN050hD9/Wallet.png",
      "https://i.ibb.co/Gj4gHLY/ICO-Setup.png",
      "https://i.ibb.co/qFPvT407/Send-Tokens.png"
    ],
    outcomes: [
      {
        metric: "Successfully launched publicly",
        description: "MVP delivered and approved by CEO as development-ready for early adopters"
      },
      {
        metric: "Complete platform infrastructure built",
        description: "End-to-end ICO creation, legal review, and investor participation flows operational"
      },
      {
        metric: "Design system established",
        description: "Comprehensive component library for product and marketing consistency"
      },
      {
        metric: "Market adoption remained low",
        description: "Product was ready, but ecosystem trust and public education were not yet mature enough"
      }
    ],
    learnings: [
      "If rebuilding today, I would advocate for securing 1–2 flagship pilot companies before public launch to build visible credibility and proof of concept",
      "Would introduce educational modules inside the platform to guide companies through 'What is an ICO?' and 'Is this right for your business?' rather than assuming understanding",
      "Should have built interactive simulations to demonstrate token sale scenarios and possible outcomes before companies committed to launching",
      "As a senior designer, I learned that financial infrastructure requires ecosystem alignment beyond UI/UX excellence; market maturity, regulatory confidence, and anchor success stories are as critical as usability",
      "This project taught me the difference between solving operational problems (launching an ICO) and solving psychological problems (trusting tokenized equity); that distinction reshaped how I think about product-market fit"
    ],
    heroImage: "https://i.ibb.co/PGNcLLT4/ccx-logo.webp",
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    title: "Free MusicTribe",
    tagline: "Building a Trust-First C2C Marketplace for a Global Music Community",
    context: {
      company: "MusicTribe (Music Technology & Community)",
      duration: "1.5 years",
      team: "Cross-functional team across product, business, and technical teams",
      myRole: "End-to-end UX/UI Designer, Design System Owner, User Research Lead"
    },
    problem: "MusicTribe had an established global community where musicians and gear enthusiasts interacted with each other and with MusicTribe's brands. While active in discussions and brand engagement, there was no structured way for members to safely buy and sell music gear within the ecosystem. Community members faced a lack of trust when dealing with strangers, safety risks without proper safeguards, and high friction in peer-to-peer selling across external platforms. The platform needed to strengthen community engagement and extend the ecosystem beyond conversations into real transactions.",
    challenge: "The most significant constraint was the absence of a built-in payment system. Without transactional protection or an integrated payment solution, securing transactions end-to-end was inherently difficult and required alternative trust mechanisms. The platform needed to establish trust between strangers while preventing abuse and scams—all without the safety net of payment-backed guarantees.",
    approach: [
      {
        phase: "Research & Discovery",
        description: "I conducted heavy user research and competitive analysis to understand how to build trust in a marketplace without payment protection. The focus was on understanding what makes users feel confident when transacting with strangers.",
        icon: Search,
        details: [
          "Analyzed competitors like Reverb and eBay to understand trust mechanisms",
          "Conducted feature comparison and prioritization exercises with stakeholders",
          "Researched identity verification patterns from major social platforms",
          "Mapped community expectations and technical limitations",
          "Identified that trust needed to be established through identity, transparency, and traceability"
        ]
      },
      {
        phase: "Trust Strategy Design",
        description: "Without payment system protection, I designed a multi-layered identity verification process. The insight was that trust was more important than speed; a marketplace can launch quickly, but without trust, it cannot sustain participation.",
        icon: Lightbulb,
        details: [
          "Designed multi-layered identity verification (email, mobile, Facebook)",
          "Created distinction between casual users and verified sellers requiring Shop accounts",
          "Introduced in-platform messaging for auditability and traceability",
          "Implemented seller and buyer ratings and transaction history",
          "Built safety mechanisms: feedback/reporting, IP blocking, planned audit trails"
        ]
      },
      {
        phase: "Information Architecture",
        description: "I structured the selling flow as a step-by-step process to reduce cognitive load, and designed a centralized dashboard for both buyers and sellers. The architecture intentionally constrained ease of checkout to encourage confidence-building before transactions.",
        icon: TestTube,
        details: [
          "Designed seller onboarding as gated process requiring Shop account creation",
          "Created step-based listing flow: post details → product details → shipping → publish",
          "Built location-aware discovery with categorization and algorithm-driven recommendations",
          "Designed product detail pages with prominent trust signals (verification, ratings, history)",
          "Integrated messaging as core architectural component for contextual, auditable discussions"
        ]
      },
      {
        phase: "Solution & System",
        description: "I delivered the complete platform with all V1 features, including seller accounts, verification flows, offer-making system, and a dedicated design system. The platform was approved for public launch without deferrals.",
        icon: Rocket,
        details: [
          "Created comprehensive buyer and seller dashboards with quick actions",
          "Implemented bidding and offer system for flexible selling strategies",
          "Designed News & Articles section and Help Center for self-service support",
          "Built complete design system for consistency and scalability",
          "Defined foundational error states and edge case handling for security"
        ]
      }
    ],
    processImages: [
      {
        url: "https://i.ibb.co/d4b4QGMy/Screenshot-2026-01-23-at-10-17-54-PM.png",
        caption: "Initial process flow chart mapping user journeys, verification requirements, and trust mechanisms",
        phase: "Process Flow"
      },
      {
        url: "https://i.ibb.co/NdhN7vq4/c2c-styleguide.png",
        caption: "Design system and component library built for Free MusicTribe; ensuring consistency and scalability across all marketplace features",
        phase: "Design System"
      }
    ],
    keyInsight: "Trust is more important than speed. A marketplace can launch quickly, but without trust, it cannot sustain participation. Designing a marketplace is ultimately about building trust, not just product showcases.",
    solution: "I designed Free MusicTribe with trust embedded at every layer: multi-step identity verification for users and mandatory Shop accounts for sellers, in-platform messaging for auditability, transparent seller ratings and history, and intentional friction that encouraged buyer-seller confidence-building before transactions. Rather than optimizing for instant checkout, the platform emulated face-to-face transactions in a digital environment—prioritizing trust over speed.",
    solutionImages: [
      "https://i.ibb.co/s9C73w0K/Screenshot-2026-01-23-at-10-41-20-PM.png",
      "https://i.ibb.co/cKWG6vLL/Screenshot-2026-01-23-at-10-44-10-PM.png",
      "https://i.ibb.co/prbXBW1S/Screenshot-2026-01-23-at-10-46-37-PM.png",
      "https://i.ibb.co/PZy6C5Gq/Screenshot-2026-01-23-at-10-49-24-PM.png"
    ],
    outcomes: [
      {
        metric: "Successfully launched to production",
        description: "All planned V1 features shipped and approved for public launch"
      },
      {
        metric: "Stakeholder alignment achieved",
        description: "Feature prioritization exercise aligned expectations despite no payment system"
      },
      {
        metric: "Platform integrity maintained",
        description: "Multi-layered verification and safety mechanisms created accountability"
      },
      {
        metric: "Design system established",
        description: "Ensured consistency and enabled rapid iteration for future features"
      }
    ],
    learnings: [
      "If I were to redesign without a payment system again, I'd decouple exploration from verification; let users browse freely, only require KYC at point of transaction to reduce early abandonment",
      "Would invest more heavily in self-service enablement: guided onboarding tours, structured knowledge base, contextual tooltips; critical when operational support is limited",
      "As a senior designer, I would have more strongly advocated for a built-in or third-party payment system and dedicated administrators/moderators as core infrastructure, not optional enhancements",
      "The lack of user support infrastructure significantly impacted adoption; without dedicated support personnel, users had limited assistance at critical moments that influence trust and engagement"
    ],
    heroImage: "https://cdn.dribbble.com/userupload/24509585/file/original-6448bf00ef091adcb52db5907e2d2336.png?resize=3200x2400&vertical=center",
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  }
];

function CaseStudyDetail({ study, index }: { study: CaseStudy; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [imageScale, setImageScale] = useState(1);

  const handleZoomIn = () => {
    setImageScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setImageScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleCloseModal = () => {
    setZoomedImage(null);
    setImageScale(1);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group"
      >
        <div className="relative rounded-3xl overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-white/10">
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <ImageWithFallback
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover object-[center_75%] scale-150"
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${study.gradient}`} />
            <div className="absolute inset-0 bg-neutral-950/75" />
            
            <div className="absolute inset-0 p-4 sm:p-6 lg:p-12 flex flex-col justify-end">
              <h3 className="text-[32px] sm:text-3xl lg:text-5xl text-white mb-2 sm:mb-3">{study.title}</h3>
              <p className="text-sm sm:text-lg text-white/80 mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{study.tagline}</p>
              
              {/* Context Pills - Hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-sm">{study.context.team}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-sm">{study.context.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Target className="w-3.5 h-3.5" />
                  <span className="text-sm">{study.context.myRole}</span>
                </div>
              </div>
              
              {/* Mobile-only simplified pills */}
              <div className="flex sm:hidden gap-2">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{study.context.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Target className="w-3 h-3" />
                  <span className="text-xs">Lead Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-12 space-y-6 sm:space-y-8 lg:space-y-12">
            {/* The Problem */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm text-red-400">The Problem</span>
              </div>
              <p className="text-[15px] sm:text-base lg:text-lg text-neutral-300 leading-relaxed mb-3 sm:mb-4">{study.problem}</p>
              <div className="p-3 sm:p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <p className="text-sm text-neutral-400 leading-relaxed">{study.challenge}</p>
              </div>
            </div>

            {/* My Approach - Detailed Process */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-violet-400">My Approach</span>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                {study.approach.map((step, i) => (
                  <div key={i}>
                    {/* Mobile: Icon inline with title */}
                    <div className="flex items-start gap-2 mb-2 sm:hidden">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-violet-400" />
                      </div>
                      <h4 className="text-base text-white">{step.phase}</h4>
                    </div>
                    
                    {/* Desktop: Icon on side */}
                    <div className="hidden sm:flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
                        <step.icon className="w-6 h-6 text-violet-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg text-white mb-2">{step.phase}</h4>
                        <p className="text-base text-neutral-300 mb-4 leading-relaxed">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex gap-3 text-sm text-neutral-400">
                              <span className="text-violet-400 flex-shrink-0">→</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Mobile: Content only */}
                    <div className="sm:hidden">
                      <p className="text-[15px] text-neutral-300 mb-3 leading-relaxed">{step.description}</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex gap-2 text-sm text-neutral-400">
                            <span className="text-violet-400 flex-shrink-0">→</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Images */}
            {study.processImages.length > 0 && (
              <div>
                <h4 className="text-lg sm:text-xl lg:text-2xl text-white mb-4 sm:mb-6">Process & Iteration</h4>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {study.processImages.map((img, i) => (
                    <div key={i} className="group/img">
                      <div className="relative rounded-xl overflow-hidden mb-2 sm:mb-3 bg-neutral-900">
                        <ImageWithFallback
                          src={img.url}
                          alt={img.caption}
                          className="w-full aspect-video object-cover transition-transform duration-300 group-hover/img:scale-105"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="px-2 py-0.5 sm:py-1 rounded text-xs bg-black/50 backdrop-blur-sm text-white border border-white/20">
                            {img.phase}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <Lightbulb className="hidden sm:block w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h4 className="text-base sm:text-lg lg:text-xl text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
                    <Lightbulb className="sm:hidden w-5 h-5 text-amber-400 flex-shrink-0" />
                    Key Insight
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed italic">"{study.keyInsight}"</p>
                </div>
              </div>
            </div>

            {/* Expandable section */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-8 sm:space-y-12">
                {/* The Solution */}
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-green-400">The Solution</span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed mb-6 sm:mb-8">{study.solution}</p>
                  
                  {/* Solution Images */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {study.solutionImages.map((img, i) => (
                      <div 
                        key={i} 
                        className="group/solution rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 cursor-pointer hover:ring-2 hover:ring-violet-400/50 transition-all"
                        onClick={() => setZoomedImage(img)}
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`Solution screenshot ${i + 1}`}
                          className="w-full aspect-video object-cover group-hover/solution:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm text-cyan-400">Impact & Outcomes</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {study.outcomes.map((outcome, i) => (
                      <div key={i} className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-base sm:text-xl lg:text-2xl text-white mb-1.5 sm:mb-2">{outcome.metric}</div>
                        <p className="text-xs sm:text-sm text-neutral-400">{outcome.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What I Learned */}
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-purple-400">What I Learned</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {study.learnings.map((learning, i) => (
                      <li key={i} className="flex gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed">
                        <span className="text-violet-400 flex-shrink-0 text-sm sm:text-lg">→</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Toggle button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white group/btn"
            >
              <span className="text-sm sm:text-base lg:text-lg">{isExpanded ? "Show Less" : "Read Full Case Study"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90" />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Zoomed Image Dialog */}
      {zoomedImage && (
        <Dialog open={!!zoomedImage} onOpenChange={handleCloseModal}>
          <DialogContent 
            className="!max-w-full !max-h-[98vh] !w-full !h-fit p-0 sm:p-2 bg-neutral-950/95 backdrop-blur-xl border-0 sm:border border-white/10"
          >
            <DialogTitle className="sr-only">Design Mockup</DialogTitle>
            <DialogDescription className="sr-only">
              Enlarged view of design mockup
            </DialogDescription>
            
            <div className="relative overflow-auto max-h-[calc(100vh-80px)] sm:max-h-[94vh] w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <img
                src={zoomedImage}
                alt="Zoomed design mockup"
                className="w-full h-auto object-contain rounded-none sm:rounded-lg transition-transform duration-200"
                style={{ 
                  transform: `scale(${imageScale})`,
                  transformOrigin: 'top left',
                }}
              />
            </div>
            
            {/* Mobile-only zoom controls - positioned below image */}
            <div className="sm:hidden flex items-center justify-center gap-2 px-3 py-3 bg-neutral-950/95">
              <button
                className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50 bg-black/80 border border-white/20"
                onClick={handleZoomOut}
                disabled={imageScale <= 1}
              >
                <ZoomOut className="w-5 h-5 text-white" />
              </button>
              <span className="text-xs text-white font-medium min-w-[3rem] text-center px-3 py-2 rounded-full bg-black/80 border border-white/20">
                {Math.round(imageScale * 100)}%
              </span>
              <button
                className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50 bg-black/80 border border-white/20"
                onClick={handleZoomIn}
                disabled={imageScale >= 3}
              >
                <ZoomIn className="w-5 h-5 text-white" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export function Work() {
  return (
    <section id="work" className="relative px-4 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-sm text-neutral-300">Case Studies</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl mb-6">
            How I <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text">Think & Work</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
            A look inside my design process; the thinking, the iterations, and the lessons learned.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <CaseStudyDetail key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
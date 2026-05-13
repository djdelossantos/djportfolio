import { motion } from "motion/react";
import { ArrowRight, Search, Lightbulb, TestTube, Rocket, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./ImageWithFallback";
import dashboardImg from "../assets/dashboard.png";
import walletImg from "../assets/wallet.png";
import icoSetupImg from "../assets/ico-setup.png";
import sendTokensImg from "../assets/send-tokens.png";
import ccxLogo from "../assets/CapchainX_hero.png";
import processFlowImg from "../assets/process-flow.png";
import c2cStyleguideImg from "../assets/c2c-styleguide.png";
import solution1Img from "../assets/solution-1.png";
import solution2Img from "../assets/solution-2.png";
import solution3Img from "../assets/solution-3.png";
import solution4Img from "../assets/solution-4.png";
import dribbbleUploadImg from "../assets/dribbble-upload.png";
import invoisureDashboardImg from "../assets/invoisure-dashboard.jpg";
import invoisureMerchantPortalImg from "../assets/invoisure-customer-management.png";
import invoisureCustomerScreenImg from "../assets/invoisure-invoice.png";
import invoisureEmailTemplateImg from "../assets/invoisure-email-template.png";
import invoisureHeroImg from "../assets/Invoisure_hero.png";

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

const caseStudySections = [
  { id: "case-study-problem", label: "The Problem" },
  { id: "case-study-challenge", label: "The Challenge" },
  { id: "case-study-approach", label: "My Approach" },
  { id: "case-study-insight", label: "Key Insight" },
  { id: "case-study-solution", label: "The Solution" },
  { id: "case-study-outcomes", label: "Impact & Outcomes" },
  { id: "case-study-learnings", label: "What I Learned" },
] as const;

const caseStudies: CaseStudy[] = [
  {
    title: "Invoisure",
    tagline: "Unifying Merchant Operations Through Intelligent Workflow Design",
    context: {
      company: "Invoisure (Cloud-based SaaS Platform)",
      duration: "2 years",
      team: "1 Product Designer (me), CEO, 2 frontend developers, 2 backend developers",
      myRole: "End-to-end Product Designer, UX Strategy Lead, Design System Owner"
    },
    problem: "Merchants running expanding businesses dealt with operational fragmentation throughout their workflow. They used different tools for billing, payment collection, inventory management, and customer data, with each tool working separately. This separation led to operational challenges, such as creating invoices manually for both one-time and recurring payments, missed or delayed payment collection because of inadequate tracking, and extensive time spent consolidating data from various systems. Without a central view, merchants did not have real-time information about sales performance, inventory levels, and financial status. The outcome was inefficiency, mistakes, and restricted growth as their businesses expanded.",
    challenge: "The main design challenge was combining complex, multi-layered merchant workflows, including billing, payments, inventory, customer management, and reporting, into a single unified system without losing flexibility or control. Merchants needed a platform that could manage various business models, such as one-time invoices, recurring billing, and product sales, while allowing for unique branding through white-labeling. I had to design for three distinct user groups at the same time: admins who manage system settings, merchants who operate daily tasks, and customers who receive invoices and make payments. The architecture needed to support customization while ensuring consistency, and the interface had to make intricate financial and operational data easy to use.",
    approach: [
      {
        phase: "Discovery & Problem Definition",
        description: "I began by mapping the fragmented merchant ecosystem to understand the root causes of operational inefficiency. The goal was to identify where manual processes, data silos, and tool-switching created the most friction.",
        icon: Search,
        details: [
          "Conducted stakeholder interviews with CEO to understand business model and merchant pain points",
          "Mapped existing merchant workflows across billing, inventory, payments, and customer management",
          "Identified critical gaps: lack of centralized data, manual invoice generation, poor payment tracking visibility",
          "Analyzed competing platforms to understand baseline expectations and differentiation opportunities",
          "Defined three core user personas: System Admins, Merchants, and End Customers"
        ]
      },
      {
        phase: "Strategy & Information Architecture",
        description: "I organized the platform based on role-based access and clear workflows. The design had to allow for admin-level system setup, merchant-level operational control, and easy use for customers, all within a white-labeled environment.",
        icon: Lightbulb,
        details: [
          "Designed three-tier information architecture: Admin Panel, Merchant Portal, Customer-Facing Screens",
          "Defined core workflows: invoice creation (one-time & recurring), payment collection, inventory tracking, reporting",
          "Built notification strategy integrating email and SMS touchpoints for payment reminders and confirmations",
          "Established white-labeling framework allowing brand customization without structural fragmentation",
          "Prioritized features based on merchant operational frequency and impact on payment collection speed"
        ]
      },
      {
        phase: "Design System & Scalable Patterns",
        description: "I created a comprehensive design system that balanced white-label flexibility with structural consistency. The system needed to support rapid development while ensuring usability across admin, merchant, and customer interfaces.",
        icon: TestTube,
        details: [
          "Built modular component library supporting theme customization for white-labeling",
          "Designed reusable UI patterns for recurring actions: invoice generation, payment processing, report viewing",
          "Created responsive layouts optimized for desktop-heavy merchant workflows and mobile customer payments",
          "Designed email and SMS notification templates maintaining merchant branding while ensuring clarity",
          "Established accessibility and usability standards across all user-facing touchpoints"
        ]
      },
      {
        phase: "Solution Delivery & Collaboration",
        description: "I delivered complete design specifications for all platform layers and collaborated closely with development teams to ensure implementation fidelity. I also designed marketing materials to support product launch and merchant onboarding.",
        icon: Rocket,
        details: [
          "Delivered high-fidelity mockups and interactive prototypes for admin, merchant, and customer portals",
          "Created detailed design specifications and developer handover documentation",
          "Designed marketing website communicating platform value and differentiation",
          "Collaborated with frontend and backend developers to resolve technical constraints without compromising UX",
          "Iterated based on stakeholder feedback and early merchant testing"
        ]
      }
    ],
    processImages: [],
    keyInsight: "Combining things without making changes makes processes run more smoothly, but it can also damage brand identity. The hardest part of designing a multi-tenant SaaS is creating a system that feels unique to each user, where merchants can see how their business operates without losing the brand experience that makes their customer relationships special.",
    solution: "I designed Invoisure as a white-label financial platform that streamlines daily operations without stripping away a merchant's unique brand. To cut down on manual work and speed up payment collection, the core experience connects four key areas. The Merchant Dashboard gives users instant visibility into their day-to-day operational health, while the Customer Management directory makes it easy to track client details and billing history at a glance. I also designed flexible Payment & Invoicing workflows for one-time and recurring billing to remove friction and get merchants paid faster. Finally, highly customizable Email Templates ensure every automated notification feels true to the merchant's distinct brand instead of looking like a generic software receipt.",
    solutionImages: [
      invoisureDashboardImg,
      invoisureMerchantPortalImg,
      invoisureCustomerScreenImg,
      invoisureEmailTemplateImg
    ],
    outcomes: [
      {
        metric: "Unified Platform Delivered",
        description: "Successfully launched admin panel, merchant portal, and customer-facing payment screens with white-labeling support"
      },
      {
        metric: "Operational Efficiency Improved",
        description: "Consolidated fragmented workflows into single platform, eliminating tool-switching and manual data consolidation"
      },
      {
        metric: "Real-Time Merchant Insights",
        description: "Delivered centralized reporting and audit trails providing visibility into sales, payments, and inventory"
      },
      {
        metric: "Faster Payment Collection",
        description: "Improved communication through automated email/SMS notifications and streamlined customer payment flows"
      }
    ],
    learnings: [
      "Automate the switch: Data migration is a massive hurdle. I’d build smart tools to parse legacy data and eliminate hours of manual entry.",
      "Make onboarding adapt: Generic tutorials get skipped. I’d design dynamic setup flows that give contextual help based on a merchant's specific business type.",
      "Live prototyping saves dev time: Instead of waiting for the next sprint, I’d use rapid-prototyping tools to tweak complex workflows with users live during testing.",
      "Scale branding, protect UX: White-labeling is a delicate balance. I’d use automated theming so merchants can apply their identity without breaking the core interface.",
      "From static data to next steps: Clean dashboards are just the baseline. The real win is shifting from historical reports to proactive insights users can act on instantly."
    ],
    heroImage: invoisureHeroImg,
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  },
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
      dashboardImg,
      walletImg,
      icoSetupImg,
      sendTokensImg
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
    heroImage: ccxLogo,
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
        url: processFlowImg,
        caption: "Initial process flow chart mapping user journeys, verification requirements, and trust mechanisms",
        phase: "Process Flow"
      },
      {
        url: c2cStyleguideImg,
        caption: "Design system and component library built for Free MusicTribe; ensuring consistency and scalability across all marketplace features",
        phase: "Design System"
      }
    ],
    keyInsight: "Trust is more important than speed. A marketplace can launch quickly, but without trust, it cannot sustain participation. Designing a marketplace is ultimately about building trust, not just product showcases.",
    solution: "I designed Free MusicTribe with trust embedded at every layer: multi-step identity verification for users and mandatory Shop accounts for sellers, in-platform messaging for auditability, transparent seller ratings and history, and intentional friction that encouraged buyer-seller confidence-building before transactions. Rather than optimizing for instant checkout, the platform emulated face-to-face transactions in a digital environment—prioritizing trust over speed.",
    solutionImages: [
      solution1Img,
      solution2Img,
      solution3Img,
      solution4Img
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
    heroImage: dribbbleUploadImg,
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  }
];
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
      {children}
    </div>
  );
}

function CaseStudyCard({
  study,
  index,
  onOpen,
}: {
  study: CaseStudy;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onClick={onOpen}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-neutral-900">
        <ImageWithFallback
          src={study.heroImage}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-[0.24em] text-neutral-500">Case Study {index + 1}</span>
            <ArrowRight className="h-4 w-4 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-2xl text-white sm:text-[1.75rem]">{study.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-400 sm:text-[15px]">
              {study.tagline}
            </p>
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/10 pt-5 text-sm text-neutral-400">
          <div className="flex items-start justify-between gap-4">
            <span className="text-neutral-500">Company</span>
            <span className="max-w-[70%] text-right text-neutral-300">{study.context.company}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <span className="text-neutral-500">Duration</span>
            <span className="text-right text-neutral-300">{study.context.duration}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <span className="text-neutral-500">Role</span>
            <span className="max-w-[70%] text-right text-neutral-300">{study.context.myRole}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-sm text-neutral-400">
          <span>Open full details</span>
          <span className="text-neutral-500">{study.outcomes.length} outcomes</span>
        </div>
      </div>
    </motion.button>
  );
}

function CaseStudyWindow({
  study,
  open,
  onOpenChange,
}: {
  study: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [imageScale, setImageScale] = useState(1);
  const [activeSection, setActiveSection] = useState("case-study-problem");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleZoomIn = () => {
    setImageScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setImageScale((prev) => Math.max(prev - 0.5, 1));
  };

  const handleCloseImage = () => {
    setZoomedImage(null);
    setImageScale(1);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setActiveSection(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    setActiveSection("case-study-problem");
  }, [study?.title, open]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container || !open) {
      return;
    }

    const updateActiveSection = () => {
      const containerTop = container.getBoundingClientRect().top;
      let currentSection = caseStudySections[0]?.id ?? "case-study-problem";
      let smallestOffset = Number.POSITIVE_INFINITY;

      caseStudySections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) {
          return;
        }

        const offset = Math.abs(element.getBoundingClientRect().top - containerTop - 24);

        if (element.getBoundingClientRect().top - containerTop <= 80 && offset < smallestOffset) {
          smallestOffset = offset;
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    updateActiveSection();
    container.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      container.removeEventListener("scroll", updateActiveSection);
    };
  }, [activeSection, open]);

  if (!study) {
    return null;
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[92vh] max-w-[min(1100px,calc(100vw-24px))] overflow-hidden border border-white/10 bg-[#0b0b0d] p-0 text-white sm:max-w-[min(1200px,calc(100vw-48px))]">
          <DialogTitle className="sr-only">{study.title} case study</DialogTitle>
          <DialogDescription className="sr-only">
            Full details for the {study.title} case study.
          </DialogDescription>

          <div ref={scrollContainerRef} className="max-h-[92vh] overflow-y-auto">
            <div className="border-b border-white/10">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[320px] overflow-hidden bg-neutral-900">
                  <ImageWithFallback
                    src={study.heroImage}
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <SectionLabel>Case Study</SectionLabel>
                    <h3 className="mt-4 max-w-2xl text-3xl text-white sm:text-4xl">{study.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                      {study.tagline}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 bg-white/[0.02] p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Company</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-200">{study.context.company}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Duration</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-200">{study.context.duration}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Team</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-200">{study.context.team}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">My Role</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-200">{study.context.myRole}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:p-10">
              <aside className="space-y-4 lg:sticky lg:top-0 lg:self-start">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Inside This Case Study</p>
                  <div className="mt-4 space-y-1 text-sm text-neutral-300">
                    {caseStudySections.map((section) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full rounded-xl px-3 py-2 text-left transition-colors ${
                          activeSection === section.id
                            ? "bg-white/10 text-white"
                            : "text-neutral-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {section.label}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="space-y-10">
                <section id="case-study-problem" className="scroll-mt-8 space-y-4">
                  <SectionLabel>The Problem</SectionLabel>
                  <p className="text-base leading-relaxed text-neutral-300">{study.problem}</p>
                </section>

                <section id="case-study-challenge" className="scroll-mt-8 space-y-4">
                  <SectionLabel>The Challenge</SectionLabel>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <p className="text-base leading-relaxed text-neutral-300">{study.challenge}</p>
                  </div>
                </section>

                <section id="case-study-approach" className="scroll-mt-8 space-y-5">
                  <SectionLabel>My Approach</SectionLabel>
                  <div className="space-y-4">
                    {study.approach.map((step, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <step.icon className="h-5 w-5 text-neutral-200" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-lg text-white">{step.phase}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-300 sm:text-base">
                              {step.description}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex gap-3 text-sm leading-relaxed text-neutral-400">
                                  <span className="mt-0.5 text-neutral-500">/</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {study.processImages.length > 0 && (
                  <section className="space-y-5">
                    <SectionLabel>Process & Iteration</SectionLabel>
                    <div className="grid gap-4 md:grid-cols-2">
                      {study.processImages.map((img, index) => (
                        <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                          <div className="overflow-hidden rounded-xl">
                            <ImageWithFallback
                              src={img.url}
                              alt={img.caption}
                              className="aspect-video w-full object-cover"
                            />
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-3">
                            <p className="text-sm text-neutral-300">{img.caption}</p>
                            <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">{img.phase}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section id="case-study-insight" className="scroll-mt-8 space-y-4">
                  <SectionLabel>Key Insight</SectionLabel>
                  <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.05] p-5 sm:p-6">
                    <p className="text-base italic leading-relaxed text-neutral-200">"{study.keyInsight}"</p>
                  </div>
                </section>

                <section id="case-study-solution" className="scroll-mt-8 space-y-5">
                  <SectionLabel>The Solution</SectionLabel>
                  <p className="whitespace-pre-line text-base leading-relaxed text-neutral-300">{study.solution}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {study.solutionImages.map((img, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setZoomedImage(img)}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left"
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`${study.title} solution screenshot ${index + 1}`}
                          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </button>
                    ))}
                  </div>
                </section>

                <section id="case-study-outcomes" className="scroll-mt-8 space-y-5">
                  <SectionLabel>Impact & Outcomes</SectionLabel>
                  <div className="grid gap-4 md:grid-cols-2">
                    {study.outcomes.map((outcome, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                      >
                        <p className="text-base text-white sm:text-lg">{outcome.metric}</p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{outcome.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="case-study-learnings" className="scroll-mt-8 space-y-5">
                  <SectionLabel>What I Learned</SectionLabel>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <ul className="space-y-3">
                      {study.learnings.map((learning, index) => (
                        <li key={index} className="flex gap-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                          <span className="mt-0.5 text-neutral-500">/</span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {zoomedImage && (
        <Dialog open={!!zoomedImage} onOpenChange={handleCloseImage}>
          <DialogContent className="max-h-[96vh] max-w-[min(1400px,calc(100vw-16px))] overflow-hidden border border-white/10 bg-neutral-950 p-0 sm:max-w-[min(1400px,calc(100vw-48px))]">
            <DialogTitle className="sr-only">Design mockup</DialogTitle>
            <DialogDescription className="sr-only">Expanded design mockup view.</DialogDescription>

            <div className="max-h-[calc(96vh-72px)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <img
                src={zoomedImage}
                alt="Zoomed design mockup"
                className="h-auto w-full object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${imageScale})`,
                  transformOrigin: "top left",
                }}
              />
            </div>

            <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-black/30 px-4 py-3">
              <button
                className="rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10 disabled:opacity-50"
                onClick={handleZoomOut}
                disabled={imageScale <= 1}
              >
                <ZoomOut className="h-5 w-5 text-white" />
              </button>
              <span className="min-w-[3.25rem] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-center text-xs text-white">
                {Math.round(imageScale * 100)}%
              </span>
              <button
                className="rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10 disabled:opacity-50"
                onClick={handleZoomIn}
                disabled={imageScale >= 3}
              >
                <ZoomIn className="h-5 w-5 text-white" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export function Work() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm text-neutral-300">Case Studies</span>
          </div>

          <h2 className="mb-6 text-5xl lg:text-7xl">
            How I{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Think & Work
            </span>
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            A quieter, more focused overview of each project. Open any case study to see the full story.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.title}
              study={study}
              index={index}
              onOpen={() => setSelectedStudy(study)}
            />
          ))}
        </div>
      </div>

      <CaseStudyWindow
        study={selectedStudy}
        open={!!selectedStudy}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedStudy(null);
          }
        }}
      />
    </section>
  );
}

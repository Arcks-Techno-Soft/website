export type ServiceCapability = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  cardTitle: string;
  tagline: string;
  cardDescription: string;
  heroImage: string;
  cardImage: string;
  strategyImage: string;
  capabilitiesIntro: string;
  capabilities: ServiceCapability[];
  solutionIntro: string;
  quote: string;
  strategyTitle: string;
  strategyBody: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    cardTitle: "Custom Software Development",
    tagline:
      "Bespoke applications engineered to solve the problems off-the-shelf software can't.",
    cardDescription:
      "Tailor-made applications built to your exact requirements — from architecture to deployment.",
    heroImage: "/images/cta-photo.jpg",
    cardImage: "/images/service-1.jpg",
    strategyImage: "/images/testimonial-1.jpg",
    capabilitiesIntro:
      "We build custom software from the ground up — designed around your workflows, integrated with your stack, and engineered for the long term. Whether you're modernising a legacy system or launching something brand new, our team owns the architecture, build, and delivery so you can focus on the business outcome.",
    capabilities: [
      {
        title: "Architecture Design",
        description: "Scalable foundations modelled around your domain.",
      },
      {
        title: "Engineering & QA",
        description: "Production-grade code with rigorous, automated testing.",
      },
      {
        title: "System Integration",
        description: "Seamless connections to the tools you already rely on.",
      },
    ],
    solutionIntro:
      "No two businesses share the same operating model — and neither should their software. We take the time to understand how your teams actually work, then design systems that remove friction instead of layering more on top. The result is software that fits your business today and adapts as it changes tomorrow.",
    quote:
      "Great software disappears into the work it supports — it makes the right thing the easy thing.",
    strategyTitle: "Built for the Way You Work",
    strategyBody:
      "Our engineering process blends domain-driven design, modern frameworks, and continuous delivery. Every release is shaped by user feedback and measured against business outcomes — so the software keeps earning its place in your stack quarter after quarter.",
  },
  {
    slug: "mobile-web-app-development",
    title: "Mobile & Web App Development",
    cardTitle: "Mobile & Web Apps",
    tagline:
      "Polished, performant apps for every screen your customers reach for.",
    cardDescription:
      "Responsive web apps and native or cross-platform mobile experiences users love.",
    heroImage: "/images/hero-2.jpg",
    cardImage: "/images/service-2.jpg",
    strategyImage: "/images/testimonial-2.jpg",
    capabilitiesIntro:
      "From responsive web platforms to native iOS, Android, and cross-platform mobile apps, we ship product experiences that feel fast and look right on every device. Design, engineering, and QA work side by side so the app users see is the app you actually intended.",
    capabilities: [
      {
        title: "Responsive Web Apps",
        description: "Pixel-perfect interfaces that adapt to every breakpoint.",
      },
      {
        title: "Native & Cross-Platform Mobile",
        description: "iOS, Android, React Native, or Flutter — chosen to fit.",
      },
      {
        title: "Performance Engineering",
        description: "Smooth interactions, fast loads, and accessible defaults.",
      },
    ],
    solutionIntro:
      "Users decide whether your product is worth their time within seconds. We obsess over the small details — typography, motion, perceived speed — that separate apps people tolerate from apps people return to. Every flow is prototyped, tested, and refined before it ships.",
    quote:
      "Speed and polish aren't features — they're the baseline customers expect before they'll trust anything else.",
    strategyTitle: "Designed to Be Used Daily",
    strategyBody:
      "We treat every screen as part of a system: shared components, predictable patterns, and consistent motion. The result is a product that feels coherent on day one and stays maintainable as your team adds the next ten features.",
  },
  {
    slug: "cloud-devops-solutions",
    title: "Cloud & DevOps Solutions",
    cardTitle: "Cloud & DevOps",
    tagline:
      "Modern infrastructure that ships faster, scales further, and stays online.",
    cardDescription:
      "Scalable cloud architecture, CI/CD pipelines, and reliable infrastructure to ship faster.",
    heroImage: "/images/hero-3.jpg",
    cardImage: "/images/service-3.jpg",
    strategyImage: "/images/testimonial-3.jpg",
    capabilitiesIntro:
      "We design cloud platforms and developer workflows that turn deployments from a quarterly event into a daily habit. From AWS, GCP, and Azure architecture to CI/CD pipelines, observability, and infrastructure-as-code, we make it safe to ship — and easy to keep shipping.",
    capabilities: [
      {
        title: "Cloud Architecture",
        description: "Right-sized AWS, GCP, or Azure foundations from day one.",
      },
      {
        title: "CI/CD & Automation",
        description: "Pipelines that turn green builds into safe deploys.",
      },
      {
        title: "Observability & SRE",
        description: "Logs, metrics, and runbooks that catch issues early.",
      },
    ],
    solutionIntro:
      "Most teams don't have an infrastructure problem — they have a confidence problem. We build platforms and pipelines your engineers actually trust, with the guardrails, tests, and visibility needed to deploy on a Friday afternoon and still go home on time.",
    quote:
      "Reliable infrastructure is invisible. You only notice it when it's missing — by then it's already too late.",
    strategyTitle: "Ship Faster Without Breaking Things",
    strategyBody:
      "Our approach pairs infrastructure-as-code with automated testing, progressive delivery, and clear ownership. The outcome is shorter lead times, fewer incidents, and a platform your team can extend without rewriting it every twelve months.",
  },
  {
    slug: "ai-first-development",
    title: "AI-First Development",
    cardTitle: "AI-First Development",
    tagline:
      "Products engineered around AI — intelligent from the very first commit.",
    cardDescription:
      "Designing and building products with AI at the core — from LLM integrations to intelligent features users actually rely on.",
    heroImage: "/images/hero-4.jpg",
    cardImage: "/images/service-1.jpg",
    strategyImage: "/images/testimonial-4.jpg",
    capabilitiesIntro:
      "We build software where AI isn't a bolt-on — it's the architecture. From LLM-powered workflows to retrieval-augmented features and intelligent UX, we design products that learn from every interaction and get more useful the more they're used.",
    capabilities: [
      {
        title: "LLM Integration",
        description: "Production-ready use of frontier and open-source models.",
      },
      {
        title: "Retrieval & Memory",
        description: "Grounded answers powered by your data, not the model's.",
      },
      {
        title: "Intelligent UX",
        description: "Interfaces that anticipate intent instead of waiting for it.",
      },
    ],
    solutionIntro:
      "Adding a chatbot is easy. Building a product where AI fundamentally changes what's possible takes a different approach. We start with the user job, decide where intelligence genuinely helps, and engineer the prompts, evals, and guardrails that turn a clever demo into something dependable.",
    quote:
      "AI is only as good as the workflow you build around it — the model is the easy part.",
    strategyTitle: "From Prompt to Production",
    strategyBody:
      "Every AI feature ships with evaluation harnesses, fallback paths, and clear ownership of cost and latency. So instead of a fragile prototype that breaks the first time it sees real input, you get a feature that improves with every release.",
  },
  {
    slug: "ai-agents-automation",
    title: "AI Agents & Automation",
    cardTitle: "AI Agents & Automation",
    tagline:
      "Autonomous agents and workflow automations that reclaim your team's time.",
    cardDescription:
      "Autonomous AI agents and workflow automations that handle repetitive tasks and streamline operations.",
    heroImage: "/images/hero-5.jpg",
    cardImage: "/images/service-2.jpg",
    strategyImage: "/images/testimonial-1.jpg",
    capabilitiesIntro:
      "We design and deploy AI agents that take real work off your team's plate — from triaging support tickets and qualifying leads to running multi-step internal operations. Each agent is built with the right tools, the right guardrails, and observability you can actually inspect.",
    capabilities: [
      {
        title: "Agent Design",
        description: "Tool-using agents scoped to a clear job and outcome.",
      },
      {
        title: "Workflow Automation",
        description: "Glue between systems that runs without anyone watching.",
      },
      {
        title: "Human-in-the-Loop",
        description: "Approval steps where stakes are high, autonomy where they're not.",
      },
    ],
    solutionIntro:
      "Most automation projects fail because they try to automate the messy parts of a job before understanding them. We map the workflow first, find the genuinely repeatable steps, and then introduce agents where they reduce toil without quietly creating new risks.",
    quote:
      "The best automation feels like the work just got easier — nobody had to learn a new tool.",
    strategyTitle: "Automation That Earns Trust",
    strategyBody:
      "We start with narrow, measurable wins — a ticket tier, a lead handoff, a back-office process — and expand from there. Every agent is observable, reversible, and tuned against real outcomes, so the system gets safer to extend with every iteration.",
  },
  {
    slug: "saas-product-engineering",
    title: "SaaS & Product Engineering",
    cardTitle: "SaaS & Product Engineering",
    tagline:
      "Multi-tenant platforms and digital products built for compounding growth.",
    cardDescription:
      "End-to-end development of scalable SaaS platforms and digital products, built for growth, reliability, and speed to market.",
    heroImage: "/images/hero-1.jpg",
    cardImage: "/images/service-3.jpg",
    strategyImage: "/images/testimonial-2.jpg",
    capabilitiesIntro:
      "We partner with founders and product teams to take SaaS products from first prototype to production scale. Architecture, billing, multi-tenancy, analytics, and developer experience are designed in from the start — so your team isn't paying down platform debt the moment traction arrives.",
    capabilities: [
      {
        title: "Multi-Tenant Architecture",
        description: "Isolation, plans, and roles that scale past your first 100 customers.",
      },
      {
        title: "Billing & Onboarding",
        description: "Activation flows and revenue plumbing that just work.",
      },
      {
        title: "Analytics & Iteration",
        description: "Product telemetry that turns intuition into evidence.",
      },
    ],
    solutionIntro:
      "Great SaaS products win on iteration speed, not feature count. We architect for change — clean module boundaries, observable systems, and feedback loops short enough that your team can ship, learn, and ship again before competitors finish their kickoff meeting.",
    quote:
      "The compounding advantage in SaaS belongs to the team that can ship the next thing without breaking the last one.",
    strategyTitle: "Engineered for Compounding",
    strategyBody:
      "From day one we invest in the boring fundamentals that make a SaaS business durable: rigorous testing, sensible deployment, observable systems, and a developer experience your team will still enjoy in year three. The result is a product that gets easier to evolve, not harder.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug);
}

export function pickRandomOtherServices(slug: string, count: number): Service[] {
  return getOtherServices(slug)
    .map((s) => ({ s, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map(({ s }) => s);
}

// ─── SITE DATA ───────────────────────────────────────────────────────────────
// Edit this file to update your site content — no need to touch any components.

export const personal = {
  name: "Andrew Park",
  title: "Full-Stack Web Developer",
  location: "Los Angeles, CA",
  email: "andrewpark1735@gmail.com",
  linkedin: "https://www.linkedin.com/in/andrewparkdeveloper",
  github: "https://github.com/andrewpark1735", // update if needed
  tagline: "I build fast, scalable, and visually stunning web experiences.",
  bio: "Full-stack developer based in Los Angeles with a background in mechanical engineering and automation. I bring a systems-level mindset to web development — obsessing over performance, reliability, and clean architecture. From designing PostgreSQL schemas to crafting pixel-perfect UIs, I handle every layer of the stack.",
};

export const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end development with React/Next.js on the frontend and Node.js or Python/Flask on the backend. Scalable, maintainable, and production-ready.",
    icon: "Layers",
  },
  {
    title: "Performance & Scalability",
    description:
      "NGINX load balancing, query optimization, stress testing with K6/Loader.io. I've cut latency by 95%+ and scaled systems from 10 to 5,000 RPS.",
    icon: "Zap",
  },
  {
    title: "Database Design",
    description:
      "SQL and NoSQL schema design, ORMs, PostgreSQL optimization, and database migrations. Built and deployed on Railway, Vercel, and AWS.",
    icon: "Database",
  },
  {
    title: "API Development",
    description:
      "RESTful API design, third-party integrations (OpenAI, Resend, YouTube), and full CRUD systems with authentication and JWT security.",
    icon: "Code2",
  },
  {
    title: "CI/CD & DevOps",
    description:
      "CircleCI pipelines, Docker containers, AWS EC2 deployments, and automated test suites with Playwright and Jest to keep releases clean.",
    icon: "GitBranch",
  },
  {
    title: "QA & Testing",
    description:
      "End-to-end Playwright automation covering 100+ workflows, API validation, root cause analysis, and 80%+ test coverage standards.",
    icon: "ShieldCheck",
  },
];

export const projects = [
  {
    name: "Johnson & Umeda",
    description:
      "Full-stack web platform for a Los Angeles sports training organization. Built a custom CMS-style system with coach and player inquiry forms, event registration for their basketball camps, an admin dashboard with JWT auth, and automated email notifications.",
    tech: ["Next.js", "Flask", "PostgreSQL", "TypeScript", "Tailwind CSS", "Railway", "Vercel"],
    type: "Client Work",
    featured: true,
  },
  {
    name: "Summarize AI",
    description:
      "OpenAI-powered YouTube summarization tool. Full CRUD user profiles, GPT-3.5-turbo integration, deployed to Strapi Cloud + Vercel. Achieved a Lighthouse score of 98/100.",
    tech: ["React", "Node.js", "OpenAI API", "Strapi", "Vercel"],
    type: "Personal Project",
    featured: false,
  },
  {
    name: "Project Atelier",
    description:
      "Scaled a product page from 10 RPS to 5,000 RPS using NGINX load balancing. Reduced query latency from 2,500ms to 12ms — a 95.2% improvement — deployed on AWS EC2.",
    tech: ["Node.js", "Express", "NGINX", "AWS EC2", "PostgreSQL", "Jest"],
    type: "Personal Project",
    featured: false,
  },
  {
    name: "Study Stack",
    description:
      "Led solo backend development for a team of 8. Built the full Node.js/Express API, PostgreSQL integration, and deployed the production database server — reducing team workload by 87.5%.",
    tech: ["Node.js", "Express", "PostgreSQL", "Postman"],
    type: "Personal Project",
    featured: false,
  },
];

export const skills = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "HTML5 / CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Python / Flask", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "AWS EC2", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "CircleCI", category: "devops" },
  { name: "NGINX", category: "devops" },
  { name: "Playwright", category: "testing" },
  { name: "Jest", category: "testing" },
  { name: "Git", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Railway", category: "tools" },
  { name: "Postman", category: "tools" },
];

// ─── PRICING ─────────────────────────────────────────────────────────────────

export const pricing = {
  hourlyRate: 150, // $ per hour outside of retainer
  project: {
    name: "MVP Full-Stack App",
    price: 2000,
    description: "A complete, production-ready full-stack web application built from the ground up.",
    includes: [
      "Frontend with React / Next.js",
      "Backend API with Node.js or Flask",
      "Database design & deployment",
      "Authentication & user accounts",
      "Deployed to Vercel + Railway or AWS",
      "1 round of revisions included",
    ],
    cta: "Start a Project",
  },
  retainers: [
    {
      name: "Starter",
      hours: 10,
      pricePerHour: 140,
      highlight: false,
      perks: [
        "10 hours/month",
        "Save $100 vs. standard rate",
        "Async communication",
        "Bug fixes & feature work",
        "Monthly summary report",
      ],
    },
    {
      name: "Growth",
      hours: 20,
      pricePerHour: 135,
      highlight: true, // featured / recommended tier
      perks: [
        "20 hours/month",
        "Save $300 vs. standard rate",
        "Priority response time",
        "Bug fixes, features & consulting",
        "Weekly check-ins available",
        "Monthly summary report",
      ],
    },
    {
      name: "Scale",
      hours: 30,
      pricePerHour: 130,
      highlight: false,
      perks: [
        "30 hours/month",
        "Save $600 vs. standard rate",
        "Dedicated availability",
        "Full-stack feature development",
        "Weekly syncs included",
        "Monthly summary report",
      ],
    },
  ],
};

// ─── RESUME / EXPERIENCE ──────────────────────────────────────────────────────

export const experience = [
  {
    company: "Micro1",
    role: "AI LLM Quality Reviewer",
    period: "Feb 2026 – Present",
    bullets: [
      "Evaluated and scored LLM outputs for accuracy, reasoning quality, instruction adherence, and factual consistency.",
      "Identified hallucinations, logical inconsistencies, and policy violations with detailed corrective feedback.",
      "Rewrote and optimized AI-generated responses to align with user intent and technical correctness standards.",
    ],
  },
  {
    company: "QA Wolf",
    role: "QA Engineer",
    period: "Feb 2025 – Sep 2025",
    bullets: [
      "Designed and maintained Playwright end-to-end automation suites covering 100+ workflows with 80%+ coverage.",
      "Integrated automated test suites into CI/CD pipelines to establish release gates.",
      "Performed API validation, log inspection, and root cause analysis to resolve high-impact platform issues.",
    ],
  },
  {
    company: "Outlier",
    role: "AI Code Reviewer",
    period: "May 2024 – Jan 2025",
    bullets: [
      "Reviewed JavaScript and Python code submissions for AI model training accuracy and reliability.",
      "Identified edge cases and corrected faulty logic to improve LLM response quality.",
      "Provided structured feedback to improve prompt engineering and output consistency.",
    ],
  },
  {
    company: "Kalmar",
    role: "Product Support Engineer",
    period: "Apr 2022 – Jul 2023",
    bullets: [
      "Provided technical troubleshooting for automated port equipment and control systems.",
      "Managed Jira-based escalation workflows and cross-team issue resolution.",
      "Updated engineering documentation to improve field reliability.",
    ],
  },
  {
    company: "ProAutomated",
    role: "Controls Automation Engineer",
    period: "Sep 2019 – Apr 2022",
    bullets: [
      "Led on-site commissioning for six 655K–855K sq ft Amazon fulfillment centers.",
      "Directed teams of 4–10 engineers performing IO checks, PLC validation, and system debugging.",
      "Diagnosed and corrected ladder logic failures during stress testing of high-volume automated facilities.",
    ],
  },
];

export const education = [
  {
    school: "Hack Reactor",
    degree: "Software Engineering Immersive",
    period: "Jan 2024 – Apr 2024",
    note: "Class President",
  },
  {
    school: "Cal Poly Pomona",
    degree: "B.S., Mechanical Engineering",
    period: "Sep 2014 – Jun 2019",
    note: "",
  },
];

// ─── NAV ──────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

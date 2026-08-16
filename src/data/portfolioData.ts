import { Project, SkillItem, ProcessStep, Testimonial, StatItem } from '../types';

import developerPortrait from '../assets/images/developer_portrait_1786845251949.jpg';
import fintrackMockup from '../assets/images/fintrack_mockup_1786845268672.jpg';
import shopvistaMockup from '../assets/images/shopvista_mockup_1786845282799.jpg';
import taskifyMockup from '../assets/images/taskify_mockup_1786845293500.jpg';

export const PERSONAL_INFO = {
  name: "UN Somnang",
  role: "Software Developer",
  tagline: "I build digital experiences that matter.",
  bio: "I'm UN Somnang, a passionate full-stack developer who loves turning ideas into scalable, beautiful and performant web applications.",
  aboutExtended: "I'm a full-stack developer with a strong focus on building modern, responsive and user-friendly web applications. I enjoy solving complex problems and continuously learning new technologies. With over 4 years in software engineering, I specialize in the React ecosystem, Node.js microservices, cloud-native deployments, and AI integrations.",
  location: "Lahore, Pakistan",
  email: "hello@unsomnang.dev",
  phone: "+92 310 1234567",
  availability: "Open to Work",
  avatar: developerPortrait,
  experienceYears: "4+",
  projectsCount: "20+",
  clientSatisfaction: "99%",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@unsomnang.dev"
  }
};

export const CORE_SKILLS: SkillItem[] = [
  { name: "JavaScript / TypeScript", percentage: 95, category: 'frontend', iconName: 'Code', experienceYears: "4+ years" },
  { name: "React / Next.js", percentage: 90, category: 'frontend', iconName: 'Atom', experienceYears: "4 years" },
  { name: "Node.js / Express", percentage: 85, category: 'backend', iconName: 'Server', experienceYears: "3.5 years" },
  { name: "Python / Django", percentage: 75, category: 'backend', iconName: 'Terminal', experienceYears: "2.5 years" },
  { name: "SQL / MongoDB", percentage: 80, category: 'database', iconName: 'Database', experienceYears: "3 years" },
  { name: "HTML / CSS / Tailwind", percentage: 95, category: 'frontend', iconName: 'Palette', experienceYears: "4+ years" }
];

export const ADDITIONAL_SKILLS: SkillItem[] = [
  { name: "GraphQL & REST APIs", percentage: 88, category: 'backend', iconName: 'Network', experienceYears: "3 years" },
  { name: "Docker & AWS Cloud", percentage: 82, category: 'devops', iconName: 'Cloud', experienceYears: "2.5 years" },
  { name: "Redis & Caching", percentage: 80, category: 'database', iconName: 'Layers', experienceYears: "2 years" },
  { name: "CI/CD & Git Automation", percentage: 90, category: 'devops', iconName: 'GitBranch', experienceYears: "3.5 years" },
  { name: "PostgreSQL & Prisma", percentage: 88, category: 'database', iconName: 'Boxes', experienceYears: "3 years" },
  { name: "AI Integration & LLM APIs", percentage: 85, category: 'backend', iconName: 'Cpu', experienceYears: "2 years" }
];

export const PROJECTS: Project[] = [
  {
    id: "fintrack",
    title: "FinTrack Dashboard",
    category: "Full Stack",
    description: "A modern finance dashboard for tracking expenses, budgets and analytics.",
    longDescription: "FinTrack is an enterprise-grade personal and commercial finance analytics platform. It provides real-time transaction ingestion, automatic categorization, predictive cashflow budgeting via statistical models, and custom report exports with high-performance charts.",
    image: fintrackMockup,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    metrics: [
      { label: "Query Speed", value: "<45ms" },
      { label: "Active Users", value: "12,000+" },
      { label: "Data Accuracy", value: "99.9%" }
    ],
    features: [
      "Real-time expense tracking and budget threshold notifications",
      "Interactive multi-currency cash flow visualizations & forecasting",
      "Secure banking API integration and automated CSV transaction sync",
      "Dark mode cyberpunk dashboard optimized for 120Hz fluid rendering"
    ],
    liveUrl: "https://example.com/fintrack",
    githubUrl: "https://github.com/example/fintrack-dashboard",
    featured: true
  },
  {
    id: "shopvista",
    title: "ShopVista E-commerce",
    category: "Full Stack",
    description: "Feature-rich e-commerce platform with secure payments and admin panel.",
    longDescription: "ShopVista delivers a high-conversion digital commerce experience with instant search indexing, dynamic inventory allocation, headless Stripe payment flows, and a comprehensive seller analytics admin back-office.",
    image: shopvistaMockup,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: [
      { label: "Conversion Lift", value: "+28%" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Order Throughput", value: "500/min" }
    ],
    features: [
      "End-to-end checkout pipeline with Stripe 3D Secure verification",
      "Real-time stock reservation and webhooks-driven order lifecycle",
      "Role-based merchant backoffice with sales breakdown reports",
      "Blazing fast client-side filtering and instant search facet engine"
    ],
    liveUrl: "https://example.com/shopvista",
    githubUrl: "https://github.com/example/shopvista-ecommerce",
    featured: true
  },
  {
    id: "taskify",
    title: "Taskify AI",
    category: "Web App",
    description: "AI-powered productivity app to manage tasks, deadlines and team collaboration.",
    longDescription: "Taskify AI re-imagines sprint management and daily focus. It incorporates intelligent task breakdown, automatic priority scoring, conversational meeting summarization, and team workload heatmaps.",
    image: taskifyMockup,
    tags: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    metrics: [
      { label: "Time Saved", value: "6.5 hrs/wk" },
      { label: "Task Completion", value: "+34%" },
      { label: "AI Reliability", value: "99.2%" }
    ],
    features: [
      "Automated task decomposition using state-of-the-art LLM prompts",
      "Interactive drag-and-drop Kanban board with optimistic UI updates",
      "Real-time team presence, comments, and webhook alerts",
      "PostgreSQL database layer with Prisma ORM and row-level security"
    ],
    liveUrl: "https://example.com/taskify",
    githubUrl: "https://github.com/example/taskify-ai",
    featured: true
  }
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discover",
    subtitle: "Research & Scoping",
    description: "Understanding goals, requirements and project scope.",
    details: [
      "Stakeholder interviews & deep dive discovery sessions",
      "User persona mapping & functional requirement specifications",
      "Technical feasibility and architecture evaluation"
    ],
    iconName: "Search"
  },
  {
    stepNumber: "02",
    title: "Plan",
    subtitle: "Architecture & Roadmap",
    description: "Planning architecture, tech stack and project roadmap.",
    details: [
      "Database schema modeling and API contract design",
      "Sprint planning, milestones, and deliverable timelines",
      "Cloud infrastructure planning and security compliance"
    ],
    iconName: "FileText"
  },
  {
    stepNumber: "03",
    title: "Design",
    subtitle: "UI/UX & Prototyping",
    description: "Creating wireframes and beautiful UI/UX designs.",
    details: [
      "High-fidelity design systems and interactive Figma prototypes",
      "Responsive component layout across mobile, tablet, and ultra-wide screens",
      "Micro-interaction and motion design choreographies"
    ],
    iconName: "PenTool"
  },
  {
    stepNumber: "04",
    title: "Develop",
    subtitle: "Clean Code Execution",
    description: "Writing clean, scalable and efficient code with best practices.",
    details: [
      "Modular full-stack development with TypeScript type safety",
      "Performance optimization, caching strategies, and lazy loading",
      "Clean architecture with comprehensive modular code standards"
    ],
    iconName: "Code2"
  },
  {
    stepNumber: "05",
    title: "Test",
    subtitle: "Quality Assurance",
    description: "Testing for bugs, performance and cross-browser issues.",
    details: [
      "Automated unit, integration, and end-to-end testing suites",
      "Lighthouse audits, accessibility (WCAG AA) compliance checks",
      "Cross-browser and multi-device compatibility validation"
    ],
    iconName: "ShieldCheck"
  },
  {
    stepNumber: "06",
    title: "Deploy",
    subtitle: "Production Launch",
    description: "Deploying to production and ensuring smooth launch.",
    details: [
      "Zero-downtime CI/CD container deployment pipeline",
      "Live APM telemetry, error tracking, and performance monitoring",
      "Documentation handover and ongoing maintenance support"
    ],
    iconName: "Rocket"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Hamza Ali",
    role: "CEO",
    company: "TechSolutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "UN Somnang is an exceptional developer! He delivered our project on time with clean code and amazing attention to detail. Highly recommended!",
    rating: 5,
    projectRef: "FinTrack Dashboard"
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "CloudFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    content: "Working with UN Somnang was a breeze. He brought our complex SaaS idea to life with fluid animations and rock-solid backend architecture. His speed and communication are top notch.",
    rating: 5,
    projectRef: "Taskify AI"
  },
  {
    id: "t3",
    name: "David Miller",
    role: "CTO",
    company: "NextGen Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "UN Somnang transformed our e-commerce platform into an ultra-fast powerhouse. Conversions jumped significantly within the first month. An extraordinary engineer.",
    rating: 5,
    projectRef: "ShopVista E-commerce"
  }
];

export const STATS: StatItem[] = [
  { id: "stat-clients", value: "20+", numericValue: 20, suffix: "+", label: "Happy Clients", iconName: "Users" },
  { id: "stat-projects", value: "20+", numericValue: 20, suffix: "+", label: "Projects Completed", iconName: "Layers" },
  { id: "stat-experience", value: "4+", numericValue: 4, suffix: "+", label: "Years Experience", iconName: "Briefcase" },
  { id: "stat-satisfaction", value: "99%", numericValue: 99, suffix: "%", label: "Satisfaction Rate", iconName: "Star" }
];

export const CAREER_MILESTONES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Engineer",
    company: "Apex Digital Solutions",
    description: "Leading frontend architecture and microservices design for enterprise web platforms serving 100k+ monthly active users."
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Nexus Software Labs",
    description: "Built scalable React/Next.js web applications, integrated payment processing gateways, and optimized SQL/NoSQL databases."
  },
  {
    year: "2020 - 2021",
    role: "Frontend Engineer",
    company: "InnoTech Studios",
    description: "Engineered responsive UI systems, component libraries, and interactive dashboards with rigorous performance benchmarks."
  }
];

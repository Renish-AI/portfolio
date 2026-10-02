export interface Project {
  id: string;
  slug: string;
  title: string;
  badge: "REAL PROJECT" | "EXPLORATION";
  category: string;
  tags: string[];
  client: string;
  thumbnail: string;
  overview: string;
  description: string;
  service: string;
  timeline: string;
  tools: { name: string; icon: string }[];
  liveUrl: string;
  githubUrl: string;
  screenshots: string[];
  callout: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  previewImage: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  previewImage: string;
}

export const DESIGNER_INFO = {
  firstName: "RENISH",
  lastName: "MANSARA",
  fullName: "Renish Mansara",
  role: "Full Stack Developer & Software Engineer",
  tagline: "Engineering scalable web platforms, robust backend architectures, and high-performance digital products.",
  availableText: "Available for New Opportunities",
  experienceYears: "B.Tech CSE @ Nirma University",
  footerHeading: "HAVE A PROJECT IN MIND?",
  footerTagline: "Let's collaborate to build high-performance web systems and impactful digital products with modern technologies.",
  email: "renishmansara@gmail.com",
  phone: "+91 85117 49900",
  location: "Ahmedabad, Gujarat, India",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/renishmansara" },
    { name: "GitHub", url: "https://github.com/Renish-AI" },
    { name: "Resume PDF", url: "/Renish_Mansara_Resume.pdf" },
  ],
  navCounters: {
    work: "4",
    service: "4",
    experience: "Nirma '28",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "commercial-website",
    slug: "commercial-website",
    title: "Commercial Website Platform",
    badge: "REAL PROJECT",
    category: "Commercial Web Application",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    client: "Red Energy Commercial",
    thumbnail: "/images/commercial-website.png",
    liveUrl: "https://redenergy.vercel.app/",
    githubUrl: "https://github.com/Renish-AI/Commercial-Website",
    overview: "Commercial Website is a modern, responsive business-oriented web application designed to provide a professional digital presence for commercial services.",
    description: "Commercial Website is a modern, responsive business-oriented web application designed to provide a professional digital presence for commercial services. Built using React, TypeScript, Vite, and Tailwind CSS, the project focuses on creating a clean and interactive user interface with reusable components, responsive layouts, and an engaging visual experience. The website demonstrates modern frontend development practices and is deployed online using Vercel.",
    service: "Frontend Development, UI/UX Architecture",
    timeline: "4 Weeks",
    tools: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Vite", icon: "⚡" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
    screenshots: [
      "/images/commercial-website.png",
    ],
    callout: "Built using React, TypeScript, Vite, and Tailwind CSS, focusing on creating a clean and interactive user interface with reusable components, responsive layouts, and an engaging visual experience deployed on Vercel.",
    features: [
      {
        title: "Clean Reusable Components",
        description: "Modular React and TypeScript component structure ensuring seamless extensibility and maintainability.",
      },
      {
        title: "High Performance with Vite",
        description: "Instant hot module replacement and optimized production builds deployed on Vercel Edge.",
      },
      {
        title: "3D Product Visualization",
        description: "Interactive visual experience designed to captivate customers and elevate brand presence.",
      },
      {
        title: "Fully Responsive UI",
        description: "Tailwind CSS utility-first layouts providing pixel-perfect fidelity across mobile, tablet, and desktop.",
      },
    ],
  },
  {
    id: "smartcampus-portal",
    slug: "smartcampus-portal",
    title: "SmartCampus Portal",
    badge: "REAL PROJECT",
    category: "Academic Management Platform",
    tags: ["React", "TypeScript", "Vite", "Google Gemini AI"],
    client: "Campus Management System",
    thumbnail: "/images/smartcampus-portal.png",
    liveUrl: "https://smart-campus-portal-taupe.vercel.app/",
    githubUrl: "https://github.com/Renish-AI/SmartCampus-Portal",
    overview: "SmartCampus Portal is a smart academic management web application designed to centralize and simplify campus-related activities with Google Gemini AI.",
    description: "SmartCampus Portal is a smart academic management web application designed to centralize and simplify campus-related activities. The platform provides a unified interface for students and campus users to access academic information, manage activities, and interact with campus services. Built with React, TypeScript, Vite, and backend APIs, the project also integrates Google Gemini AI to provide intelligent features. The application follows a modern web architecture and is deployed on Vercel.",
    service: "Full Stack Web, Gemini AI Integration",
    timeline: "6 Weeks",
    tools: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Vite", icon: "⚡" },
      { name: "Gemini AI", icon: "🤖" },
    ],
    screenshots: [
      "/images/smartcampus-portal.png",
    ],
    callout: "Built with React, TypeScript, Vite, and backend APIs, integrating Google Gemini AI to provide intelligent features, role-based workflows, and academic centralization deployed on Vercel.",
    features: [
      {
        title: "Google Gemini AI Integration",
        description: "Built-in AI intelligence powering the AI Campus Bot and intelligent student assistance.",
      },
      {
        title: "Unified Student Dashboard",
        description: "Single-pane view for weekly timetables, library catalogs, announcements, and exam curfews.",
      },
      {
        title: "Secure Role-Based Routing",
        description: "Tier-specific routing and access controls safeguarding sensitive student and faculty records.",
      },
      {
        title: "Modern Vercel Architecture",
        description: "Serverless cloud functions and high-availability deployment on Vercel.",
      },
    ],
  },
  {
    id: "globetrotter-2",
    slug: "globetrotter-2",
    title: "GlobeTrotter 2.0",
    badge: "EXPLORATION",
    category: "AI Travel Planning Web App",
    tags: ["React", "Gemini API", "Vite", "Full Stack"],
    client: "AI Travel Exploration",
    thumbnail: "/images/globetrotter-2.png",
    liveUrl: "https://globetrotter-2-0.vercel.app/",
    githubUrl: "https://github.com/Renish-AI/Globetrotter_2.0",
    overview: "GlobeTrotter 2.0 is an intelligent travel-planning web application designed to help users organize and personalize their trips with Google Gemini API.",
    description: "GlobeTrotter 2.0 is an intelligent travel-planning web application designed to help users organize and personalize their trips. The platform provides an interactive travel experience for exploring destinations and planning journeys, with AI-powered functionality through the Google Gemini API. The application follows a modern full-stack architecture with dedicated frontend and backend components and is deployed using Vercel. It demonstrates the integration of AI services into a practical travel-planning platform.",
    service: "AI Travel Architecture, Full Stack UI",
    timeline: "4 Weeks",
    tools: [
      { name: "React", icon: "⚛️" },
      { name: "Gemini API", icon: "🤖" },
      { name: "Vite", icon: "⚡" },
      { name: "Full Stack", icon: "🌐" },
    ],
    screenshots: [
      "/images/globetrotter-2.png",
    ],
    callout: "Provides an interactive travel experience for exploring destinations and planning journeys, with AI-powered functionality through the Google Gemini API deployed on Vercel.",
    features: [
      {
        title: "Gemini API AI Planner",
        description: "Generates tailored daily itineraries, destination recommendations, and budget guidance.",
      },
      {
        title: "Interactive Destination Explorer",
        description: "Visual exploration of global attractions with rich scenic photography and curated guides.",
      },
      {
        title: "Dedicated Architecture",
        description: "Modern full-stack architecture with clean decoupling between frontend client and AI backend services.",
      },
      {
        title: "Global Vercel Edge",
        description: "Deployed on Vercel for fast global asset delivery and seamless user experience.",
      },
    ],
  },
  {
    id: "odoo-trip-planner",
    slug: "odoo-trip-planner",
    title: "GlobeTrotter - Odoo Hackathon",
    badge: "REAL PROJECT",
    category: "Full-Stack Travel Platform",
    tags: ["React 18", "Supabase", "PostgreSQL", "Framer Motion"],
    client: "Odoo Hackathon Project",
    thumbnail: "/images/odoo-hackathon.png",
    liveUrl: "https://planningtrip.vercel.app/",
    githubUrl: "https://github.com/Renish-AI/Odoo",
    overview: "GlobeTrotter is a full-stack intelligent travel-planning platform designed to simplify complex multi-city trip planning through an interactive visual interface.",
    description: "GlobeTrotter is a full-stack intelligent travel-planning platform designed to simplify complex multi-city trip planning through an interactive visual interface. It allows users to create and manage itineraries, arrange activities using drag-and-drop scheduling, track travel budgets, analyze trip health, and share or clone complete travel plans. The application is built using React 18, Vite, Tailwind CSS, Framer Motion, Supabase PostgreSQL, and Recharts, with AI-assisted travel recommendations and secure authentication through Supabase. It also includes real-time budget analytics, interactive route visualization, public travel stories, and responsive UI/UX.",
    service: "Full Stack Architecture, Visual Interaction",
    timeline: "Hackathon Sprint",
    tools: [
      { name: "React 18", icon: "⚛️" },
      { name: "Supabase", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Framer Motion", icon: "✨" },
    ],
    screenshots: [
      "/images/odoo-hackathon.png",
    ],
    callout: "Built using React 18, Vite, Tailwind CSS, Framer Motion, Supabase PostgreSQL, and Recharts, with AI-assisted travel recommendations, real-time budget analytics, and drag-and-drop scheduling.",
    features: [
      {
        title: "Drag-and-Drop Scheduling",
        description: "Interactive visual itinerary creation with fluid Framer Motion activity reordering.",
      },
      {
        title: "Real-Time Budget Analytics",
        description: "Recharts-powered financial monitoring, expense breakdown, and trip health indicators.",
      },
      {
        title: "Supabase PostgreSQL Backend",
        description: "Robust relational data schema with secure Supabase authentication and Row Level Security.",
      },
      {
        title: "Social Trip Cloning",
        description: "Public travel stories and instant cloning of community-tested multi-city travel plans.",
      },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fullstack",
    title: "FULL STACK WEB DEVELOPMENT",
    description: "Building scalable, dynamic web platforms using React.js, Next.js, Node.js, Express, and MongoDB.",
    previewImage: "/images/service-preview.png",
  },
  {
    id: "frontend",
    title: "FRONTEND & UI ARCHITECTURE",
    description: "Crafting modern, responsive user interfaces, fluid animations, and high-performance cross-browser websites.",
    previewImage: "/images/service-preview.png",
  },
  {
    id: "backend",
    title: "BACKEND APIS & DATABASES",
    description: "Engineering secure RESTful APIs, JWT role-based access control, database indexing, and Redis caching.",
    previewImage: "/images/service-preview.png",
  },
  {
    id: "software",
    title: "SOFTWARE ENGINEERING & AI",
    description: "Applying OOP architecture, optimized Data Structures & Algorithms, and Google Gemini AI integrations.",
    previewImage: "/images/service-preview.png",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "nirma",
    company: "Nirma University",
    role: "B.Tech in Computer Science and Engineering — CGPA: 8.31/10",
    period: "2024 – 2028",
    previewImage: "/images/experience-preview.png",
  },
  {
    id: "gangotri",
    company: "Gangotri School, Gondal",
    role: "Higher Secondary (Science) — 98.66% | All Gujarat Rank 193",
    period: "2022 – 2024",
    previewImage: "/images/experience-preview.png",
  },
  {
    id: "hackamind",
    company: "HackaMind Hackathon",
    role: "Top 5 Finalist (Secured Top 5 Position among 300+ Teams)",
    period: "2025",
    previewImage: "/images/experience-preview.png",
  },
  {
    id: "sih",
    company: "Smart India Hackathon (SIH)",
    role: "Participated in National Level Hackathon",
    period: "2025",
    previewImage: "/images/experience-preview.png",
  },
  {
    id: "google-cert",
    company: "Google Cloud Certification",
    role: "Introduction to Generative AI Studio",
    period: "2026 | Google",
    previewImage: "/images/experience-preview.png",
  },
];

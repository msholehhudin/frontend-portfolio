import { Project, Experience, TimelineItem } from "@/types";

export const PERSON = {
  fullName: "Muhammad Sholehhudin",
  displayName: "MSholehhudin",
  role: "Frontend Engineer (React.js / Next.js)",
  tagline: "Turning complex business problems into production-ready web applications.",
  location: "Based in Indonesia — Open to Remote Worldwide",
  email: "msholehhudin.ms@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-sholehhudin/",
  github: "https://github.com/msholehhudin",
  cvUrl: "/CV_M_Sholehhudin_Fullstack.pdf",
};

export const STACK = [
  { name: "React.js", level: "Expert", icon: "⚛" },
  { name: "Next.js", level: "Expert", icon: "▲" },
  { name: "TypeScript", level: "Advanced", icon: "𝕋" },
  { name: "Tailwind CSS", level: "Expert", icon: "⌁" },
  { name: "TanStack Query", level: "Advanced", icon: "⟳" },
  { name: "Redux", level: "Advanced", icon: "◈" },
  { name: "Supabase", level: "Proficient", icon: "▣" },
  { name: "Git / GitHub", level: "Advanced", icon: "⑂" },
];

export const PROJECTS: Project[] = [
    {
    id: "ai-sales-page-generator",
    title: "AI Sales Page Generator",
    tags: ["AI Integration", "Generative AI", "Featured"],
    tagVariants: ["blue", "green", "amber"],
    featured: true,
    screenshot: "/Generator.png",
    screenshots: [
      "/Generator.png",
      "/ai-sales-detail.png",
      "/ai-sales-history.png",
      "/ai-sales-login.png",
    ],
    link: "https://ai-sales-page-generator.vercel.app/",
    description:
        "Full-stack AI content generation application that transforms structured product information into complete sales-page content using a Next.js frontend, Laravel REST API, and Google Gemini. The portfolio deployment showcases the application interface and generated-output workflow.",
    highlight:
      "Google Gemini integration · Structured JSON generation · Laravel REST API",
    tech: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "Google Gemini",
      "MySQL",
      "Tailwind CSS",
    ],
    caseStudyContent: {
      body: `<p>AI Sales Page Generator explores how generative AI can streamline marketing content creation by transforming a structured product brief into a complete sales-page content structure.</p>

<p class="mt-4">The application uses a Next.js frontend connected to a Laravel REST API. The Laravel backend constructs a structured prompt and integrates with Google Gemini to generate marketing content as structured JSON. The response is parsed, validated, persisted, and then rendered through the frontend.</p>

<p class="mt-4 font-medium text-text-1">AI Integration:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Integrated Google Gemini through a dedicated Laravel AI service</li>
  <li class="text-sm text-text-2">▸ Designed prompts to produce predictable structured JSON output</li>
  <li class="text-sm text-text-2">▸ Parsed and validated AI-generated responses before persistence</li>
  <li class="text-sm text-text-2">▸ Transformed structured AI output into a responsive sales-page preview</li>
</ul>

<p class="mt-4 font-medium text-text-1">Key Technical Challenges:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Connecting a Next.js frontend with a Laravel REST API</li>
  <li class="text-sm text-text-2">▸ Handling authentication with Laravel Sanctum</li>
  <li class="text-sm text-text-2">▸ Persisting generated content and exposing generation history</li>
  <li class="text-sm text-text-2">▸ Handling malformed or unexpectedly formatted AI responses</li>
</ul>`,
      impact:
        "Demonstrates practical generative AI integration rather than model development, with a complete flow from user input to AI generation, validation, persistence, and frontend rendering.",
    },
  },

   {
    id: "bluespider",
    title: "Bluespider Contact Center",
    tags: ["AI Integration","Real-time", "Omnichannel", "Enterprise"],
    tagVariants: ["amber","green", "blue"],
    link: "https://demo-crm.aosgraha.com/",
    screenshot: "/BSdemo.png",
    screenshots: [
      "/BSdemo.png",
      "/Speech-to-text.png",
      "/omnichannel.png"
    ],
    description:
      "Enterprise-grade omnichannel contact center platform combining WebRTC voice, real-time messaging, agent management, and AI-assisted speech-to-text capabilities within a unified workspace. Designed to support complex communication workflows while integrating external services into a real-time operational environment.",
    highlight:  "AI speech-to-text integration · WebRTC · Real-time omnichannel communication",
    tech: ["Vue.js", "Laravel", "WebRTC", "Firebase", "Docker"],
    caseStudyContent: {
      body: `<p>Bluespider is an enterprise-grade omnichannel contact center platform supporting WebRTC voice calls, real-time chat, email threading, and unified agent management.</p>

<p class="mt-4">The platform combines real-time communication infrastructure with external service integrations to support customer service workflows across multiple channels.</p>

<p class="mt-4 font-medium text-text-1">AI Integration:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Integrated speech-to-text capabilities into voice communication workflows</li>
  <li class="text-sm text-text-2">▸ Converted voice interactions into text data for downstream processing</li>
  <li class="text-sm text-text-2">▸ Connected external AI services with the existing Laravel and WebRTC architecture</li>
</ul>

<p class="mt-4 font-medium text-text-1">Key Technical Challenges:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ WebRTC peer connection management and SIP protocol integration</li>
  <li class="text-sm text-text-2">▸ Real-time WebSocket state for live agent queues and call distribution</li>
  <li class="text-sm text-text-2">▸ Optimized UI updates for high-frequency real-time data</li>
  <li class="text-sm text-text-2">▸ Multi-tab session management without state conflicts</li>
</ul>
`,
      impact: "Production contact center platform combining real-time communication infrastructure with external service and AI integrations.",
    },
  },

  
  {
    id: "medixpress",
    title: "mediXpress",
    tags: ["SaaS", "Document Automation", "Healthcare"],
    tagVariants: ["blue", "amber", "green"],
    featured: false,
    screenshot: "/medixpress.png",
    screenshots: [
      "/medixpress.png",
      "/medixpress-login.png",
      "/medixpress-system-settings.png",
      "/medixpress-upload-pdf.png",
    ],
    link: "https://medixpress.vercel.app/",
    description:
      "A comprehensive healthcare delivery platform engineered to solve critical patient queue and appointment management problems. Built with real clinical workflows in mind, enabling healthcare providers to streamline operations and reduce patient wait times significantly.",
    highlight:
       "Automated PDF data extraction · Reduced manual form entry",
    tech: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Supabase",
    ],
    caseStudyContent: {
      body: `<p>mediXpress is a healthcare delivery platform designed to streamline patient intake, appointment management, and operational workflows.</p>

<p class="mt-4">One of the key workflow improvements is document automation: information from cashier-generated PDF documents can be extracted and used to populate application form fields, reducing repetitive manual data entry.</p>

<p class="mt-4 font-medium text-text-1">Document Automation:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Extracted structured information from cashier-generated PDF documents</li>
  <li class="text-sm text-text-2">▸ Transformed extracted document data into application form fields</li>
  <li class="text-sm text-text-2">▸ Reduced repetitive manual data entry for operational staff</li>
  <li class="text-sm text-text-2">▸ Allowed users to review and adjust extracted information before submission</li>
</ul>

<p class="mt-4 font-medium text-text-1">Other Technical Challenges:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Real-time queue state management across multiple concurrent users</li>
  <li class="text-sm text-text-2">▸ Complex scheduling logic with doctor availability and priority rules</li>
  <li class="text-sm text-text-2">▸ Optimistic UI updates for instant feedback while syncing with backend</li>
  <li class="text-sm text-text-2">▸ Mobile-first workflows for staff and patient-facing views</li>
</ul>
`,
      impact:
        "Actively deployed in healthcare facilities. Patient wait time visibility improved, reducing administrative overhead significantly.",
    },
  },

    {
    id: "ev-battery-monitoring",
    title: "EV Battery Monitoring Dashboard",
    tags: ["IoT Dashboard", "Real-time Data", "Monitoring"],
    tagVariants: ["green", "blue", "amber"],
    featured: false,
    screenshot: "/ev-cabinet.png",
    link: "https://ev-cabinet-monitor.vercel.app/",
    description:
      "Internal monitoring dashboard for tracking EV battery-swap cabinets, slot availability, battery states, swap activity, and cabinet health across multiple branches.",
    highlight:
      "50 cabinets · 600 battery slots · Real-time monitoring workflow",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "Zod",
    ],
    caseStudyContent: {
      body: `<p>The EV Battery Monitoring Dashboard is an internal operational dashboard designed to monitor battery-swap infrastructure across multiple branches.</p>

<p class="mt-4">The application processes and presents operational data from cabinets, battery slots, and swap transactions so operators can quickly identify cabinet status, battery availability, recent activity, and potential issues.</p>

<p class="mt-4 font-medium text-text-1">Data Processing & Monitoring:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Processed cabinet, slot, and swap transaction data from PostgreSQL</li>
  <li class="text-sm text-text-2">▸ Calculated and displayed rolling 24-hour swap activity</li>
  <li class="text-sm text-text-2">▸ Implemented server-side filtering, searching, sorting, and pagination</li>
  <li class="text-sm text-text-2">▸ Visualized 12 battery slots and their operational states per cabinet</li>
</ul>

<p class="mt-4 font-medium text-text-1">Architecture:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Next.js App Router with server and client components</li>
  <li class="text-sm text-text-2">▸ PostgreSQL database hosted through Supabase</li>
  <li class="text-sm text-text-2">▸ API layer for cabinet and transaction queries</li>
  <li class="text-sm text-text-2">▸ URL-based filtering and pagination state</li>
</ul>`,
      impact:
        "Seeded with 10 branches, 50 cabinets, 600 cabinet slots, and 20,000 swap transactions to demonstrate the monitoring workflow at operational scale.",
    },
  },

  {
    id: "joyinspec",
    title: "joy-inspec",
    tags: ["CRM", "Production", "Company Profile"],
    tagVariants: ["blue", "amber", "green"],
    link: "https://joy-inspec.vercel.app/",
    screenshot: "/JoyInspec.png",
    description:
      "Vehicle inspection CRM actively used in real business operations. Streamlines the inspection lifecycle from intake to report delivery, built in close collaboration with the client to match their exact workflows.",
    highlight: "Live in production · Built with real client collaboration",
    tech: ["Next.js", "React.js", "TypeScript", "Tanstack Query", "Tailwind CSS", "Zustand", "Zod"],
    caseStudyContent: {
      body: `<p>joy-inspec is a production CRM system built for a real vehicle inspection business, managing the full lifecycle of inspection jobs from intake to final report delivery.</p>

<p class="mt-4">Built in direct collaboration with the client, the system was designed around their actual operational workflows rather than a generic CRM template.</p>

<p class="mt-4 font-medium text-text-1">Key Challenges Solved:</p>

<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Complex multi-step inspection forms with conditional logic</li>
  <li class="text-sm text-text-2">▸ Role-based access control for inspectors and managers</li>
  <li class="text-sm text-text-2">▸ PDF report generation from inspection data</li>
  <li class="text-sm text-text-2">▸ Client portal for real-time job status updates</li>
</ul>`,
      impact: "Currently in active use by the client in daily business operations, processing multiple inspections per day.",
    },
  },
   
];

export const EXPERIENCE: Experience[] = [
  {
    period: "2023 — Present",
    role: "Fullstack Engineer",
    company: "PT Asia Outsourching Services — Software Development Company",
    current: true,
    description:
      "Leading frontend development for multiple SaaS products serving healthcare, logistics, and enterprise clients. Architected scalable component libraries, implemented complex real-time features, and drove performance improvements resulting in measurably better user experiences.",
    tech: ["React.js", "Next.js", "Vue.js", "Laravel", "TypeScript", "TanStack Query", "Tailwind CSS", "WebRTC", "Docker"],
  },
  {
    period: "2021 — 2023",
    role: "IT Engineer / Junior Developer",
    company: "TRANS7 — Multinational Broadcasting Company",
    description:
      "Managed enterprise IT infrastructure while actively transitioning into development. Built internal tooling, automated repetitive IT workflows, and took on increasing frontend responsibilities. This hybrid role became the bridge to a full software engineering career.",
    tech: ["JavaScript", "React (learning)", "Network Admin", "Linux"],
  },
  {
    period: "2019 — 2021",
    role: "IT Support & Graphic Designer Specialist",
    company: "RS Mitra Sehat Medika — Hospital",
    description:
      "Provided technical support, managed workstations, servers, and network equipment. Developed deep understanding of user pain points and system behavior — skills that directly inform how I approach frontend engineering today.",
    tech: ["Windows Server", "Networking", "Technical Support"],
  },
];

export const CAREER_TIMELINE: TimelineItem[] = [
  {
    period: "2023 — Now",
    role: "Fullstack Developer",
    company: "Software House / Startup",
    description: "Shipping production apps in healthcare, CRM, and real-time communication — from first commit to live users.",
    active: true,
  },
  {
    period: "2021 — 2023",
    role: "IT Engineer",
    company: "Multinational Broadcast Company",
    description: "Kept broadcast infrastructure running at scale. Started writing code to fix problems tools couldn't solve.", 
  },
  {
    period: "2019 — 2021",
    role: "IT Support & Graphic Designer Specialist",
    company: "Hospital",
    description: "Learned that downtime has human cost. Fixed systems and hardware, designed communications, developed a deep instinct for usability.",
  },
];

export const REMOTE_CARDS = [
  { icon: "🌐", title: "English Proficiency", desc: "Comfortable communicating in English — in writing, async, and live calls with international teams." },
  { icon: "⏱", title: "Async-First", desc: "Experienced with async workflows, clear documentation, and proactive status updates across time zones." },
  { icon: "🛠", title: "Remote Tooling", desc: "Proficient with Slack, Notion, Linear, GitHub, Figma, and the full remote-first collaboration stack." },
  { icon: "🤝", title: "Team Culture", desc: "Values transparency, direct communication, and collaborative ownership over siloed work." },
];

export const TIMEZONES = [
  { label: "WIB (UTC+7)", tz: "Asia/Jakarta", color: "#34d399" },
  { label: "CET (UTC+1)", tz: "Europe/Berlin", color: "#f59e0b" },
  { label: "EST (UTC-5)", tz: "America/New_York", color: "#4f8ef7" },
  { label: "PST (UTC-8)", tz: "America/Los_Angeles", color: "#7c6af7" },
];

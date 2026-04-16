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
  cvUrl: "#",
};

export const STACK = [
  { name: "React.js", level: "Expert", icon: "⚛" },
  { name: "Next.js", level: "Expert", icon: "▲" },
  { name: "TypeScript", level: "Advanced", icon: "𝕋" },
  { name: "Tailwind CSS", level: "Expert", icon: "⌁" },
  { name: "TanStack Query", level: "Advanced", icon: "⟳" },
  { name: "Redux", level: "Advanced", icon: "◈" },
  { name: "REST / GraphQL", level: "Proficient", icon: "⬡" },
  { name: "Git / GitHub", level: "Advanced", icon: "⑂" },
];

export const PROJECTS: Project[] = [
  {
    id: "medixpress",
    title: "mediXpress",
    tags: ["SaaS", "Healthcare", "Featured"],
    tagVariants: ["blue", "green", "amber"],
    featured: true,
    description:
      "A comprehensive healthcare delivery platform engineered to solve critical patient queue and appointment management problems. Built with real clinical workflows in mind, enabling healthcare providers to streamline operations and reduce patient wait times significantly.",
    highlight: "Reduced patient queue wait times · Real-world SaaS deployment",
    tech: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "REST API"],
    caseStudyContent: {
      body: `<p>mediXpress addresses one of the most critical pain points in modern healthcare: patient queue management and appointment scheduling.</p>
<p class="mt-4">The platform enables clinics and hospitals to digitize their patient intake process, manage appointment queues in real time, and give patients transparency into wait times — reducing friction, no-shows, and operational overhead.</p>
<p class="mt-4 font-medium text-text-1">Key Challenges Solved:</p>
<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Real-time queue state management across multiple concurrent users</li>
  <li class="text-sm text-text-2">▸ Complex scheduling logic with doctor availability and priority rules</li>
  <li class="text-sm text-text-2">▸ Optimistic UI updates for instant feedback while syncing with backend</li>
  <li class="text-sm text-text-2">▸ Mobile-first design for both staff and patient-facing views</li>
</ul>`,
      impact: "Actively deployed in healthcare facilities. Patient wait time visibility improved, reducing administrative overhead significantly.",
    },
  },
  {
    id: "joyinspec",
    title: "joy-inspec",
    tags: ["CRM", "Production"],
    tagVariants: ["blue", "amber"],
    description:
      "Vehicle inspection CRM actively used in real business operations. Streamlines the inspection lifecycle from intake to report delivery, built in close collaboration with the client to match their exact workflows.",
    highlight: "Live in production · Built with real client collaboration",
    tech: ["React.js", "Redux", "Tailwind CSS", "REST API"],
    caseStudyContent: {
      body: `<p>joy-inspec is a production CRM system built for a real vehicle inspection business, managing the full lifecycle of inspection jobs from intake to final report delivery.</p>
<p class="mt-4">Built in direct collaboration with the client, the system was designed around their actual operational workflows — not a generic CRM template. This meant extensive iteration on UX, complex form logic, and tight integration with their reporting requirements.</p>
<p class="mt-4 font-medium text-text-1">Key Challenges Solved:</p>
<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ Complex multi-step inspection forms with conditional logic</li>
  <li class="text-sm text-text-2">▸ Role-based access control for inspectors vs managers</li>
  <li class="text-sm text-text-2">▸ PDF report generation from inspection data</li>
  <li class="text-sm text-text-2">▸ Client portal for real-time job status updates</li>
</ul>`,
      impact: "Currently in active use by the client in daily business operations, processing multiple inspections per day.",
    },
  },
  {
    id: "bluespider",
    title: "Bluespider Contact Center",
    tags: ["Real-time", "Omnichannel"],
    tagVariants: ["green", "blue"],
    description:
      "Enterprise-grade omnichannel contact center platform with WebRTC voice, real-time messaging, and agent management. Architected for scale across thousands of concurrent connections.",
    highlight: "WebRTC + WebSocket · Thousands of concurrent connections",
    tech: ["Next.js", "TypeScript", "WebRTC", "WebSocket", "Redux"],
    caseStudyContent: {
      body: `<p>Bluespider is an enterprise-grade omnichannel contact center platform supporting WebRTC voice calls, real-time chat, email threading, and unified agent management.</p>
<p class="mt-4">This was the most technically complex project in my portfolio, requiring deep expertise in real-time systems, WebRTC protocol, and managing concurrent state across hundreds of simultaneous interactions.</p>
<p class="mt-4 font-medium text-text-1">Key Technical Challenges:</p>
<ul class="mt-2 space-y-1">
  <li class="text-sm text-text-2">▸ WebRTC peer connection management and SIP protocol integration</li>
  <li class="text-sm text-text-2">▸ Real-time WebSocket state for live agent queues and call distribution</li>
  <li class="text-sm text-text-2">▸ Optimized re-rendering for high-frequency real-time data updates</li>
  <li class="text-sm text-text-2">▸ Multi-tab session management without state conflicts</li>
</ul>`,
      impact: "Built to handle thousands of concurrent connections with sub-100ms UI response time for call state changes.",
    },
  },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "2023 — Present",
    role: "Frontend Engineer",
    company: "PT Asia Outsourching Services — Software Development Company",
    current: true,
    description:
      "Leading frontend development for multiple SaaS products serving healthcare, logistics, and enterprise clients. Architected scalable component libraries, implemented complex real-time features, and drove performance improvements resulting in measurably better user experiences.",
    tech: ["React.js", "Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "WebRTC"],
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
    role: "Frontend Engineer",
    company: "Software House / Startup",
    description: "Building React & Next.js applications for healthcare, CRM, and communication platforms.",
    active: true,
  },
  {
    period: "2021 — 2023",
    role: "IT Engineer",
    company: "Multinational Broadcast Company",
    description: "Bridging IT infrastructure and software development. Started shipping real code.",
  },
  {
    period: "2019 — 2021",
    role: "IT Support Specialist",
    company: "Various Organizations",
    description: "Foundation in systems, networks, and deep empathy for how users interact with technology.",
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

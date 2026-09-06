import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "01",
    path: "src/projects/agenda-nusantara.dart",
    title: "Agenda Nusantara — Mobile Task Planner",
    client: "BNSP Certification Project (Polinema)",
    role: "Mobile Developer",
    period: "May 2026",
    stack: ["Flutter", "Dart", "SQLite", "Sqflite", "Local Storage"],
    metrics: "Offline-First • Local SQLite • State Management",
    description:
      "Engineered an offline-first mobile productivity application for BNSP Competency Certification. Features local SQLite database integration, categorized task management (Important vs. Normal), interactive progress statistics, and local password authentication.",
    images: [
      "/assets/projects/sertikom/login.jpeg",
      "/assets/projects/sertikom/dashboard.jpeg",
      "/assets/projects/sertikom/ttb.jpeg",
      "/assets/projects/sertikom/ttp.jpeg",
      "/assets/projects/sertikom/daftar-tugas.jpeg",
      "/assets/projects/sertikom/ganti-password.jpeg",
    ],
  },
  {
    id: "02",
    path: "src/projects/lintang-utama.ts",
    title: "Company Profile Website",
    client: "PT Lintang Utama Infotek",
    role: "Frontend Developer",
    period: "Jul 2025 – Oct 2025",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "CMS", "Docker"],
    metrics: "Responsive UI • Modular Components • Performance Optimized",
    description:
      "Architected modular and reusable UI components using Next.js and Tailwind CSS. Implemented SSR/SSG patterns, strict TypeScript interfaces, and optimized performance for corporate service showcasing.",
    link: "https://www.lui.co.id/",
    images: [],
  },
  {
    id: "03",
    path: "src/projects/ritra-hrm.php",
    title: "RitraHRM — HRDGA Work Planner",
    client: "PT Ritra Cargo Indonesia (Semarang Branch)",
    role: "Full-Stack Developer",
    period: "Feb 2025 – Jul 2025",
    stack: ["Laravel", "PHP", "MySQL", "Web Push API", "SMTP"],
    metrics: "Service Workers • Scheduler Mapping • Event Notification",
    description:
      "Designed and built an internal task-planning platform. Integrated real-time Web Push Notifications via Service Workers and automated SMTP email alerts to eliminate manual paper scheduling.",
    images: [
      "/assets/projects/ritrahrm/dashboard.png",
      "/assets/projects/ritrahrm/calendar.png",
      "/assets/projects/ritrahrm/pnotif.png",
    ],
  },
  {
    id: "04",
    path: "src/projects/fest-ticket.dart",
    title: "FestTicket — Mobile Ticketing",
    client: "Academic Project",
    role: "Mobile Developer",
    period: "2024",
    stack: ["Flutter", "Dart", "REST API"],
    metrics: "Cross-Platform • Client-side State • REST Integration",
    description:
      "Developed cross-platform mobile UI for event discovery and digital ticket validation. Handled client-side state management and REST API integration for ticket purchasing workflows.",
    images: [],
  },
  {
    id: "05",
    path: "src/projects/sisforfive.php",
    title: "SISFORFIVE — RW Management System",
    client: "Community Project",
    role: "Frontend Developer",
    period: "2024",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "RBAC"],
    metrics: "RBAC Middleware • Form Validation • Relational DB",
    description:
      "Built administrative CRUD system for resident record-keeping. Implemented Role-Based Access Control (RBAC) middleware to segregate permissions between committee admins and public users.",
    images: [],
  },
  {
    id: "06",
    path: "src/projects/jti-inventory.php",
    title: "Inventory & Lending System",
    client: "JTI Polinema",
    role: "Frontend Developer",
    period: "2023",
    stack: ["PHP", "MySQL", "JavaScript", "MVC Architecture"],
    metrics: "Transaction Logs • Automated Overdue Flags • Foreign Keys",
    description:
      "Engineered asset-tracking system following MVC architecture. Structured MySQL relational schemas with foreign keys and foreign transaction logging to handle equipment borrowing and automated overdue flags.",
    images: [],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="border-t-2 border-[#192841] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-bold tracking-widest uppercase opacity-70">
              04 // EXECUTED PROJECTS
            </p>
            <h2 className="text-3xl font-bold">Production & Academic Codebase</h2>
          </div>
          <p className="mt-2 text-xs opacity-70 md:mt-0">
            Total Projects: {projects.length}
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectSection from "@/app/components/ProjectSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "PT Lintang Utama Infotek",
      period: "Jul 2025 – Oct 2025",
      logo: "/assets/logo/lui.png",
      description:
        "Developed a responsive corporate website showcasing company profile, services, and portfolio. Built reusable UI components and optimized layout performance and accessibility.",
      skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      role: "HRD-GA Web Developer Intern",
      company: "PT Ritra Cargo Indonesia (Cabang Semarang)",
      period: "Feb 2025 – Jul 2025",
      logo: "/assets/logo/ritra_logo.png",
      description:
        "Digitalized HRD & General Affairs operational workflows by building an internal scheduling system (RitraHRM). Implemented Web Push API via Service Workers and automated SMTP email alerts to improve task tracking efficiency.",
      skills: ["Laravel", "PHP", "MySQL", "Service Workers", "Web Push Notifications"],
    },
  ];

  const education = [
    {
      degree: "D4 Information Technology",
      institution: "Politeknik Negeri Malang (Polinema)",
      period: "2022 – 2026",
      status: "Graduated / Finished",
      logo: "/assets/logo/polinema_logo.png",
      details:
        "Focused on Software Engineering, Web & Mobile Application Development, Database Architecture, and System Design.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffd1cd] font-mono text-[#192841] selection:bg-[#192841] selection:text-[#ffd1cd] overflow-x-hidden">
      {/* STATUS BAR / SYSTEM HEADER */}
      <div className="border-b border-[#192841]/20 bg-[#192841]/5 px-4 py-2 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs">
              sys.status: <strong className="font-semibold">ONLINE</strong>
            </span>
            <span className="hidden opacity-40 md:inline">|</span>
            <span className="hidden opacity-70 md:inline">env: production</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] opacity-80">
            <span>loc: Malang, ID</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-6 border-b border-[#192841]/20">
        <div className="text-base sm:text-lg font-bold tracking-tight flex items-center gap-2">
          <span className="text-[#192841]/50">&gt;</span> fitriani_novita_m.dev
        </div>

        {/* Menu Navigasi (Mobile Support Horizontal Scroll jika penuh) */}
        <div className="flex w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 gap-4 sm:gap-6 text-xs font-semibold scrollbar-none whitespace-nowrap">
          <a href="#education" className="hover:underline">01.//education</a>
          <a href="#experience" className="hover:underline">02.//experience</a>
          <a href="#stack" className="hover:underline">03.//tech_stack</a>
          <a href="#projects" className="hover:underline">04.//projects</a>
          <a href="#contact" className="hover:underline">05.//contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 md:py-28">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <div className="inline-block border border-[#192841] bg-[#192841]/5 px-3 py-1 text-xs font-semibold mb-4 sm:mb-6">
              $ cat developer_profile.json
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
              Fitriani Novita M<span className="text-[#192841]/40">.init()</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold tracking-wide uppercase opacity-70">
              Web & Mobile Developer // Information Technology Graduate
            </p>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed opacity-90 max-w-xl">
              Focusing on full-stack web engineering primarily with{" "}
              <span className="bg-[#192841] text-[#ffd1cd] px-1 font-semibold">
                Laravel
              </span>{" "}
              and modern front-end / mobile stacks (
              <span className="font-semibold">Next.js, Tailwind CSS, Flutter</span>
              ). Experienced in building administrative platforms, business workflows, and API integrations with basic Docker orchestration.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 text-xs font-bold">
              <a
                href="#projects"
                className="bg-[#192841] px-4 sm:px-6 py-3 sm:py-3.5 text-[#ffd1cd] transition hover:opacity-90 flex items-center gap-2"
              >
                <span>./view_projects.sh</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="border-2 border-[#192841] px-4 sm:px-6 py-3 sm:py-3.5 transition hover:bg-[#192841] hover:text-[#ffd1cd]"
              >
                ./contact_me
              </a>
            </div>
          </div>

          <div className="border-2 border-[#192841] bg-[#ffd1cd] p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(25,40,65,1)] sm:shadow-[6px_6px_0px_0px_rgba(25,40,65,1)]">
            <div className="flex items-center justify-between border-b border-[#192841] pb-2 sm:pb-3 mb-3 sm:mb-4 text-xs">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border border-[#192841] bg-[#192841]/20" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border border-[#192841] bg-[#192841]/20" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border border-[#192841] bg-[#192841]/20" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold opacity-70">
                profile_summary.ts
              </span>
            </div>

            <pre className="text-[10px] sm:text-xs leading-relaxed overflow-x-auto text-[#192841]">
              <code>
                {`const developer = {
  name: "Fitriani Novita",
  degree: "D4 Information Technology",
  institution: "Politeknik Negeri Malang",
  primary_focus: ["Full-Stack Web", "Mobile UI"],
  core_stack: {
    backend: ["Laravel", "PHP", "MySQL"],
    frontend: ["JavaScript", "Next.js", "Tailwind"],
    mobile: ["Flutter", "Dart"],
    devops: ["Docker (Basic)", "Git"]
  },
  status: "Ready for Full-Time Roles"
};`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 1: EDUCATION */}
      <section id="education" className="border-t-2 border-[#192841] px-4 sm:px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 opacity-70">
            01 // ACADEMIC BACKGROUND
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">Education & Credentials</h2>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border-2 border-[#192841] bg-[#ffd1cd] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(25,40,65,1)] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center border-2 border-[#192841] bg-[#192841]/10">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                    <span className="text-[10px] sm:text-xs font-semibold bg-[#192841] text-[#ffd1cd] px-2 py-0.5 w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-[#192841]/80 mt-1">
                    {edu.institution} • <span className="underline">{edu.status}</span>
                  </p>

                  <p className="text-xs leading-relaxed mt-2 sm:mt-3 opacity-90">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERIENCE */}
      <section id="experience" className="border-t-2 border-[#192841] px-4 sm:px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 opacity-70">
            02 // INTERNSHIP HISTORY
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">Professional Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-2 border-[#192841] bg-[#ffd1cd] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(25,40,65,1)] flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center border-2 border-[#192841] p-2">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                    <span className="text-[10px] sm:text-xs font-semibold border border-[#192841] px-2 py-0.5 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-[#192841]/80 mt-1">
                    {exp.company}
                  </p>

                  <p className="text-xs leading-relaxed mt-2 sm:mt-3 opacity-90">
                    {exp.description}
                  </p>

                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#192841] bg-[#192841]/10 px-2 py-0.5 text-[10px] font-bold"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK GRID */}
      <section id="stack" className="border-t-2 border-[#192841] px-4 sm:px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 opacity-70">
            03 // TECHNICAL SPECIFICATIONS
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10">
            System Architecture & Capabilities
          </h2>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                category: "CORE BACKEND",
                tools: "PHP, Laravel, MySQL, RESTful API, Blade Templates",
              },
              {
                category: "FRONTEND & UI",
                tools: "JavaScript (ES6+), Next.js, React, Tailwind CSS, HTML5/CSS3",
              },
              {
                category: "MOBILE DEV",
                tools: "Flutter, Dart, Mobile UI Layouts, API Consumption",
              },
              {
                category: "WORKFLOW & DEVOPS",
                tools: "Docker (Basic), Git, GitHub, Postman, VS Code",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-[#192841] p-4 sm:p-5 bg-[#192841]/5">
                <span className="text-[10px] font-bold border border-[#192841] px-1.5 py-0.5">
                  SYS.0{idx + 1}
                </span>
                <h3 className="text-xs sm:text-sm font-bold mt-3 sm:mt-4 mb-2">
                  {item.category}
                </h3>
                <p className="text-xs leading-relaxed opacity-80">{item.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // PROJECTS */}
      <ProjectSection />

      {/* CONTACT SECTION */}
      <section id="contact" className="border-t-2 border-[#192841] px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3 opacity-70">
            05 // INITIALIZE CONNECTION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
            Ready to collaborate?
          </h2>
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 opacity-80 max-w-lg mx-auto">
            Open for Full-Stack / Front-End / Software Engineering positions. Send a ping or inspect code repositories.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="mailto:fitrianinovitam@gmail.com"
              className="inline-block border-2 border-[#192841] bg-[#192841] px-5 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold text-[#ffd1cd] shadow-[3px_3px_0px_0px_rgba(255,209,205,1)] sm:shadow-[4px_4px_0px_0px_rgba(255,209,205,1)] transition hover:translate-x-0.5 hover:translate-y-0.5"
            >
              $ mailto --send "fitrianinovitam@gmail.com"
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#192841]/20 px-4 sm:px-6 py-6 text-[10px] sm:text-[11px] opacity-70">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 sm:flex-row">
          <p>© 2026 Fitriani Novita. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Monospace System Fonts</p>
        </div>
      </footer>
    </main>
  );
}
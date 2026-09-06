"use client";

import { useState } from "react";

export type Project = {
  id: string;
  path: string;
  role: string;
  period: string;
  title: string;
  client: string;
  description: string;
  metrics: string;
  stack: string[];
  images: string[];
  link?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  // Cek apakah projek termasuk aplikasi mobile berdasarkan stack
  const isMobileProject = project.stack.some((tech) =>
    ["Flutter", "Dart", "React Native", "Android", "iOS"].includes(tech)
  );

  return (
    <article className="border-2 border-[#192841] bg-[#ffd1cd] p-6 shadow-[4px_4px_0px_0px_rgba(25,40,65,1)]">
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#192841]/30 pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="border border-[#192841] bg-[#192841] px-2 py-0.5 font-bold text-[#ffd1cd]">
            {project.id}
          </span>
          <span className="font-semibold opacity-80">{project.path}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>
            Role: <strong>{project.role}</strong>
          </span>
          <span>
            Period: <strong>{project.period}</strong>
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
        {/* INFO (KIRI) */}
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-1 text-xs font-semibold text-[#192841]/70">
              Client/Context: {project.client}
            </p>

            <p className="mt-4 text-xs leading-relaxed opacity-90">
              {project.description}
            </p>

            <div className="mt-4 border-l-2 border-[#192841] py-1 pl-3 text-[11px] font-semibold opacity-80">
              Key Implementations: {project.metrics}
            </div>
          </div>

          <div>
            {/* LIVE LINK */}
            {project.link && (
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#192841] bg-[#192841] px-3 py-1.5 text-[11px] font-bold text-[#ffd1cd] transition-all duration-200 hover:bg-[#ffd1cd] hover:text-[#192841]"
                >
                  View Live Website <span>↗</span>
                </a>
              </div>
            )}

            {/* TECH STACK */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-[#192841] bg-[#192841]/10 px-2 py-0.5 text-[10px] font-bold"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SCREENSHOTS SLIDER (KANAN) */}
{project.images.length > 0 && (
  <div className="flex flex-col items-center justify-center">
    <div
      className={`relative mx-auto overflow-hidden border-2 border-[#192841] bg-[#192841]/5 ${
        isMobileProject
          ? "w-full max-w-[180px] aspect-[9/19] max-h-[360px] rounded-2xl p-1.5"
          : "w-full aspect-[16/9] rounded-none"
      }`}
    >
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className={`h-full w-full shrink-0 ${
              isMobileProject
                ? "object-contain rounded-xl"
                : "object-cover"
            }`}
          />
        ))}
      </div>

      {/* TOMBOL NAVIGASI SLIDER */}
      {project.images.length > 1 && (
            <>
            <button
                onClick={prevSlide}
                className="absolute left-1 top-1/2 -translate-y-1/2 border border-[#192841] bg-[#ffd1cd] px-1 py-0.5 text-[10px] font-bold shadow-[1px_1px_0px_0px_rgba(25,40,65,1)] hover:bg-[#192841] hover:text-[#ffd1cd] transition-colors"
                aria-label="Previous image"
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-1 top-1/2 -translate-y-1/2 border border-[#192841] bg-[#ffd1cd] px-1 py-0.5 text-[10px] font-bold shadow-[1px_1px_0px_0px_rgba(25,40,65,1)] hover:bg-[#192841] hover:text-[#ffd1cd] transition-colors"
                aria-label="Next image"
            >
                ▶
            </button>

            {/* INDIKATOR TITIK */}
            <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-[#192841]/60 px-1.5 py-0.5">
                {project.images.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                    currentImageIndex === idx
                        ? "bg-[#ffd1cd] w-3"
                        : "bg-white/50 w-1.5"
                    }`}
                />
                ))}
            </div>
            </>
        )}
        </div>
    </div>
    )}
      </div>
    </article>
  );
}
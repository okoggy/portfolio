"use client";

import React, { useState } from "react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "Fullstack" | "Systems & Auth" | "AI & Web";
  projectType: "Personal / Independent" | "Class / Academic";
  repoUrl: string;
  image: string;
  tech: string[];
  featured: boolean;
  metrics?: string;
}

const PROJECTS: Project[] = [
  {
    title: "SKILL-SWAP",
    tagline: "Peer-to-Peer Skill Exchange Platform",
    description:
      "A peer-to-peer skill exchange platform concept built for India 🇮🇳 — teach what you know, learn what you want. Features video swap rooms, AI chatbot assistant, community guilds, glassmorphism UI, and dynamic themes.",
    category: "Fullstack",
    projectType: "Personal / Independent",
    repoUrl: "https://github.com/okoggy/SKILL-SWAP",
    image: "/images/projects/skill-swap.svg",
    tech: ["JavaScript", "Node.js", "WebSockets", "AI Chatbot", "Glassmorphism UI"],
    featured: true,
    metrics: "Live Video & Guilds",
  },
  {
    title: "FINANCE-TRACKER",
    tagline: "Personal Finance Manager",
    description:
      "A personal financial tracking web application built with the MERN stack. Track income and expenses, view budget analytics, monitor net balance, and organize transactions.",
    category: "Fullstack",
    projectType: "Personal / Independent",
    repoUrl: "https://github.com/okoggy/FINANCE-TRACKER",
    image: "/images/projects/finance-tracker.svg",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Analytics"],
    featured: true,
    metrics: "Real-time Balance & Charts",
  },
  {
    title: "Hospital Management System",
    tagline: "Academic Healthcare Administration Portal",
    description:
      "Academic web project facilitating patient record tracking, doctor appointment scheduling, clinical workflow prototypes, and admin dashboard management.",
    category: "Fullstack",
    projectType: "Class / Academic",
    repoUrl: "https://github.com/okoggy/Hospital-Management-System",
    image: "/images/projects/hospital-management.svg",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    featured: false,
    metrics: "Patient & Doctor Workflows",
  },
  {
    title: "Secure Auth & RBAC System",
    tagline: "Coursework JWT & RBAC Auth Project (ASSGN-2)",
    description:
      "Coursework project implementing JWT auth and RBAC patterns using Node.js, Express, and MongoDB. Features password hashing with bcrypt and role-restricted routes for Admin and Student access.",
    category: "Systems & Auth",
    projectType: "Class / Academic",
    repoUrl: "https://github.com/okoggy/ASSGN--2",
    image: "/images/projects/assgn2-rbac.svg",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Bcrypt Security"],
    featured: false,
    metrics: "Coursework Project",
  },
  {
    title: "Skill Lab AI Chatbot",
    tagline: "Skill Lab Conversational Agent",
    description:
      "Skill lab project demonstrating basic conversational AI logic. Integrates an external AI API to parse user inputs and render structured response pairs.",
    category: "AI & Web",
    projectType: "Class / Academic",
    repoUrl: "https://github.com/okoggy/AI-chatbot",
    image: "/images/projects/ai-chatbot.svg",
    tech: ["JavaScript", "Node.js", "AI API Integration", "REST"],
    featured: false,
    metrics: "Skill Lab Project",
  },
  {
    title: "Email Header Phishing Tool",
    tagline: "Email Header & Phishing Analysis Tool",
    description:
      "Email header analysis tool for detecting phishing indicators, inspecting headers, extracting IP geolocation info, and checking basic security signals.",
    category: "AI & Web",
    projectType: "Personal / Independent",
    repoUrl: "https://github.com/okoggy/Email-Forensics",
    image: "/images/projects/email-forensics.svg",
    tech: ["Python", "Security Analysis", "Geolocation", "Header Parsing"],
    featured: false,
    metrics: "Header Inspection Tool",
  },
];

type FilterType = "All" | "Personal Projects" | "Class / Academic" | "Fullstack" | "Systems & Auth" | "AI & Web";

export default function WorkSection() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Personal Projects") return p.projectType === "Personal / Independent";
    if (filter === "Class / Academic") return p.projectType === "Class / Academic";
    return p.category === filter;
  });

  return (
    <section id="work" className="relative py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto border-t border-[var(--grid-line)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            02 / Featured Work
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-normal tracking-tight text-ink">
            Crafted with intent &amp; structured, tested code.
          </h2>
          <p className="font-sans text-base text-ink/75 max-w-xl">
            Selected projects categorized honestly by scope — separating independent personal builds from class coursework and skill labs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {(["All", "Personal Projects", "Class / Academic", "Fullstack", "Systems & Auth", "AI & Web"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                filter === cat
                  ? "bg-ink text-white border-ink shadow-sm"
                  : "bg-white/80 text-ink/80 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => {
          const isPersonal = project.projectType === "Personal / Independent";
          return (
            <article
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Visual Preview Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900 border-b border-slate-200/60">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Visual Type Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border shadow-xs ${
                      isPersonal
                        ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40"
                        : "bg-indigo-950/80 text-indigo-300 border-indigo-500/40"
                    }`}
                  >
                    {project.projectType}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  {/* Header metadata */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="font-mono text-[11px] text-ink/60 bg-slate-100 px-2.5 py-1 rounded-md">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sans text-2xl font-semibold text-ink group-hover:text-blue-700 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs text-ink/60 mb-3">{project.tagline}</div>

                  {/* Description */}
                  <p className="font-sans text-sm text-ink/80 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100/90 text-ink/70 border border-slate-200/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Button linking directly to repository */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-medium text-ink uppercase tracking-wider group-hover:text-blue-600 transition-colors"
                    >
                      <span>View Repository</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <span className="font-mono text-[11px] text-ink/40">github.com/okoggy</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* View All Projects Button */}
      <div className="mt-12 text-center pt-8 border-t border-slate-200/80">
        <a
          href="https://github.com/okoggy?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-ink border border-slate-300 font-mono text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
        >
          <span>View All Projects &amp; Repositories on GitHub (@okoggy)</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}

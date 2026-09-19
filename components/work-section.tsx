"use client";

import React, { useState } from "react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "Fullstack" | "Systems & Auth" | "AI & Web";
  repoUrl: string;
  tech: string[];
  featured: boolean;
  metrics?: string;
}

const PROJECTS: Project[] = [
  {
    title: "SKILL-SWAP",
    tagline: "Peer-to-Peer Skill Exchange Platform",
    description:
      "A peer-to-peer skill exchange platform built for India 🇮🇳 — teach what you know, learn what you want. Features live video swap rooms, AI chatbot assistant, community guilds, glassmorphism UI, and dynamic themes.",
    category: "Fullstack",
    repoUrl: "https://github.com/okoggy/SKILL-SWAP",
    tech: ["JavaScript", "Node.js", "WebSockets", "AI Chatbot", "Glassmorphism UI"],
    featured: true,
    metrics: "Live Video & Guilds",
  },
  {
    title: "FINANCE-TRACKER",
    tagline: "MERN Stack Personal Finance Manager",
    description:
      "A comprehensive financial management application built with the MERN stack. Track income and expenses in real-time, view budget analytics, monitor net balance, and organize transactions seamlessly.",
    category: "Fullstack",
    repoUrl: "https://github.com/okoggy/FINANCE-TRACKER",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Analytics"],
    featured: true,
    metrics: "Real-time Balance & Charts",
  },
  {
    title: "Hospital Management System",
    tagline: "Healthcare Administration Platform",
    description:
      "Full-featured hospital management portal facilitating patient record tracking, doctor appointment scheduling, clinical workflow automation, and administrative dashboard management.",
    category: "Fullstack",
    repoUrl: "https://github.com/okoggy/Hospital-Management-System",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    featured: false,
    metrics: "Patient & Doctor Workflows",
  },
  {
    title: "Secure Auth & RBAC System",
    tagline: "Role-Based Authentication Engine (ASSGN-2)",
    description:
      "Production-grade security authentication and authorization engine built with Node.js, Express, and MongoDB. Implements JWT tokens, bcrypt password hashing, and granular Role-Based Access Control (RBAC) for Admin and Student API routes.",
    category: "Systems & Auth",
    repoUrl: "https://github.com/okoggy/ASSGN--2",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Bcrypt Security"],
    featured: false,
    metrics: "JWT & RBAC Protected APIs",
  },
  {
    title: "AI Chatbot",
    tagline: "Intelligent Conversational Agent",
    description:
      "Interactive AI chatbot developed during skill lab. Utilizes NLP processing and API integrations to process user queries, output contextual answers, and demonstrate conversational AI logic.",
    category: "AI & Web",
    repoUrl: "https://github.com/okoggy/AI-chatbot",
    tech: ["JavaScript", "Node.js", "AI API Integration", "REST"],
    featured: false,
    metrics: "Contextual Conversational AI",
  },
  {
    title: "Email-Forensics",
    tagline: "AI-Powered Threat Detection & Security Intelligence",
    description:
      "AI-powered email threat detection, IP geolocation, and forensic intelligence platform for analyzing email header security, detecting phishing anomalies, and automating threat analysis.",
    category: "AI & Web",
    repoUrl: "https://github.com/okoggy/Email-Forensics",
    tech: ["Python", "AI Intelligence", "Security Analysis", "Geolocation"],
    featured: false,
    metrics: "Forensic Threat Analysis",
  },
];

export default function WorkSection() {
  const [filter, setFilter] = useState<"All" | "Fullstack" | "Systems & Auth" | "AI & Web">("All");

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto border-t border-[var(--grid-line)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            02 / Featured Work
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-normal tracking-tight text-ink">
            Crafted with intent & engineering rigor.
          </h2>
          <p className="font-sans text-base text-ink/75 max-w-xl">
            Explore selected repositories from my GitHub profile. Each project addresses real-world problem statements through clean architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {(["All", "Fullstack", "Systems & Auth", "AI & Web"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all ${
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
        {filteredProjects.map((project, idx) => (
          <article
            key={idx}
            className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 ${
              project.featured ? "md:col-span-1 border-blue-100" : ""
            }`}
          >
            <div>
              {/* Header metadata */}
              <div className="flex items-center justify-between gap-4 mb-4">
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
              <div className="font-mono text-xs text-ink/60 mb-4">{project.tagline}</div>

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
          </article>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-12 text-center pt-8 border-t border-slate-200/80">
        <a
          href="https://github.com/okoggy?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-ink border border-slate-300 font-mono text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
        >
          <span>View All Projects & Repositories on GitHub (@okoggy)</span>
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

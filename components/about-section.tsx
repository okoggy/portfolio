"use client";

import React from "react";

const SKILL_CATEGORIES = [
  {
    title: "Algorithms & Data Structures",
    icon: (
      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ["Graph Algorithms", "Dynamic Programming", "Trees & Heaps", "Binary Search", "Time/Space Complexity"],
  },
  {
    title: "Fullstack Development",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round"/>
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round"/>
      </svg>
    ),
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Backend & Systems Security",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" strokeLinecap="round"/>
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round"/>
      </svg>
    ),
    skills: ["JWT Authentication", "Role-Based Access Control", "REST API Architecture", "Bcrypt Hashing", "WebSockets"],
  },
  {
    title: "Tools & AI Integration",
    icon: (
      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round"/>
      </svg>
    ),
    skills: ["Git & GitHub", "AI APIs & Chatbots", "Jupyter Notebooks", "Postman", "Vercel / Cloud"],
  },
];

const STATS = [
  { label: "Public Repositories", value: "15+" },
  { label: "Core DSA Patterns", value: "45+" },
  { label: "Primary Stack", value: "MERN / Next" },
  { label: "Learning Approach", value: "Step-by-Step" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto border-t border-[var(--grid-line)]">
      {/* Blueprint Grid Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Editorial Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            01 / About Me
          </div>

          <h2 className="font-sans text-3xl md:text-5xl font-normal tracking-tight leading-tight text-ink">
            Building software with clean, functional design &amp; strong fundamentals.
          </h2>

          <p className="font-sans text-base text-ink/80 leading-relaxed font-normal">
            I&apos;m <strong className="font-medium text-ink">Swayam S Rai</strong>, a developer dedicated to mastering computing fundamentals. I build fullstack web applications, optimize data structures, and craft intuitive user interfaces that balance high-performance backend systems with modern glassmorphism aesthetics.
          </p>

          <p className="font-sans text-sm text-ink/70 leading-relaxed font-normal">
            Whether architecting peer-to-peer skill exchanges, engineering real-time financial tracking tools, or solving algorithmic challenges, my philosophy remains constant: continuous learning in public, broken down step-by-step.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-xs">
                <div className="font-mono text-xl md:text-2xl font-bold text-ink">{stat.value}</div>
                <div className="font-mono text-xs text-ink/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skill Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-sans text-lg font-semibold text-ink mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100/90 text-ink/80 border border-slate-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

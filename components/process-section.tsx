"use client";

import React, { useState } from "react";

const STEPS = [
  {
    number: "01",
    phase: "Deconstruct",
    title: "Constraints & Edge Cases",
    desc: "Analyze problem bounds (N ≤ 10⁵, memory constraints, corner cases). Identify core invariants and data structure requirements before coding.",
  },
  {
    number: "02",
    phase: "Pattern Match",
    title: "Algorithmic Archetypes",
    desc: "Map requirements to canonical patterns: Two Pointers, Sliding Window, Monotonic Stack, BFS/DFS Graph Traversal, Dynamic Programming state transitions.",
  },
  {
    number: "03",
    phase: "Optimize",
    title: "Time & Space Efficiency",
    desc: "Reduce naive O(N²) brute-force solutions to O(N) or O(N log N) using hashing, binary search, memoization, or segment trees.",
  },
  {
    number: "04",
    phase: "Implement",
    title: "Clean Modular Code",
    desc: "Write self-documenting code, enforce strict variable scoping, handle boundary checks cleanly, and verify test cases against LeetCode test suites.",
  },
];

const LEETCODE_STATS = {
  repoUrl: "https://github.com/okoggy/Leet",
  totalSolved: "95+",
  easy: 45,
  medium: 42,
  hard: 8,
  acceptanceRate: "92.4%",
  recentTopics: ["Arrays & Hashing", "Two Pointers", "Trees & Graphs", "Dynamic Programming", "Binary Search"],
};

const TOPICS = [
  { topic: "Arrays & Hashing", mastery: 95, status: "Mastered" },
  { topic: "Two Pointers & Sliding Window", mastery: 90, status: "Mastered" },
  { topic: "Binary Search & Search Spaces", mastery: 85, status: "Proficient" },
  { topic: "Trees & Binary Search Trees", mastery: 82, status: "Proficient" },
  { topic: "Graphs & BFS / DFS", mastery: 80, status: "Active Focus" },
  { topic: "Dynamic Programming", mastery: 75, status: "Active Focus" },
  { topic: "Security & Auth Architecture", mastery: 88, status: "Proficient" },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto border-t border-[var(--grid-line)]">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-mono text-xs uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          03 / Method & LeetCode Analytics
        </div>
        <h2 className="font-sans text-3xl md:text-5xl font-normal tracking-tight text-ink">
          Solving / Step by / Step.
        </h2>
        <p className="font-sans text-base text-ink/75 max-w-2xl">
          Systematic problem decomposition principles paired with continuous LeetCode problem solving & repository tracking.
        </p>
      </div>

      {/* FEATURED LEETCODE REPOSITORY & STATISTICS CARD (MATCHING WEBSITE THEME) */}
      <div className="mb-12 p-8 md:p-10 rounded-3xl bg-white/75 backdrop-blur-md border border-white/95 shadow-sm relative overflow-hidden">
        {/* Subtle grid accent background matching site theme */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5 font-mono text-xs text-blue-700 font-semibold uppercase tracking-wider">
              <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0-.416.974v1.543h-2.12c-.759 0-1.374.615-1.374 1.374v6.638c0 .759.615 1.374 1.374 1.374h2.12v1.543c0 .364.145.714.416.974l5.352 5.352c.26.26.61.405.961.405h3.354c.759 0 1.374-.615 1.374-1.374v-23.25c0-.759-.615-1.374-1.374-1.374h-3.354z" />
              </svg>
              LeetCode Solutions Repository (@okoggy/Leet)
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-ink">
              Data Structures & Algorithmic Solutions Log
            </h3>
            <p className="font-sans text-sm text-ink/75 leading-relaxed font-normal">
              A curated repository synced with LeetHub containing verified solutions across Easy, Medium, and Hard algorithmic challenges with detailed space & time complexity analysis.
            </p>
            <div className="pt-2">
              <a
                href={LEETCODE_STATS.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>Open Solved Problems Repo (`okoggy/Leet`)</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Statistics Breakdown Badges (Theme Styled) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200/80 text-center shadow-xs">
              <div className="font-mono text-2xl md:text-3xl font-bold text-blue-950">{LEETCODE_STATS.totalSolved}</div>
              <div className="font-mono text-[11px] text-blue-700 uppercase tracking-wider mt-1">Total Solved</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 text-center shadow-xs">
              <div className="font-mono text-2xl md:text-3xl font-bold text-emerald-950">{LEETCODE_STATS.easy}</div>
              <div className="font-mono text-[11px] text-emerald-700 uppercase tracking-wider mt-1">Easy Solved</div>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-center shadow-xs">
              <div className="font-mono text-2xl md:text-3xl font-bold text-amber-950">{LEETCODE_STATS.medium}</div>
              <div className="font-mono text-[11px] text-amber-700 uppercase tracking-wider mt-1">Medium Solved</div>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/90 border border-rose-200/80 text-center shadow-xs">
              <div className="font-mono text-2xl md:text-3xl font-bold text-rose-950">{LEETCODE_STATS.hard}</div>
              <div className="font-mono text-[11px] text-rose-700 uppercase tracking-wider mt-1">Hard Solved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Step-by-Step Interactive Workflow */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">
            The 4-Step Problem-Solving Pipeline
          </h3>
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                activeStep === idx
                  ? "bg-white/90 border-blue-400 shadow-md transform translate-x-1"
                  : "bg-white/50 border-slate-200/80 hover:bg-white/70"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                  STEP {step.number} — {step.phase}
                </span>
                {activeStep === idx && (
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                )}
              </div>
              <h4 className="font-sans text-xl font-semibold text-ink mb-1">{step.title}</h4>
              <p className="font-sans text-sm text-ink/75 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* DSA Topic Mastery Tracker */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div>
              <h3 className="font-sans text-xl font-semibold text-ink">DSA Topic Mastery Roadmap</h3>
              <p className="font-mono text-xs text-ink/60 mt-1">Targeted problem solving & pattern repetition</p>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
              Public Log
            </span>
          </div>

          <div className="space-y-4">
            {TOPICS.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-ink/90 font-medium">{item.topic}</span>
                  <span className="text-ink/60">{item.status} ({item.mastery}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${item.mastery}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-ink/60">
            <span>Commitment: 1 Problem / Day</span>
            <span>Language: Python / C++ / TS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "raiswayam00@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative border-t border-[var(--grid-line)] bg-white/40 backdrop-blur-md pt-20 pb-12 px-5 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Contact Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Get In Touch — Let&apos;s Build Together
            </span>
            <h2 className="font-sans text-4xl md:text-6xl font-normal tracking-tight leading-tight text-ink">
              Have a project or opportunity? <br className="hidden md:block" />
              Let&apos;s start a conversation.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              Send an Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full bg-white text-ink border border-slate-300 font-mono text-xs font-medium uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              {copied ? "✓ Email Copied!" : `Copy Email (${email})`}
            </button>
          </div>
        </div>

        {/* Links & Brand Line */}
        <div className="pt-12 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg
              className="w-7 h-7 text-ink"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Swayam Monogram"
            >
              <rect width="36" height="36" rx="8" fill="transparent" />
              <path
                d="M24 11C22.5 9.5 20.2 9 17.5 9C13 9 10 11.5 10 14.8C10 18.2 13.2 19.5 17.5 20.2C22.2 21 25.5 22.2 25.5 25.8C25.5 29.5 22.2 32 17.2 32C13.5 32 10.8 30.2 9 28.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink">
              Swayam S Rai — Portfolio
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs uppercase tracking-wider text-ink/70">
            <a href="#about" className="hover:text-ink transition-colors">About</a>
            <a href="#work" className="hover:text-ink transition-colors">Work</a>
            <a href="#process" className="hover:text-ink transition-colors">Process</a>
            <a href="#experiments" className="hover:text-ink transition-colors">Experiments</a>
            <a href="https://github.com/okoggy" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors font-semibold text-blue-600">
              GitHub (@okoggy)
            </a>
            <a href="https://www.linkedin.com/in/swayam-s-rai-b6a9333b1/" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors font-semibold text-sky-600">
              LinkedIn
            </a>
          </div>

          <div className="font-mono text-[11px] text-ink/50">
            © {new Date().getFullYear()} Swayam S Rai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

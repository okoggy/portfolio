"use client";

import React, { useEffect, useRef } from "react";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

export default function GlassHero() {
  const heroRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const rawPosRef = useRef({ x: -999, y: -999 });
  const smoothPosRef = useRef({ x: -999, y: -999 });
  const currentRadiusRef = useRef(0);
  const targetRadiusRef = useRef(0);
  const isTrackingRef = useRef(false);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const loop = () => {
      const isReduced = mediaQuery.matches;
      const factorPos = isReduced ? 1 : 0.14;
      const factorRadius = isReduced ? 1 : 0.12;

      smoothPosRef.current.x +=
        (rawPosRef.current.x - smoothPosRef.current.x) * factorPos;
      smoothPosRef.current.y +=
        (rawPosRef.current.y - smoothPosRef.current.y) * factorPos;

      currentRadiusRef.current +=
        (targetRadiusRef.current - currentRadiusRef.current) * factorRadius;

      if (targetRadiusRef.current === 0 && currentRadiusRef.current < 0.1) {
        currentRadiusRef.current = 0;
      }

      el.style.setProperty("--reveal-x", `${smoothPosRef.current.x}px`);
      el.style.setProperty("--reveal-y", `${smoothPosRef.current.y}px`);
      el.style.setProperty("--reveal-radius", `${currentRadiusRef.current}px`);

      frameIdRef.current = requestAnimationFrame(loop);
    };

    frameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse") {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      rawPosRef.current = { x, y };
      smoothPosRef.current = { x, y };
      targetRadiusRef.current = DESKTOP_RADIUS;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (e.pointerType === "mouse") {
      rawPosRef.current = { x, y };
      if (targetRadiusRef.current === 0) {
        targetRadiusRef.current = DESKTOP_RADIUS;
      }
    } else if (isTrackingRef.current) {
      rawPosRef.current = { x, y };
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse") {
      targetRadiusRef.current = 0;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") {
      // Don't capture pointer if touch started inside the nav header
      if (headerRef.current?.contains(e.target as Node)) return;
      isTrackingRef.current = true;
      if (heroRef.current && "setPointerCapture" in heroRef.current) {
        try {
          heroRef.current.setPointerCapture(e.pointerId);
        } catch {
          // pointer capture fallback
        }
      }
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      rawPosRef.current = { x, y };
      smoothPosRef.current = { x, y };
      targetRadiusRef.current = MOBILE_RADIUS;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") {
      if (headerRef.current?.contains(e.target as Node)) return;
      targetRadiusRef.current = 0;
      isTrackingRef.current = false;
      if (
        heroRef.current &&
        "hasPointerCapture" in heroRef.current &&
        heroRef.current.hasPointerCapture(e.pointerId)
      ) {
        try {
          heroRef.current.releasePointerCapture(e.pointerId);
        } catch {
          // fallback
        }
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") {
      if (headerRef.current?.contains(e.target as Node)) return;
      targetRadiusRef.current = 0;
      isTrackingRef.current = false;
      if (
        heroRef.current &&
        "hasPointerCapture" in heroRef.current &&
        heroRef.current.hasPointerCapture(e.pointerId)
      ) {
        try {
          heroRef.current.releasePointerCapture(e.pointerId);
        } catch {
          // fallback
        }
      }
    }
  };

  return (
    <section
      ref={heroRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className="relative isolate overflow-hidden min-w-[320px] h-[100dvh] w-full select-none bg-paper touch-pan-y"
      style={{ touchAction: "pan-y" }}
    >
      {/* LAYER 1: Base Portrait */}
      <div
        className="absolute inset-0 bg-hero-base animate-hero-base pointer-events-none"
        aria-hidden="true"
      />

      {/* LAYER 2: Reveal Portrait (Glass mask applied) */}
      <div
        className="absolute inset-0 bg-hero-reveal mask-reveal pointer-events-none"
        aria-hidden="true"
      />

      {/* LAYER 3: Technical Grid + Large Circle */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Desktop Technical Grid (12 cols x 4 rows) */}
        <div className="hidden md:grid grid-cols-12 grid-rows-4 w-full h-full">
          {Array.from({ length: 48 }).map((_, idx) => (
            <div
              key={idx}
              className="border-r border-b border-[var(--grid-line)] first:border-l first:border-t"
            />
          ))}
        </div>

        {/* Mobile Technical Grid (4 cols x 6 rows) */}
        <div className="grid md:hidden grid-cols-4 grid-rows-6 w-full h-full">
          {Array.from({ length: 24 }).map((_, idx) => (
            <div
              key={idx}
              className="border-r border-b border-[var(--grid-line-mobile)]"
            />
          ))}
        </div>

        {/* Large fine-line circle */}
        <div className="absolute rounded-full border border-[rgba(160,190,225,0.45)] pointer-events-none w-[150vw] md:w-[min(78vw,72rem)] aspect-square left-[-76%] md:left-[8%] top-[-8%] md:top-[-36%]" />
      </div>

      {/* LAYER 4: Headline and Copy */}
      {/* 4A: Main Editorial Headline */}
      <div className="absolute z-10 top-[15%] md:top-[34%] left-[max(1.25rem,env(safe-area-inset-left,1.25rem))] md:left-[max(5.6vw,2rem)] w-[62%] md:w-auto max-w-[calc(100vw-2.5rem)]">
        <h1 className="font-sans font-normal tracking-[-0.085em] leading-[0.87] md:leading-[0.93] text-ink text-[clamp(2.7rem,12.5vw,3.8rem)] md:text-[clamp(5.4rem,6.2vw,6.8rem)] break-words">
          <span className="block animate-line-1">Solving /</span>
          <span className="block animate-line-2">Step by /</span>
          <span className="block animate-line-3">Step.</span>
        </h1>
      </div>

      {/* 4B: Bottom-Left Intro Copy & Pill CTA */}
      <div className="absolute z-10 bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] md:bottom-[max(2.5rem,4vh)] left-[max(1.25rem,env(safe-area-inset-left,1.25rem))] md:left-[max(5.6vw,2rem)] max-w-[calc(100%-2.5rem)] md:max-w-sm animate-intro-up">
        <p className="font-sans text-xs sm:text-sm md:text-base font-normal text-ink/85 leading-relaxed">
          I&apos;m a developer sharpening how I think through algorithms and
          data structures, one problem at a time.
        </p>
        <div className="mt-3.5 flex items-center flex-wrap gap-2.5">
          <a
            href="https://github.com/okoggy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-white text-ink shadow-sm hover:bg-slate-50 transition-colors font-mono text-xs font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            GitHub (@okoggy)
          </a>
          <a
            href="https://www.linkedin.com/in/swayam-s-rai-b6a9333b1/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-sky-600 text-white shadow-sm hover:bg-sky-500 transition-colors font-mono text-xs font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* 4C: Right-Side Tagline */}
      <div className="absolute z-10 top-[55%] right-[max(1.25rem,env(safe-area-inset-right,1.25rem))] md:right-[max(5.6vw,2rem)] text-right animate-tagline-up">
        <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/90 shadow-xs inline-block">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-ink font-medium leading-tight">
            LEARNING IN /<br />
            PUBLIC, ONE /<br />
            PROBLEM AT A TIME.
          </p>
        </div>
      </div>

      {/* LAYER 5: Navigation Header */}
      <header ref={headerRef} className="absolute top-0 left-0 right-0 z-20 pt-[max(2.5rem,env(safe-area-inset-top,2.5rem))] px-[max(1.25rem,env(safe-area-inset-left,1.25rem))] md:px-[max(5.6vw,2rem)] animate-nav-down pointer-events-auto">
        <nav
          className="flex items-center justify-between w-full"
          aria-label="Main Navigation"
        >
          {/* Monogram + Name */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/90 shadow-sm">
            <svg
              className="w-6 h-6 text-ink"
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
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
              Swayam S Rai
            </span>
          </div>

          {/* Desktop Nav Links in Glass Pill */}
          <div className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm font-mono text-xs uppercase tracking-wider text-ink font-semibold">
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-full"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-blue-600 transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-full"
            >
              Work
            </a>
            <a
              href="#process"
              className="hover:text-blue-600 transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-full"
            >
              Process
            </a>
            <a
              href="#experiments"
              className="hover:text-blue-600 transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-full"
            >
              Experiments
            </a>
          </div>

          {/* Right White Rounded CTA — scrolls to contact section in footer */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-full bg-white text-ink shadow-sm hover:bg-slate-50 transition-colors font-mono text-xs font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink border border-white/90 cursor-pointer"
          >
            Let&apos;s talk
          </button>
        </nav>
      </header>
    </section>
  );
}

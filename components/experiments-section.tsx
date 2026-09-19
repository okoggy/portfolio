"use client";

import React, { useState } from "react";

export default function ExperimentsSection() {
  // Interactive Array Visualizer State
  const [array, setArray] = useState<number[]>([45, 12, 89, 34, 67, 23, 91, 56, 18, 72]);
  const [isSorting, setIsSorting] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState<number[]>([]);
  const [log, setLog] = useState<string>("Click 'Run Quick-Sort Step' to visually run partition & swap operations.");

  // Simple step-by-step bubble sort for live interactive demonstration
  const runSortStep = async () => {
    if (isSorting) return;
    setIsSorting(true);
    let arr = [...array];
    setLog("Starting interactive array sorting iteration...");

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setHighlightIdx([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          setLog(`Swapped index ${j} (${arr[j+1]}) with index ${j+1} (${arr[j]})`);
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }
    }
    setHighlightIdx([]);
    setLog("Array successfully sorted! Click 'Reset Array' to try again.");
    setIsSorting(false);
  };

  const resetArray = () => {
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 10);
    setArray(newArr);
    setHighlightIdx([]);
    setLog("Array reset to randomized values.");
  };

  return (
    <section id="experiments" className="relative py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto border-t border-[var(--grid-line)]">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-mono text-xs uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          04 / Interactive Experiments
        </div>
        <h2 className="font-sans text-3xl md:text-5xl font-normal tracking-tight text-ink">
          Interactive Sandboxes & Prototypes.
        </h2>
        <p className="font-sans text-base text-ink/75 max-w-2xl">
          Visualizing algorithmic logic and interactive front-end concepts directly in the browser.
        </p>
      </div>

      <div className="p-4 sm:p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-ink">Algorithm Array Partition & Sorting Visualizer</h3>
            <p className="font-mono text-xs text-ink/60 mt-1">Live state mutation & index comparison demo</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={runSortStep}
              disabled={isSorting}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-ink text-white font-mono text-[11px] sm:text-xs font-medium uppercase tracking-wider hover:bg-slate-800 disabled:opacity-50 transition-colors shadow-sm"
            >
              {isSorting ? "Sorting..." : "Run Sort Visualization"}
            </button>
            <button
              onClick={resetArray}
              disabled={isSorting}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-white text-ink border border-slate-200 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-wider hover:bg-slate-50 disabled:opacity-50 transition-colors"
            >
              Reset Array
            </button>
          </div>
        </div>

        {/* Array Bars Visualization */}
        <div className="h-64 flex items-end justify-between sm:justify-center gap-1 sm:gap-3 md:gap-4 px-2 sm:px-6 pb-4 pt-12 bg-slate-900/90 rounded-2xl border border-slate-800 relative overflow-x-auto">
          <div className="absolute top-3 left-3 sm:left-4 font-mono text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest">
            ARRAY_STATE [ {array.length} ELEMENTS ]
          </div>
          {array.map((val, idx) => {
            const isHighlighted = highlightIdx.includes(idx);
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 min-w-[22px] max-w-[45px] transition-all">
                <span className={`font-mono text-[9px] sm:text-[10px] ${isHighlighted ? "text-yellow-400 font-bold" : "text-slate-400"}`}>
                  {val}
                </span>
                <div
                  className={`w-full rounded-t-md transition-all duration-200 ${
                    isHighlighted ? "bg-gradient-to-t from-yellow-400 to-amber-300 shadow-[0_0_12px_rgba(250,204,21,0.5)]" : "bg-gradient-to-t from-blue-600 to-indigo-400"
                  }`}
                  style={{ height: `${val * 2}px` }}
                />
                <span className="font-mono text-[8px] sm:text-[9px] text-slate-500">[{idx}]</span>
              </div>
            );
          })}
        </div>

        {/* Live Execution Console Log */}
        <div className="mt-6 p-4 rounded-xl bg-slate-950 font-mono text-xs text-emerald-400 border border-slate-800 flex items-center gap-3">
          <span className="text-slate-500">$</span>
          <span>{log}</span>
        </div>
      </div>
    </section>
  );
}

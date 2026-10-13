"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { STEPS } from "./data";
import { Kicker, SplitHeading } from "./ui";

function StepCard({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const step = STEPS[i];
  const start = i / STEPS.length;
  // Each card shrinks slightly as the next one stacks on top of it
  const scale = useTransform(progress, [start, 1], [1, 1 - (STEPS.length - i) * 0.04]);
  return (
    <div className={`sticky top-28 flex items-start justify-center md:top-32 ${i === STEPS.length - 1 ? "h-[48vh]" : "h-[70vh]"}`}>
      <motion.div
        style={{ scale, top: `${i * 28}px` }}
        className="relative grid w-full origin-top gap-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-3 to-ink-2 p-8 shadow-2xl shadow-black md:grid-cols-[auto_1fr] md:gap-16 md:p-14"
      >
        <span className="font-display text-[7rem] leading-none text-stroke md:text-[10rem]">0{i + 1}</span>
        <div className="self-center">
          <p className="text-xs font-bold tracking-[0.25em] text-brand uppercase">Step {i + 1} of 4</p>
          <h3 className="mt-3 font-display text-4xl uppercase md:text-6xl">{step.title}</h3>
          <p className="mt-4 max-w-lg text-lg text-zinc-400">{step.text}</p>
        </div>
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand/20 blur-3xl" />
      </motion.div>
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Kicker>How it works</Kicker>
        <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
          <SplitHeading text="From first visit to real results." accent={["real", "results."]} />
        </h2>
        <div ref={ref} className="mt-16">
          {STEPS.map((_, i) => (
            <StepCard key={i} i={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

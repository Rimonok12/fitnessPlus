"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { PLANS } from "./data";
import { Check, Kicker, Magnetic, Reveal, SplitHeading } from "./ui";

function Plan({ p }: { p: (typeof PLANS)[number] }) {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  // Spotlight that follows the cursor across the card
  const bg = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(225,20,30,.18), transparent 70%)`;
  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 md:p-10 ${
        p.hot ? "border-brand bg-gradient-to-b from-brand/15 to-ink-2 lg:-my-4 lg:py-14" : "border-white/10 bg-ink-2"
      }`}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: bg }} />
      {p.hot && <span className="mb-5 w-fit rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-widest uppercase">Most popular</span>}
      <h3 className="font-display text-5xl uppercase">{p.name}</h3>
      <p className="mt-1 text-zinc-400">{p.sub}</p>
      <ul className="my-8 grid gap-3">
        {p.items.map((it) => (
          <li key={it} className="flex items-center gap-3"><Check /> {it}</li>
        ))}
      </ul>
      <Magnetic href="#contact" variant={p.hot ? "solid" : "ghost"} className="relative mt-auto w-full">
        Enquire now
      </Magnetic>
    </motion.div>
  );
}

export default function Membership() {
  return (
    <section id="membership" className="bg-ink-2 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="flex justify-center"><Kicker>Membership</Kicker></div>
          <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
            <SplitHeading text="Pick your plan." accent={["plan."]} />
          </h2>
          <p className="mt-4 text-zinc-400">Monthly, quarterly, half-yearly or yearly. Call for today&apos;s rates.</p>
        </div>
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <Plan p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

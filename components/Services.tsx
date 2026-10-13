"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { SERVICES } from "./data";
import { Kicker, Reveal, SplitHeading } from "./ui";

function Card({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  return (
    <article className="group relative isolate h-[440px] w-full overflow-hidden rounded-3xl bg-ink-3 md:h-[520px] lg:w-[400px] lg:flex-none">
      <Image
        src={s.img}
        alt=""
        fill
        sizes="(min-width:1024px) 400px, 100vw"
        className="-z-20 object-cover grayscale-[40%] transition duration-[1.2s] ease-out group-hover:scale-110 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/40 to-black/95" />
      <span className="absolute top-6 right-6 font-display text-6xl text-stroke-white transition group-hover:text-brand">
        0{i + 1}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-display text-3xl uppercase">{s.title}</h3>
        <p className="mt-2 text-sm text-zinc-300 lg:max-h-0 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-24 lg:group-hover:opacity-100">
          {s.text}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand">
          Learn more <span className="transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </article>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const x = useTransform(smooth, [0, 1], ["0%", "-62%"]);

  return (
    <section id="services" className="bg-ink-2">
      {/* Desktop: vertical scroll drives a horizontal track */}
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-12 flex w-full max-w-7xl items-end justify-between px-8">
            <div>
              <Kicker>What we offer</Kicker>
              <h2 className="font-display text-7xl uppercase">
                <SplitHeading text="Six ways to get better." accent={["better."]} />
              </h2>
            </div>
            <p className="max-w-xs text-zinc-400">Keep scrolling. Every program is built and supervised by certified trainers and physios.</p>
          </div>
          <motion.div style={{ x }} className="flex gap-6 pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {SERVICES.map((s, i) => (
              <Card key={s.title} s={s} i={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile & tablet: simple grid */}
      <div className="px-5 py-28 md:px-8 lg:hidden">
        <Kicker>What we offer</Kicker>
        <h2 className="mb-12 font-display text-5xl uppercase md:text-6xl">
          <SplitHeading text="Six ways to get better." accent={["better."]} />
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.1}>
              <Card s={s} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

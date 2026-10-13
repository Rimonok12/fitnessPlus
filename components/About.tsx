"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CountUp, Kicker, Reveal, SplitHeading } from "./ui";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <Reveal><Kicker>More than a gym</Kicker></Reveal>
          <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
            <SplitHeading text="Health comes first." />
            <SplitHeading text="Everything else follows." className="text-zinc-500" delay={0.2} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg text-zinc-300">
              Fitness Plus makes fitness a practical part of everyday life. Whether you&apos;re 18 or 80, chasing strength
              or recovering from years at a desk, we build a plan around your lifestyle, your medical history and your goals.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Fitness Plus", "A state-of-the-art fitness dojo with dedicated men's and ladies' gym floors."],
              ["Fit Revolution", "Custom fitness and recovery programs for slimming, obesity, posture and seniors."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={0.15 + i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-ink-2 p-6 transition duration-500 hover:-translate-y-1 hover:border-brand/50">
                  <h3 className="text-lg font-bold">
                    {t} <span className="inline-block text-brand transition group-hover:translate-x-1">→</span>
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0 round 24px)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0 round 24px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <motion.div style={{ y }} className="absolute -inset-[10%]">
              <Image src="/images/time-for-me-time.jpeg" alt="Member training at Fitness Plus" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.6 }}
            className="absolute -bottom-8 left-4 max-w-[230px] rounded-2xl bg-brand p-6 shadow-2xl shadow-black/60 md:-left-10"
          >
            <CountUp to={60} suffix="%" className="font-display text-6xl leading-none" />
            <p className="mt-2 text-sm">of our members are seniors. Fitness for every age.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

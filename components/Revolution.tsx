"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CountUp, Kicker, Reveal, SplitHeading } from "./ui";

export default function Revolution() {
  return (
    <section id="revolution" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute top-1/2 -left-40 -z-10 size-[600px] -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 80 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 70, damping: 16 }}
          className="relative order-2 mx-auto aspect-[1132/1600] w-full max-w-md overflow-hidden rounded-3xl shadow-[0_50px_100px_-30px_rgba(225,20,30,.5)] lg:order-1"
        >
          <Image src="/images/fit-revolution-body-mesurement-report.jpeg" alt="BCA body composition report" fill sizes="(min-width:1024px) 450px, 100vw" className="object-cover" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <Reveal><Kicker>Fit Revolution</Kicker></Reveal>
          <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
            <SplitHeading text="Not another bodybuilding gym." accent={["bodybuilding"]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg text-zinc-300">
              Traditional gyms are built for bodybuilders. Fit Revolution is built for city life: the long commutes, the
              desk hours, the stress. Our programs target what actually holds Dhaka back, which is weight, posture and recovery.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
              {[
                [<CountUp key="a" to={60} suffix="%" />, "senior members"],
                [<CountUp key="b" to={4} />, "specialised programs"],
                ["Physio", "doctors on-site"],
                [<CountUp key="c" to={0} />, "supplements used"],
              ].map(([k, v], i) => (
                <div key={i} className="bg-ink-2 p-7 transition hover:bg-ink-3">
                  <dt className="font-display text-5xl">{k}</dt>
                  <dd className="mt-1 text-sm text-zinc-400">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

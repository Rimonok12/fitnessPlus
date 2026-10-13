"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, Magnetic } from "./ui";

export default function Corporate() {
  return (
    <section id="corporate" className="px-5 py-10 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="grain relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-[#b80f18] to-[#4d0509] lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="relative z-10 p-8 md:p-16">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase">
            <span className="h-px w-8 bg-white" /> Corporate Wellness
          </p>
          <h2 className="font-display text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.95] uppercase">
            Healthier teams.
            <br />
            Better business.
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/90">
            We rent equipment or run your entire in-office wellness centre, starting from just <b>300 sq ft</b> of free space.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Higher productivity", "Lower absenteeism", "Reduced health risks", "Stronger retention"].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 font-medium"
              >
                <Check light /> {t}
              </motion.li>
            ))}
          </ul>
          <div className="mt-10">
            <Magnetic href="#contact" variant="white">Get a corporate package →</Magnetic>
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <Image src="/images/healthy-executive-corporate-wellness.jpeg" alt="Corporate wellness program" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b80f18] via-transparent to-transparent max-lg:bg-gradient-to-b" />
        </div>
      </motion.div>
    </section>
  );
}

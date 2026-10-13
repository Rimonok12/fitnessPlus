"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Magnetic, WhatsAppIcon } from "./ui";
import { WHATSAPP } from "./data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const line = (text: string, delay: number, red = false) => (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay }}
        className={`block ${red ? "text-brand" : ""}`}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section id="top" ref={ref} className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 md:items-center md:pb-0">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-20">
        <Image src="/images/image-with-trademill.jpeg" alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(225,20,30,.45),transparent_55%),linear-gradient(90deg,#070708_10%,rgba(7,7,8,.85)_50%,rgba(7,7,8,.4)),linear-gradient(0deg,#070708,transparent_40%)]" />

      <motion.div style={{ y: textY, opacity: fade }} className="mx-auto w-full max-w-7xl px-5 pt-32 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-md md:text-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Gulshan 2 · Open 6 AM – Midnight, 365 days
        </motion.p>

        <h1 className="mt-6 font-display text-[clamp(3.6rem,12vw,10.5rem)] leading-[0.92] uppercase">
          {line("The art of", 0.2)}
          {line("good life.", 0.35, true)}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-6 max-w-xl text-base text-zinc-300 md:text-xl"
        >
          Dhaka&apos;s premium wellness gym, with a separate ladies&apos; gym, an in-house physiotherapist and
          science-backed programs built around <em className="text-white">your</em> body.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Magnetic href="#contact">Book a free consultation →</Magnetic>
          <Magnetic href={WHATSAPP} variant="ghost">
            <WhatsAppIcon /> WhatsApp us
          </Magnetic>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, delayChildren: 1.05 }}
          className="mt-14 grid w-fit grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] backdrop-blur-md md:grid-cols-4"
        >
          {[
            ["10,800", "sq ft flagship"],
            ["Physio", "doctor on-site"],
            ["0", "supplements pushed"],
            ["Ladies", "only gym floor"],
          ].map(([k, v]) => (
            <motion.div
              key={v}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="border-white/10 px-6 py-4 not-last:border-r max-md:nth-[2]:border-r-0 max-md:nth-[-n+2]:border-b md:px-8"
            >
              <dt className="font-display text-2xl md:text-3xl">{k}</dt>
              <dd className="text-xs text-zinc-400">{v}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute right-8 bottom-10 hidden items-center gap-3 text-xs tracking-[0.3em] text-zinc-400 uppercase md:flex [writing-mode:vertical-rl]"
      >
        Scroll
        <span className="relative h-16 w-px overflow-hidden bg-white/20">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand"
          />
        </span>
      </motion.div>
    </section>
  );
}

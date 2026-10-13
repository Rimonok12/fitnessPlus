"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EMAIL, PHONE, WHATSAPP } from "./data";
import { Kicker, Reveal, SplitHeading, WhatsAppIcon } from "./ui";

const SERVICE_OPTIONS = ["Men's Gym", "Ladies' Gym", "Slimming & Shaping", "Obesity Management", "Fitness for Seniors", "Postural Fitness", "Corporate Wellness"];
const field = "w-full rounded-xl border border-white/10 bg-ink-3 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-brand focus:ring-4 focus:ring-brand/15";

export function Contact() {
  return (
    <section id="contact" className="bg-ink-2 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <Kicker>Start your journey</Kicker>
          <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
            <SplitHeading text="Your first consultation is free." accent={["free."]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-zinc-300">Tell us a little about yourself and we&apos;ll call you back, or just message us on WhatsApp.</p>
            <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {[
                ["Phone", <a key="p" href="tel:+8801748928540" className="hover:text-brand">{PHONE}</a>],
                ["WhatsApp", <a key="w" href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-brand">+880 1748-928540</a>],
                ["Email", <a key="e" href={`mailto:${EMAIL}`} className="hover:text-brand">{EMAIL}</a>],
                ["Hours", "6 AM – Midnight, every day"],
              ].map(([k, v], i) => (
                <div key={i} className="flex flex-wrap justify-between gap-2 py-5">
                  <dt className="text-zinc-500">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const text = `Hi Fitness Plus! I'd like a free consultation.\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nInterested in: ${f.get("service")}\n${f.get("message") || ""}`;
              window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
            }}
            className="grid gap-5 rounded-3xl border border-white/10 bg-ink p-7 md:p-10"
          >
            <label className="grid gap-2 text-sm font-semibold text-zinc-300">Name<input name="name" required placeholder="Your full name" className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-300">Phone<input name="phone" type="tel" required placeholder="01XXXXXXXXX" className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-300">
              I&apos;m interested in
              <select name="service" className={field}>{SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}</select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-300">Message<textarea name="message" rows={3} placeholder="Goals, injuries, best time to call…" className={field} /></label>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand py-4 font-bold shadow-[0_20px_50px_-15px_rgba(225,20,30,.8)]">
              <WhatsAppIcon /> Send via WhatsApp
            </motion.button>
            <p className="text-center text-xs text-zinc-500">Opens WhatsApp with your details filled in.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-10">
          <div className="relative h-14 w-56"><Image src="/images/logo-wide.png" alt="Fitness Plus" fill sizes="224px" className="object-contain object-left" /></div>
          <p className="text-sm text-zinc-400">House 7A, Road 41, Gulshan 2, Dhaka 1212 · {PHONE} · {EMAIL}</p>
        </div>
        <motion.p
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center font-display text-[17vw] leading-[0.85] text-stroke-white uppercase select-none"
        >
          Fitness Plus
        </motion.p>
        <p className="mt-8 text-center text-xs text-zinc-500">
          © 2026 Fitness Plus · Concept redesign by Rimon Debnath
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1, rotate: 8 }}
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_15px_35px_-8px_rgba(37,211,102,.7)]"
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}

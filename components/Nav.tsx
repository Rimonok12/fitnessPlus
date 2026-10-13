"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { NAV } from "./data";

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setSolid(y > 30);
  });

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand" />
      <motion.header
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="bg-white px-4 py-1.5 text-center text-[11px] text-black md:text-xs">
          Design concept by <b>Rimon Debnath</b>: a proposed redesign of fitnessplus.club. Not the official website.
        </div>
        <div className="px-4 pt-3 md:px-6">
        <div
          className={`mx-auto flex max-w-7xl items-center gap-6 rounded-2xl border px-4 py-2 transition-all duration-500 md:px-6 ${
            solid ? "border-white/10 bg-black/60 backdrop-blur-xl" : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="relative h-9 w-36 flex-none md:h-11 md:w-44">
            <Image src="/images/logo-wide.png" alt="Fitness Plus" fill sizes="176px" className="object-contain object-left" priority />
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:text-white">
                <span className="absolute inset-0 scale-75 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
                <span className="relative">{n.label}</span>
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-bold transition hover:bg-brand-dark md:inline-flex lg:ml-2">
            Free Consultation
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="ml-auto grid size-11 place-items-center rounded-full bg-white/10 md:ml-0 lg:hidden">
            <span className="relative block h-3 w-5">
              <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="absolute top-0 left-0 h-0.5 w-5 bg-white" />
              <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="absolute bottom-0 left-0 h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ink px-8 lg:hidden"
          >
            {[...NAV, { href: "#contact", label: "Contact" }].map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="font-display text-5xl uppercase hover:text-brand"
              >
                {n.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "motion/react";

const ITEMS = ["Corporate class gym", "In-house physiotherapist", "Independent female gym", "BCA body analysis", "Car parking", "Senior fitness"];

function Row({ reverse = false, className = "" }: { reverse?: boolean; className?: string }) {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className={`flex overflow-hidden py-4 ${className}`}>
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex flex-none gap-8 pr-8 font-display text-2xl whitespace-nowrap uppercase md:text-3xl"
      >
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <span className="opacity-50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative z-10 -my-6 overflow-hidden py-6" aria-hidden="true">
      <Row className="-mx-4 -rotate-2 bg-brand" />
      <Row reverse className="-mx-4 -mt-14 rotate-1 bg-white text-black opacity-90 max-md:hidden" />
    </div>
  );
}

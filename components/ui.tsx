"use client";

import { animate, motion, MotionConfig, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise into view once. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Headline whose words slide up from behind a mask, one after another. */
export function SplitHeading({ text, className = "", accent = [] as string[], delay = 0 }: { text: string; className?: string; accent?: string[]; delay?: number }) {
  return (
    <motion.span
      className={`block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${accent.includes(word) ? "text-brand" : ""}`}
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-brand uppercase">
      <span className="h-px w-8 bg-brand" />
      {children}
    </p>
  );
}

/** Button that is gently pulled toward the cursor. */
export function Magnetic({ children, href, variant = "solid", className = "" }: { children: ReactNode; href: string; variant?: "solid" | "ghost" | "white"; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const styles = {
    solid: "bg-brand text-white shadow-[0_20px_50px_-15px_rgba(225,20,30,.8)] hover:bg-brand-dark",
    ghost: "border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white hover:text-black",
    white: "bg-white text-black hover:bg-black hover:text-white",
  }[variant];
  const external = href.startsWith("http");
  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}

/** Number that counts up when scrolled into view. */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => (el.textContent = Math.round(v).toLocaleString() + suffix),
    });
    return () => controls.stop();
  }, [inView, to, suffix]);
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export function Check({ light = false }: { light?: boolean }) {
  return (
    <span className={`grid size-6 flex-none place-items-center rounded-full text-[11px] font-black ${light ? "bg-white text-brand" : "bg-brand/15 text-brand"}`}>
      ✓
    </span>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.4-.9-2.8-1.2-4.6-4.1-4.8-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

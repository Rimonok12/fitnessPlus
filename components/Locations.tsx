"use client";

import { Kicker, Reveal, SplitHeading } from "./ui";

const LOCS = [
  {
    pill: "Open now", live: true, name: "Gulshan Branch",
    text: "House 7A, Road No 41, Gulshan 2, Dhaka 1212",
    stats: [["7,500", "sq ft"], ["21", "staff"], ["270+", "members"]],
    link: { href: "https://maps.google.com/?q=House+7A+Road+41+Gulshan+2+Dhaka", label: "Get directions" },
  },
  {
    pill: "Coming soon · Flagship", live: false, name: "Gulshan 1",
    text: "6 AM – 12 AM daily. Late-hour access by appointment with the branch manager.",
    stats: [["10,800", "sq ft"], ["24", "staff"], ["320+", "members"]],
    link: { href: "#contact", label: "Register interest" },
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker>Visit us</Kicker>
        <h2 className="mb-14 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
          <SplitHeading text="Two homes in Gulshan." accent={["Gulshan."]} />
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {LOCS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <div className={`group h-full rounded-3xl border border-white/10 p-8 transition duration-500 hover:border-brand/50 md:p-10 ${l.live ? "bg-ink-2" : "bg-[radial-gradient(ellipse_at_100%_0%,rgba(225,20,30,.25),transparent_60%)] bg-ink-2"}`}>
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase ${l.live ? "bg-emerald-500/10 text-emerald-400" : "bg-brand/15 text-red-400"}`}>
                  {l.live && <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />}
                  {l.pill}
                </span>
                <h3 className="mt-5 font-display text-5xl uppercase">{l.name}</h3>
                <p className="mt-2 text-zinc-400">{l.text}</p>
                <dl className="my-8 flex gap-10 border-y border-white/10 py-6">
                  {l.stats.map(([k, v]) => (
                    <div key={v}>
                      <dt className="font-display text-3xl">{k}</dt>
                      <dd className="text-xs text-zinc-500">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a href={l.link.href} target={l.link.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="inline-flex items-center gap-2 font-bold text-brand">
                  {l.link.label} <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

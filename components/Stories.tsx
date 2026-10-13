"use client";

import Image from "next/image";
import { CountUp, Kicker, Reveal, SplitHeading } from "./ui";

export default function Stories() {
  return (
    <section id="stories" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker>Success stories</Kicker>
        <h2 className="mb-14 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] uppercase">
          <SplitHeading text="Real members. Real change." accent={["change."]} />
        </h2>

        <div className="grid gap-5 md:grid-cols-6">
          <Reveal className="md:col-span-3">
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-2 p-8 md:p-10">
              <div className="flex items-baseline gap-4 font-display text-6xl md:text-7xl">
                <span>107<small className="ml-1 font-sans text-base text-zinc-500">kg</small></span>
                <span className="text-3xl text-zinc-600">→</span>
                <span className="text-brand"><CountUp to={80} /><small className="ml-1 font-sans text-base text-zinc-500">kg</small></span>
              </div>
              <p className="mt-6 text-xl">&ldquo;Eight months of the obesity management program changed my life.&rdquo;</p>
              <p className="mt-auto pt-8 text-sm text-zinc-400"><b className="text-white">Fayaz Khan</b>, 18 · Obesity Management</p>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-2 p-8 md:p-10">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl text-brand md:text-7xl"><CountUp to={3} /></span>
                <span className="text-zinc-400">months to a pain-free back</span>
              </div>
              <p className="mt-6 text-xl">&ldquo;Years of chronic back pain, gone with Dr. Pijush&apos;s postural fitness plan.&rdquo;</p>
              <p className="mt-auto pt-8 text-sm text-zinc-400"><b className="text-white">Nazmul Hossain</b>, 42 · HR Manager at an MNC</p>
            </article>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-4">
            <article className="flex h-full flex-col rounded-3xl bg-brand p-8 md:p-10">
              <span className="font-display text-8xl leading-[0.6]">&ldquo;</span>
              <p className="mt-4 text-xl md:text-2xl">
                The Australian-certified instructor, ergonomic equipment and personal assessments made a real difference to
                my diabetes and blood pressure.
              </p>
              <p className="mt-auto pt-8 text-sm"><b>Banani resident</b> · Member</p>
            </article>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <article className="group relative h-full min-h-[380px] overflow-hidden rounded-3xl">
              <Image src="/images/baraster.jpg" alt="Barrister Shameem Haider Patwary" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-lg">&ldquo;An honourable member of Fitness Plus.&rdquo;</p>
                <p className="mt-2 text-sm text-zinc-300"><b className="text-white">Barrister Shameem Haider Patwary</b> · Lawyer</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

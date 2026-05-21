import { ArrowUpRight, ArrowLeft } from "lucide-react";

/**
 * Backends Apparel — Case Study Page
 *
 * Drop this into src/pages/ (or wherever your routes live).
 *
 * To complete:
 *  1. Swap the placeholder image divs for real <img /> tags
 *  2. Fill in the {/* REPLACE: ... *\/} blocks with your real copy.
 *  3. Update typography + color values in the Design System section
 *  4. Wire up your existing Nav component at the top.
 *
 * Note: this version uses CORE Tailwind classes so it renders in preview.
 * When you integrate into your own site, feel free to swap in arbitrary
 * values (bg-[#0a0a0a], text-[#a78bfa], etc.) to match your exact palette.
 */

export default function Backends() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Back link */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition mb-20"
        >
          <ArrowLeft size={14} /> back to projects
        </a>

        {/* ───────────── HERO ───────────── */}
        <section className="mb-32">
          <p className="text-violet-400 text-sm font-mono mb-6">.case study</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-none">
            backends apparel
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
            A developer-culture streetwear brand, designed and built end-to-end. Brand identity, storefront, and the bridge between them.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">role</p>
              <p className="text-sm">design + build</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">year</p>
              <p className="text-sm">2025</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">stack</p>
              <p className="text-sm">React, Tailwind, Vite</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">live</p>
              <a
                href="https://backendsapparel.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-1 hover:text-violet-400 transition"
              >
                visit site <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* ───────────── PROBLEM ───────────── */}
        <section className="mb-32">
          <p className="text-violet-400 text-sm font-mono mb-6">.the problem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight">
            A developer-culture brand without a developer-culture experience.
          </h2>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
            {/* REPLACE: 2-3 sentences. What state was Backends in when you came on?
               What was missing? What did the client actually need to ship? */}
            Backends came in with a clear vision and a community to sell to, but no cohesive identity and no real storefront. The existing site didn't reflect the brand's energy, and there was no infrastructure for actually selling product. The job was to build the visual identity and the experience from the ground up.
          </p>
        </section>

        {/* ───────────── BEFORE ───────────── */}
        <section className="mb-32">
          <p className="text-violet-400 text-sm font-mono mb-6">.before</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">where we started.</h2>

          {/* SWAP THIS DIV FOR:
              <img src="/case-studies/backends/before.png" alt="Original Backends site" className="w-full rounded-2xl border border-white/10" />
          */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 mb-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/50 font-mono text-sm">before.png</p>
              <p className="text-white/30 text-xs mt-2">screenshot of the original site goes here</p>
            </div>
          </div>

          <p className="text-white/60 max-w-3xl leading-relaxed">
            {/* REPLACE: 2-3 sentences. Be specific about what wasn't working. */}
            Functional but flat. Default fonts, no clear hierarchy, no real connection between the brand promise and what visitors saw. There was nothing about it that said "for developers, by developers."
          </p>
        </section>

        {/* ───────────── PROCESS ───────────── */}
        <section className="mb-32">
          <p className="text-violet-400 text-sm font-mono mb-6">.process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight">
            Designed in Figma. Refined in code.
          </h2>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed mb-12">
            {/* REPLACE: 2-3 sentences on your approach. */}
            Started in Figma with brand exploration: tone, type, color. Then mocked the full site flow before touching code. Once the direction landed, moved to React and refined the details that only show up once it's real.
          </p>

          {/* SWAP FOR: <img src="/case-studies/backends/figma-mockup.png" ... /> */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/50 font-mono text-sm">figma-mockup.png</p>
              <p className="text-white/30 text-xs mt-2">drop in your Figma mockup</p>
            </div>
          </div>
        </section>

        {/* ───────────── DESIGN SYSTEM ───────────── */}
        <section className="mb-32">
          <p className="text-violet-400 text-sm font-mono mb-6">.design system</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">key decisions.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Typography card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-6">typography</p>
              <p className="text-5xl font-extrabold mb-3 tracking-tight">backend$</p>
              <p className="text-xs text-white/40 mb-6 font-mono">
                {/* REPLACE: actual font name(s) */}
                display: [Your Display Font] · body: [Your Body Font]
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {/* REPLACE: why this typeface? */}
                Heavy display weight with a hand-drawn edge: street feel without losing legibility. Pairs with a clean sans for product copy that keeps the technical, developer-leaning side of the brand on screen.
              </p>
            </div>

            {/* Color card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-6">color</p>
              <div className="flex gap-2 mb-6">
                {/* REPLACE with your actual palette */}
                <div className="flex-1 aspect-square rounded-xl bg-black border border-white/10" />
                <div className="flex-1 aspect-square rounded-xl bg-neutral-100" />
                <div className="flex-1 aspect-square rounded-xl bg-red-950" />
                <div className="flex-1 aspect-square rounded-xl bg-neutral-900" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {/* REPLACE: why this palette? */}
                Black-dominant with off-white type and a single deep accent. Keeps product photography in focus and gives the brand a confident, almost editorial tone that fits streetwear's monochrome roots.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── RESULT ───────────── */}
        <section className="mb-32">
          <p className="text-violet-400 text-sm font-mono mb-6">.result</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-3xl leading-tight">
            A storefront that finally fit the brand.
          </h2>

          {/* SWAP FOR an <img /> or a grid of screenshots of the live site */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center mb-10">
            <div className="text-center">
              <p className="text-white/50 font-mono text-sm">final-site.png</p>
              <p className="text-white/30 text-xs mt-2">screenshots of the live site</p>
            </div>
          </div>

          <a
            href="https://www.backendsapparel.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-white/20 hover:border-white/60 hover:bg-white/5 transition px-6 py-3 rounded-full"
          >
            visit live site <ArrowUpRight size={14} />
          </a>
        </section>

        {/* ───────────── REFLECTION ───────────── */}
        <section className="mb-16">
          <p className="text-violet-400 text-sm font-mono mb-6">.what i'd iterate on</p>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
            {/* REPLACE: 2-3 honest sentences on what you'd improve. */}
            Next iteration, I'd build out a proper drop-launch flow so new releases feel like events rather than catalog updates. I'd also tighten checkout and add stronger product filtering, since both could carry more of the brand voice than they do today.
          </p>
        </section>

        {/* Footer back link */}
        <div className="pt-10 border-t border-white/10">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition"
          >
            <ArrowLeft size={14} /> back to projects
          </a>
        </div>

      </main>
    </div>
  );
}
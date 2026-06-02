import { ArrowUpRight, ArrowLeft } from "lucide-react";
import backendsBefore from '../../assets/backends_before.png';
import figmaMockup from '../../assets/figma-mockup.gif';
import backendsAfter from '../../assets/backends_after.gif';
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
          <p className="text-primary text-sm font-mono mb-6">.case study</p>
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
                className="text-sm inline-flex items-center gap-1 hover:text-primary transition"
              >
                visit site <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* ───────────── PROBLEM ───────────── */}
        <section className="mb-32">
          <p className="text-primary text-sm font-mono mb-6">.the problem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight">
            a brand without a storefront.
          </h2>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
            Backends came in as a first client with a real brand, a community behind it, and a site that technically existed — but couldn't actually sell anything. Shop integration was broken, purchases couldn't go through, and the site itself had no real identity. The job wasn't just a redesign — it was building a functional storefront along with redesign.
          </p>
        </section>

        {/* ───────────── BEFORE ───────────── */}
        <section className="mb-32">
          <p className="text-primary text-sm font-mono mb-6">.before</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">where we started.</h2>

          
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 mb-8 aspect-video flex items-center justify-center">
            <img src={backendsBefore} alt="Original Backends Site" className="w-full rounded-2xl border border-white/10" />
          </div>

          <p className="text-white/60 max-w-full leading-relaxed">
            Backends came in with a working site on the surface — but underneath, customers couldn't complete purchases.  It looked like a placeholder, not a store.
          </p>
        </section>

        {/* ───────────── PROCESS ───────────── */}
        <section className="mb-32">
          <p className="text-primary text-sm font-mono mb-6">.process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight">
            designed in figma. refined in code.
          </h2>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed mb-12">
            Started in Figma with brand exploration: tone, type, color. Then mocked the full site flow before touching code. Once the direction landed, moved to React and refined the details that only show up once it's real.
          </p>

          {/* SWAP FOR: <img src="/case-studies/backends/figma-mockup.png" ... /> */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center">
            <img src={figmaMockup} alt="Backends Figma Mockup" className="w-full rounded-2xl border border-white/10" />
          </div>
        </section>

        {/* ───────────── DESIGN SYSTEM ───────────── */}
        <section className="mb-32">
          <p className="text-primary text-sm font-mono mb-6">.design system</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">key decisions.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Typography card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-6">typography</p>
              <p className="text-5xl font-comic font-extrabold mb-3 tracking-tight">backend$</p>
              <p className="text-xs text-white/40 mb-6 font-mono">
                display: [Comic Neue] · body: [Comic Neue]
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                The client had a clear direction for the type from the start. It carries the brand's identity while staying legible across their website.
              </p>
            </div>

            {/* Color card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-6">color</p>
              <div className="flex gap-2 mb-6">
                <div className="flex-1 aspect-square rounded-xl bg-black border border-white/30" />
                <div className="flex-1 aspect-square rounded-xl bg-neutral-100 border border-white/30" />
                <div className="flex-1 aspect-square rounded-xl bg-red-600 border border-white/30" />
                <div className="flex-1 aspect-square rounded-xl bg-neutral-900 border border-white/30" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Two modes, same contrast-first approach. Light mode runs white, red, and black — clean and direct. Dark mode shifts to black, zinc, and grey. Both keep the focus on the product without anything competing for attention.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── RESULT ───────────── */}
        <section className="mb-32">
          <p className="text-primary text-sm font-mono mb-6">.result</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-3xl leading-tight">
            shipped, functional, and finally on brand.
          </h2>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center mb-10">
            <img src={backendsAfter} alt="Backends Official Store" className="w-full rounded-2xl border border-white/10"/>
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
          <p className="text-primary text-sm font-mono mb-6">.what i'd iterate on</p>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
            Looking back, I'd lean harder into established design principles — more intentional card layouts, better shadow work, and a tighter color system. Less color overall would've made the experience feel more fluid. I'd also organize the design phase more deliberately before touching code; cleaner foundations produce cleaner results. This was one of my earlier projects, and seeing how much my instincts have developed since then makes it clear what I'd do differently if I took another pass at it.
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
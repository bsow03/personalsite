import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { sections } from "../../data/jobHunterCaseStudy";

function renderParagraphs(paragraphs) {
  return paragraphs.flatMap((block) =>
    block
      .trim()
      .split(/\n\s*\n/)
      .map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 20)}-${index}`}>
          {paragraph.trim()}
        </p>
      ))
  );
}

function CaseStudySection({ section }) {
  return (
    <section className="mb-32">
      <p className="text-primary text-sm font-mono mb-6">
        {section.label}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight">
        {section.title}
      </h2>

      <div className="text-lg text-white/60 max-w-3xl leading-relaxed space-y-6">
        {renderParagraphs(section.paragraphs)}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="my-16">
      <p className="text-primary text-sm font-mono mb-6">
        .how it works
      </p>

      <div className="flex justify-center">
        <div className="w-fit border border-white/10 rounded-2xl overflow-hidden bg-white/5">
          <img
            src="/src/assets/jobhunter_flow.png"
            alt="JobHunter workflow from job posting to interview preparation"
            className="block w-[600px] max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default function JobHunter() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Back link */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition mb-20"
        >
          <ArrowLeft size={14} />
          back to projects
        </a>

        {/* ───────────── HERO ───────────── */}
        <section className="mb-32">
          <p className="text-primary text-sm font-mono mb-6">
            .case study
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-none">
            job hunter
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
            your job search, finally organized.
          </p>

          {/* Hero image */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 my-12 aspect-video flex items-center justify-center">
            <div className="text-white/20 text-sm font-mono">
              job hunter preview
            </div>
          </div>

          {/* Project metadata */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-10 border-t border-white/10">

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                role
              </p>
              <p className="text-sm">
                design + development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                status
              </p>
              <p className="text-sm">
                actively developing
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                stack
              </p>
              <p className="text-sm">
                React, Vite, Tailwind, CRXJS
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                ai
              </p>
              <p className="text-sm">
                Groq / GPT-OSS
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">live</p>
              <a
                href="https://chromewebstore.google.com/detail/job-hunter/jlnhedkbdmnnglfjihhhbahceodgnflp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-1 hover:text-primary transition"
              >
                visit site <ArrowUpRight size={12} />
              </a>
            </div>

          </div>
        </section>

        {/* ───────────── DYNAMIC CASE STUDY ───────────── */}

        {sections.map((section) => (
          <div key={section.id}>

            <CaseStudySection section={section} />


            {/* Engineering visual / architecture area */}
            {section.id === "engineering" && (
              <section className="mb-32 -mt-16">
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
                      architecture
                    </p>

                    <p className="text-2xl font-bold mb-4">
                      local-first by design.
                    </p>

                    <p className="text-white/60 text-sm leading-relaxed">
                      Application data stays inside Chrome storage rather than
                      being pushed to a separate backend.
                    </p>
                  </div>

                  <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
                      browser
                    </p>

                    <p className="text-2xl font-bold mb-4">
                      built where the job search happens.
                    </p>

                    <p className="text-white/60 text-sm leading-relaxed">
                      JobHunter runs directly in the browser, allowing it to
                      read job pages, save applications, and surface useful
                      information without requiring a separate dashboard.
                    </p>
                  </div>
                </div>

                <HowItWorks />

              </section>
            )}

            {/* Product walkthrough */}
            {section.id === "product" && (
              <section className="mb-32 -mt-16">
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center">
                  <div className="text-white/20 text-sm font-mono">
                    job hunter product walkthrough
                  </div>
                </div>
              </section>
            )}

            {/* Current product / final preview */}
            {section.id === "current" && (
              <section className="mb-32 -mt-16">
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center">
                  <div className="text-white/20 text-sm font-mono">
                    current JobHunter build
                  </div>
                </div>
              </section>
            )}

          </div>
        ))}

        {/* ───────────── FOOTER ───────────── */}
        <div className="pt-10 border-t border-white/10">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition"
          >
            <ArrowLeft size={14} />
            back to projects
          </a>
        </div>

      </main>
    </div>
  );
}
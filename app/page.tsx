import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";
import { InstructorBlock } from "@/components/InstructorBlock";
import Link from "next/link";

const rules = [
  { k: "Baseline-first", v: "If you can’t beat a baseline, stop and diagnose." },
  { k: "Leakage-zero", v: "Any past/future contamination is a scientific error." },
  { k: "Stress-test", v: "Extremes matter more than averages." },
  { k: "Explainability → Action", v: "Explain why/when-break/what-next." },
  { k: "Reproducibility", v: "One-click reruns, clear reporting, honest limits." },
];

export default function HomePage() {
  return (
    <main>
      <div className="bg-navy text-white">
        <Container>
          <div className="py-12 md:py-16">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Badge tone="teal">Project-based</Badge>
                <Badge tone="amber">No exams</Badge>
                <Badge tone="sky">Explainability-first</Badge>
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight">
                GENIUS Office: Environmental AI Studio I
              </h1>

              <p className="mt-4 text-lg text-white/80">
                This is not a trendy ML course. It’s a virtual research studio where
                environmental data becomes decision-ready evidence: <strong>Dataset Cards</strong>,
                <strong>Baseline Reports</strong>, <strong>Explainability Packs</strong>, and a <strong>poster</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#case-files"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy hover:bg-slate-200"
                >
                  Explore Case Files →
                </Link>
                <Link
                  href="#missions"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Weekly Studio Missions →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="bg-slate-50 py-16 text-ink" id="mission-control">
        <Container>
          <SectionTitle
            subtitle="MISSION CONTROL"
            title="We train decision scientists — not model worshippers."
          />
          <p className="mt-2 text-lg text-ink/80 max-w-3xl">
            Every project must pass baseline, leakage, stress, and explainability gates
            before it is considered successful.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Studio Rules */}
            <Card>
              <CardHeader title="Studio Rules" subtitle="(non-negotiable)" />
              <CardBody>
                <p className="text-sm text-ink/70">
                  Your Trust Score depends on these.
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {rules.map(({ k, v }) => (
                    <li key={k}>
                      <span className="font-semibold">{k}: </span>
                      {v}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader title="Instructor" subtitle="Course leadership" />
              <CardBody>
                <div className="space-y-4 text-sm">
                  <InstructorBlock />

                  <div className="rounded-xl bg-muted p-4 text-ink/80">
                    <div className="font-semibold">
                      What makes this course different?
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>We grade scientific reasoning and honesty, not code style.</li>
                      <li>We require explainability that leads to actions.</li>
                      <li>
                        Every team finishes with a poster and reusable research assets.
                      </li>
                    </ul>
                  </div>

                  <div className="text-xs text-ink/60">
                    Lab website:{" "}
                    <a
                      href="https://genius.ulsan.ac.kr/home"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-ink"
                    >
                      genius.ulsan.ac.kr
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}

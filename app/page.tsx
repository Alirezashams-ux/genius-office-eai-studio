import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";
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
                GENIUS Office: <span className="text-white/90">Environmental AI Studio I</span>
              </h1>
              <p className="mt-3 text-white/80">
                This is not a trendy ML course. It’s a virtual research studio where environmental data becomes
                decision-ready evidence: <span className="font-semibold text-white">Dataset Cards</span>,{" "}
                <span className="font-semibold text-white">Baseline Reports</span>,{" "}
                <span className="font-semibold text-white">Explainability Packs</span>, and a{" "}
                <span className="font-semibold text-white">poster</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/case-files" className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-navy no-underline">
                  Explore Case Files →
                </Link>
                <Link href="/studio" className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold text-white no-underline ring-1 ring-white/20">
                  Weekly Studio Missions →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="MISSION CONTROL"
            title="We train decision scientists — not model worshippers."
            desc="Every project must pass baseline, leakage, stress, and explainability gates before it is considered successful."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader title="Studio Rules (non-negotiable)" subtitle="Your Trust Score depends on these." />
              <CardBody>
                <ul className="space-y-3">
                  {rules.map((r) => (
                    <li key={r.k} className="flex items-start gap-3">
                      <Badge tone="muted">{r.k}</Badge>
                      <div className="text-sm text-ink/80">{r.v}</div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Instructor" subtitle="Course leadership" />
              <CardBody>
                <div className="text-sm">
                  <div className="font-bold">Prof. Kyung (GENIUS Lab)</div>
                  <div className="mt-1 text-ink/70">
                    Civil & Environmental Engineering · Ulsan University
                  </div>
                  <div className="mt-4 rounded-xl bg-muted p-4 text-ink/80">
                    <div className="font-semibold">What makes this course different?</div>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>We grade scientific reasoning and honesty, not code style.</li>
                      <li>We require explainability that leads to actions.</li>
                      <li>Every team finishes with a poster and reusable research assets.</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-xs text-ink/60">
                    Lab website:{" "}
                    <a href="https://genius.ulsan.ac.kr/home" target="_blank" rel="noreferrer">
                      genius.ulsan.ac.kr
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader title="What you build" subtitle="Every team produces paper-ready artifacts." />
              <CardBody>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    ["Dataset Card", "Provenance, units, missingness, drift, bias, limitations."],
                    ["Baseline Ladder", "At least 3 baselines + honest error analysis."],
                    ["Explainability Pack", "Global + local + failure modes + action recommendations."],
                    ["Poster", "Mini-conference style: one message, three figures, limitations."],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
                      <div className="font-bold">{t}</div>
                      <div className="mt-1 text-sm text-ink/70">{d}</div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Start here" subtitle="Quick links" />
              <CardBody className="space-y-2 text-sm">
                <Link href="/case-files" className="block font-semibold no-underline">Case Files →</Link>
                <Link href="/studio" className="block font-semibold no-underline">Weekly Missions →</Link>
                <Link href="/scoreboard" className="block font-semibold no-underline">Trust Score →</Link>
                <Link href="/poster-factory" className="block font-semibold no-underline">Poster Factory →</Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}

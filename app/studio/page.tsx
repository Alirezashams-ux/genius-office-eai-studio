import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";

const missions = [
  {
    week: 1,
    title: "Mission 01 — Problem framing + Dataset Card v1",
    tasks: [
      "Write two competing problem framings (forecast vs classification vs detection).",
      "Create Dataset Card v1: schema, units, missingness, provenance, risks.",
      "Run QA/QC: timestamp gaps, outliers, sensor resets (log what you did).",
    ],
    artifact: "Upload Dataset Card v1 + Problem Memo (1 page).",
  },
  {
    week: 2,
    title: "Mission 02 — Baseline v1 + split plan",
    tasks: [
      "Implement persistence baseline (and one more simple baseline).",
      "Create time-aware split plan (no random shuffle).",
      "Fill leakage checklist v1: list 3 possible leakage routes and how you block them.",
    ],
    artifact: "Upload Baseline v1 report + Split Plan + Leakage checklist v1.",
  },
  {
    week: 5,
    title: "Mission 05 — Stress-window evaluation",
    tasks: [
      "Define a stress window rule (rain/heat/low-flow or upset).",
      "Evaluate normal vs stress performance.",
      "Explain one failure case with a plot and a plain-language note.",
    ],
    artifact: "Upload Stress Test Report + 1 failure explanation.",
  },
  {
    week: 9,
    title: "Mission 09 — Explainability Theater",
    tasks: [
      "Provide global drivers (importance / surrogate explanations).",
      "Explain 3 hard cases locally (why this prediction).",
      "Write a failure taxonomy + action recommendations.",
    ],
    artifact: "Upload Explainability Pack (global + local + failure + action).",
  },
  {
    week: 13,
    title: "Mission 13 — Poster draft",
    tasks: [
      "One message, three figures, one table, one limitations box.",
      "Connect results to decision/action (operator/experiment).",
    ],
    artifact: "Upload Poster v1 (PDF).",
  },
];

export default function StudioPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="STUDIO"
            title="Weekly missions (portfolio-based)"
            desc="This page shows example missions for the template website. In the real course, missions are released weekly with datasets and guided notebooks."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {missions.map((m) => (
              <Card key={m.week}>
                <CardHeader title={m.title} subtitle={`Week ${m.week}`} />
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="muted">Camp Drill</Badge>
                    <Badge tone="teal">Studio Build</Badge>
                    <Badge tone="sky">Explainability</Badge>
                  </div>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink/80">
                    {m.tasks.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="mt-4 rounded-xl bg-muted p-4 text-sm">
                    <div className="font-bold">Required artifact</div>
                    <div className="mt-1 text-ink/70">{m.artifact}</div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
            <div className="text-lg font-extrabold">Mini‑camp drill (10 minutes, every week)</div>
            <p className="mt-2 max-w-3xl text-sm text-white/80">
              One problem + one figure + one plain-language explanation. This is how we remove math fear and train creative, non-linear thinking.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

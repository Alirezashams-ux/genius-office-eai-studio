import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";
import { CASE_FILES } from "@/lib/caseFiles";
import Link from "next/link";

export default function CaseFileDetail({ params }: { params: { slug: string } }) {
  const cf = CASE_FILES.find((x) => x.slug === params.slug);
  if (!cf) {
    return (
      <main>
        <Container>
          <div className="py-10">
            <SectionTitle title="Case file not found" desc="Go back to the library." />
            <Link href="/case-files" className="font-semibold">← Case Files</Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between">
            <Link href="/case-files" className="text-sm font-semibold no-underline">← Case Files</Link>
            <div className="flex gap-2">
              <Badge tone="teal">NO EXAMS</Badge>
              <Badge tone="sky">EXPLAINABLE</Badge>
            </div>
          </div>

          <div className="mt-5">
            <SectionTitle title={cf.title} desc={cf.subtitle} />
            <div className="flex flex-wrap gap-2">
              {cf.domainTags.map((t) => (
                <Badge key={t} tone="muted">{t}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader title="Decision to support" />
              <CardBody>
                <p className="text-sm text-ink/80">{cf.decision}</p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Core questions" />
              <CardBody>
                <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
                  {cf.coreQuestions.map((q) => <li key={q}>{q}</li>)}
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Constraints (non-negotiable)" subtitle="These protect scientific validity." />
              <CardBody>
                <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
                  {cf.constraints.map((q) => <li key={q}>{q}</li>)}
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Data options" />
              <CardBody>
                <div className="space-y-3">
                  {cf.dataOptions.map((d) => (
                    <div key={d.label} className="rounded-xl bg-muted p-4">
                      <div className="font-bold">{d.label}</div>
                      <div className="mt-1 text-sm text-ink/70">{d.details}</div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader title="Deliverables (your portfolio)" subtitle="These outputs can become future paper artifacts." />
              <CardBody>
                <div className="grid gap-3 md:grid-cols-2">
                  {cf.deliverables.map((d) => (
                    <div key={d} className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
                      <div className="text-sm font-semibold">{d}</div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader title="Trust Score badges" subtitle="We reward scientific quality, not only metrics." />
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  {cf.trustScoreBadges.map((b) => <Badge key={b} tone="muted">{b}</Badge>)}
                </div>
                <div className="mt-4 rounded-xl bg-navy p-4 text-white">
                  <div className="font-bold">Explainability Theater (required)</div>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-white/90">
                    <li>Why this prediction? (local evidence)</li>
                    <li>When does it break? (failure modes)</li>
                    <li>What action follows? (operations / experiments)</li>
                  </ol>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/studio" className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white no-underline">
              Go to Weekly Missions →
            </Link>
            <Link href="/submit" className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-navy no-underline ring-1 ring-black/10">
              Submit artifacts →
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

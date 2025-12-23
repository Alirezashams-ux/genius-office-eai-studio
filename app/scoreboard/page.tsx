import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";
import { DEMO_SCORES } from "@/lib/demoScores";

export default function ScoreboardPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="TRUST SCORE"
            title="We rank scientific quality — not just accuracy."
            desc="This is a demo scoreboard. In the full platform, scores are computed from checklist gates + artifact reviews."
          />

          <div className="grid gap-4">
            {DEMO_SCORES.map((s) => (
              <Card key={s.team}>
                <CardHeader title={s.team} subtitle={`${s.caseFile} · Last update: ${s.lastUpdate}`} />
                <CardBody>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {s.badges.map((b) => (
                        <Badge key={b} tone="muted">{b}</Badge>
                      ))}
                    </div>
                    <div className="rounded-2xl bg-navy px-4 py-2 text-white">
                      <div className="text-xs text-white/70">Trust Score</div>
                      <div className="text-2xl font-black">{s.trustScore}</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader title="Badge philosophy" subtitle="Why we do anti-leaderboard scoring" />
              <CardBody className="text-sm text-ink/80 space-y-2">
                <p><span className="font-semibold">Baseline-beaten</span> ensures we are adding value beyond trivial rules.</p>
                <p><span className="font-semibold">Leakage-passed</span> protects scientific validity.</p>
                <p><span className="font-semibold">Stress-tested</span> prioritizes performance during extremes.</p>
                <p><span className="font-semibold">Explainable</span> forces clear narratives and action guidance.</p>
                <p><span className="font-semibold">Reproducible</span> makes results trustworthy and reusable.</p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Next expansion (book platform)" subtitle="What this becomes later" />
              <CardBody className="text-sm text-ink/80 space-y-2">
                <p>Auto-checks: split sanity, leakage heuristics, stress-window evaluation.</p>
                <p>Explainability Theater pages with required evidence plots.</p>
                <p>Failure Museum gallery (curated mistakes → fastest learning).</p>
                <p>Poster Factory: automatic poster draft generation.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}

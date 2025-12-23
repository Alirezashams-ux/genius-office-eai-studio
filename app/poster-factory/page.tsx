import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";

export default function PosterFactoryPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="POSTER FACTORY"
            title="Turn your artifacts into a conference-style poster."
            desc="In v1, download a template and follow the required figure list. In v2, the platform auto-generates a draft poster from your submissions."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader title="Poster blueprint" subtitle="One message, three figures, one table, one limitations box." />
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="amber">No exam</Badge>
                  <Badge tone="teal">Mini‑conference</Badge>
                  <Badge tone="sky">Explainability</Badge>
                </div>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink/80">
                  <li>Figure 1: data + stress windows</li>
                  <li>Figure 2: baseline ladder performance</li>
                  <li>Figure 3: explainability (global + one local case)</li>
                  <li>Table: model/config summary + key metrics</li>
                  <li>Limitations: where it breaks + next actions</li>
                </ul>

                <div className="mt-4 rounded-xl bg-muted p-4 text-sm">
                  <div className="font-bold">Template files</div>
                  <div className="mt-1 text-ink/70">Add your PPT/PDF template here (Course kit).</div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="What makes it different" subtitle="Not a leaderboard poster." />
              <CardBody className="text-sm text-ink/80 space-y-2">
                <p>Your poster must answer three explainability questions:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Why this prediction?</li>
                  <li>When does it break?</li>
                  <li>What action follows?</li>
                </ol>
                <p className="mt-2">A beautiful figure without decision relevance is not considered success.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}

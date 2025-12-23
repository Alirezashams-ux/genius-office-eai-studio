import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";
import Link from "next/link";
import { CASE_FILES } from "@/lib/caseFiles";

export default function CaseFilesPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="CASE FILES"
            title="Choose a dossier. Build evidence. Produce actions."
            desc="Every case file is a real-world decision problem with constraints, deliverables, and a Trust Score rubric."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {CASE_FILES.map((cf) => (
              <Card key={cf.slug}>
                <CardHeader title={cf.title} subtitle={cf.subtitle} />
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    {cf.domainTags.map((t) => (
                      <Badge key={t} tone="muted">{t}</Badge>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-ink/70">{cf.context}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-ink/60">Suggested start: Week {cf.starterWeek}</div>
                    <Link href={`/case-files/${cf.slug}`} className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white no-underline">
                      Open dossier →
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

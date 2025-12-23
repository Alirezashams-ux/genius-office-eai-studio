import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardBody, CardHeader } from "@/components/Card";
import Badge from "@/components/Badge";
import { supabase } from "@/lib/supabaseClient";

export default function SubmitPage() {
  const connected = !!supabase;

  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="SUBMISSIONS"
            title="Upload your artifacts (demo template)"
            desc="This template runs in read-only demo mode by default. Connect Supabase to enable authentication and file uploads."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader title="Required artifacts" subtitle="For Trust Score badges" />
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="muted">Dataset Card</Badge>
                  <Badge tone="muted">Baseline Report</Badge>
                  <Badge tone="muted">Stress Test</Badge>
                  <Badge tone="muted">Explainability Pack</Badge>
                  <Badge tone="muted">Poster PDF</Badge>
                </div>
                <p className="mt-4 text-sm text-ink/70">
                  In the full platform, these uploads become your portfolio vault and can generate a poster draft automatically.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Supabase status" subtitle="Turn the template into a real course platform" />
              <CardBody className="text-sm text-ink/80 space-y-2">
                {connected ? (
                  <>
                    <div className="font-bold text-teal">Connected</div>
                    <p>Auth + storage are available. Next: create tables and upload UI.</p>
                  </>
                ) : (
                  <>
                    <div className="font-bold text-amber">Demo mode (not connected)</div>
                    <p>Add <code className="rounded bg-muted px-2 py-1">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
                      <code className="rounded bg-muted px-2 py-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to <code className="rounded bg-muted px-2 py-1">.env.local</code>.</p>
                    <p>Then you can implement real uploads + per-team vault.</p>
                  </>
                )}
              </CardBody>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
            <div className="text-lg font-extrabold">Next build step</div>
            <p className="mt-2 max-w-3xl text-sm text-white/80">
              Add a simple submission form and store metadata in Supabase tables (team, caseFile, artifactType, links). This is enough to impress stakeholders for Phase 1.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

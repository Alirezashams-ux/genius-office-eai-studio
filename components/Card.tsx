import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-2xl bg-card shadow-sm ring-1 ring-black/5", className)}>{children}</div>;
}
export function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-black/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      {subtitle ? <p className="mt-1 text-sm text-ink/70">{subtitle}</p> : null}
    </div>
  );
}
export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

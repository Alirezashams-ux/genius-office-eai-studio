import { cn } from "@/lib/utils";

export default function Badge({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "teal" | "amber" | "sky" | "navy";
}) {
  const styles: Record<string, string> = {
    muted: "bg-muted text-ink",
    teal: "bg-teal text-white",
    amber: "bg-amber text-black",
    sky: "bg-sky text-white",
    navy: "bg-navy text-white",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", styles[tone])}>
      {children}
    </span>
  );
}

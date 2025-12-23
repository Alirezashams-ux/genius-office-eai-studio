export default function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="mb-5">
      {eyebrow ? <div className="text-xs font-bold tracking-wide text-teal">{eyebrow}</div> : null}
      <h2 className="mt-1 text-2xl font-extrabold">{title}</h2>
      {desc ? <p className="mt-1 max-w-3xl text-sm text-ink/70">{desc}</p> : null}
    </div>
  );
}

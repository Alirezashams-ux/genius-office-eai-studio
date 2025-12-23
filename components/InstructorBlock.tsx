export function InstructorBlock() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/prof_kyung.jpg"
        alt="Prof. Kyung"
        width={72}
        height={72}
        style={{ width: 72, height: 72 }}
        className="rounded-2xl object-cover ring-1 ring-black/10"
      />
      <div>
        <div className="text-sm font-bold text-ink">Prof. Kyung (GENIUS Lab)</div>
        <div className="mt-1 text-xs text-ink/70">
          Civil & Environmental Engineering · Ulsan University
        </div>
      </div>
    </div>
  );
}

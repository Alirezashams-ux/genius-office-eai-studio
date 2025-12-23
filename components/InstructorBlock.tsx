import Image from "next/image";

export function InstructorBlock() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/prof_kyung.jpg"
        alt="Prof. Kyung"
        width={72}
        height={72}
        className="h-[72px] w-[72px] rounded-2xl object-cover ring-1 ring-black/10"
        priority
      />
      <div>
        <div className="text-sm font-semibold text-ink">Prof. Kyung (GENIUS Lab)</div>
        <div className="text-xs text-ink/70">
          Civil & Environmental Engineering · Ulsan University
        </div>
      </div>
    </div>
  );
}

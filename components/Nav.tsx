import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";

const nav = [
  { href: "/", label: "Mission Control" },
  { href: "/case-files", label: "Case Files" },
  { href: "/studio", label: "Studio" },
  { href: "/scoreboard", label: "Trust Score" },
  { href: "/poster-factory", label: "Poster Factory" },
  { href: "/submit", label: "Submissions" },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-30 border-b border-black/10 bg-paper/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Brand lockup */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="h-10 w-10 rounded-2xl bg-white p-1 ring-1 ring-black/10">
              <Image
                src="/genius_logo.png"
                alt="GENIUS Lab"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-extrabold text-ink">GENIUS Office</div>
              <div className="text-xs text-ink/70">Environmental AI Studio I</div>
            </div>
          </Link>

          {/* Links */}
          <nav className="hidden items-center gap-4 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-ink/80 hover:text-ink no-underline"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Badges */}
          <div className="flex items-center gap-2">
            <Badge tone="teal">NO EXAMS</Badge>
            <Badge tone="sky">EXPLAINABLE</Badge>
          </div>
        </div>
      </Container>
    </div>
  );
}

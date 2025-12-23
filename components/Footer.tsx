import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-black/5 bg-white">
      <Container>
        <div className="py-8 text-sm text-ink/70">
          <div className="font-semibold text-ink">Ulsan University · Civil & Environmental Engineering</div>
          <div className="mt-1">
            Instructor: <span className="font-medium text-ink">Prof. Kyung</span> (GENIUS Lab) · Website:{" "}
            <a href="https://genius.ulsan.ac.kr/home" target="_blank" rel="noreferrer">
              genius.ulsan.ac.kr
            </a>
          </div>
          <div className="mt-3 text-xs">
            Motto: Baseline-first · Leakage-zero · Stress-test · Explainability → Action · Reproducibility
          </div>
        </div>
      </Container>
    </footer>
  );
}

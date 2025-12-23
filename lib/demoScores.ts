export type TeamScore = {
  team: string;
  caseFile: string;
  trustScore: number; // 0-100
  badges: string[];
  lastUpdate: string;
};

export const DEMO_SCORES: TeamScore[] = [
  {
    team: "Team 01 — Water",
    caseFile: "Case File 01",
    trustScore: 84,
    badges: ["Baseline-beaten", "Leakage-passed", "Stress-tested", "Explainable"],
    lastUpdate: "Week 6"
  },
  {
    team: "Team 02 — Monitoring",
    caseFile: "Case File 02",
    trustScore: 79,
    badges: ["Leakage-passed", "Explainable", "Actionable"],
    lastUpdate: "Week 5"
  },
  {
    team: "Team 03 — Materials",
    caseFile: "Case File 03",
    trustScore: 72,
    badges: ["Provenance-complete", "Explainable"],
    lastUpdate: "Week 4"
  },
  {
    team: "Team 04 — Vision",
    caseFile: "Case File 04",
    trustScore: 76,
    badges: ["Imbalance-aware", "Augmentation-validated"],
    lastUpdate: "Week 4"
  }
];

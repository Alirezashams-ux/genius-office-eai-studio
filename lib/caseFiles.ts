export type CaseFile = {
  slug: string;
  title: string;
  subtitle: string;
  domainTags: string[];
  decision: string;
  context: string;
  coreQuestions: string[];
  constraints: string[];
  dataOptions: { label: string; details: string }[];
  deliverables: string[];
  trustScoreBadges: string[];
  starterWeek: number;
};

export const CASE_FILES: CaseFile[] = [
  {
    slug: "wwtp-forecasting-stress-robustness",
    title: "Case File 01 — WWTP Forecasting Under Stress",
    subtitle: "Multihorizon forecasting + stress-window robustness (rain/heat/low-flow).",
    domainTags: ["Water", "Time series", "Resilience"],
    decision: "When should operators intervene (sampling, aeration control, alarms) to prevent effluent exceedance?",
    context:
      "Wastewater processes operate under changing regimes (seasonality, storms, heatwaves). Models often look good on average but fail during stress periods—exactly when decisions matter.",
    coreQuestions: [
      "Can we beat simple baselines (persistence, seasonal average) without leakage?",
      "Does performance remain strong during defined stress windows?",
      "Can we explain failures and propose operator-relevant actions?"
    ],
    constraints: [
      "Time-aware train/val/test splits only (no random shuffle).",
      "Leakage checklist must pass (past-only features).",
      "Stress-window evaluation required (extremes > averages)."
    ],
    dataOptions: [
      { label: "Starter dataset (provided)", details: "Small multivariate WWTP/WTP time series with events." },
      { label: "Bring-your-own", details: "Your lab/municipal time series; must include units + timestamps." }
    ],
    deliverables: [
      "Dataset Card + QA/QC log",
      "Baseline Ladder Report (≥3 baselines)",
      "Stress Test Report (normal vs stress)",
      "Explainability Pack (global + 3 local cases + failure taxonomy + actions)",
      "Final poster"
    ],
    trustScoreBadges: ["Baseline-beaten", "Leakage-passed", "Stress-tested", "Explainable", "Reproducible"],
    starterWeek: 1
  },
  {
    slug: "sensor-drift-anomaly-early-warning",
    title: "Case File 02 — Sensor Drift & Anomaly Early Warning",
    subtitle: "Change points, drift, and actionable alarms.",
    domainTags: ["Monitoring", "Anomaly detection", "Operations"],
    decision: "Is this sensor trustworthy right now? Should we recalibrate, replace, or trigger manual sampling?",
    context:
      "Environmental monitoring systems fail quietly: drift, stuck-at faults, missing bursts. A good anomaly system must be interpretable and action-guiding, not just a black-box score.",
    coreQuestions: [
      "Can we separate process anomalies from sensor faults?",
      "Can we detect drift/change points early with few false alarms?",
      "Can we produce an 'operator note' explaining what happened?"
    ],
    constraints: [
      "Define a taxonomy: point/contextual/collective anomalies + drift.",
      "Explain at least 3 hard cases with evidence plots.",
      "Alarm thresholds must be justified using decision costs."
    ],
    dataOptions: [
      { label: "Starter dataset (provided)", details: "Time series with injected drift and event windows." },
      { label: "Bring-your-own", details: "Any sensor stream (water quality, air pollution, process signals)." }
    ],
    deliverables: [
      "Anomaly Taxonomy + threshold rationale",
      "Baseline detectors (rules + simple statistical)",
      "Stress-window false alarm analysis",
      "Explainability Theater answers (why/when-break/action)",
      "Final poster"
    ],
    trustScoreBadges: ["Leakage-passed", "Stress-tested", "Explainable", "Actionable", "Reproducible"],
    starterWeek: 2
  },
  {
    slug: "catalyst-literature-to-dataset-explainable-screening",
    title: "Case File 03 — Catalyst Screening From Literature",
    subtitle: "Build a small dataset from papers; predict class/performance with explainability.",
    domainTags: ["Materials", "Catalysis", "CO₂/H₂"],
    decision: "Which catalyst family should we test next (or avoid), given limited lab time?",
    context:
      "Most labs have scattered tables in PDFs. Turning literature + characterization into a structured dataset is itself a publishable contribution—if done carefully and transparently.",
    coreQuestions: [
      "Can we create a clean dataset with clear provenance and units?",
      "Can we predict an activity/stability class with simple, explainable models?",
      "Do explanations align with mechanistic plausibility?"
    ],
    constraints: [
      "Dataset Card must cite sources and define measurement conditions.",
      "At least one ablation: remove a feature family and measure impact.",
      "Explainability must include a plausibility check (domain sanity)."
    ],
    dataOptions: [
      { label: "Starter mini-table (provided)", details: "A small catalyst table (placeholder) for demo." },
      { label: "Bring-your-own", details: "Your paper tables, DFT descriptors, characterization metrics." }
    ],
    deliverables: [
      "Literature-to-dataset pipeline note",
      "Baseline models + ablation",
      "Explainability Pack + plausibility check",
      "Final poster"
    ],
    trustScoreBadges: ["Provenance-complete", "Explainable", "Reproducible"],
    starterWeek: 3
  },
  {
    slug: "imaging-anomaly-segmentation-with-augmentation-validation",
    title: "Case File 04 — Imaging Anomaly / Segmentation With Verified Augmentation",
    subtitle: "Imbalanced data, segmentation, and 'does synthetic really help?' validation.",
    domainTags: ["Vision", "Segmentation", "Generative"],
    decision: "Can we reliably detect/segment defects when anomalies are rare and labels are expensive?",
    context:
      "In microscopy/inspection, normal images dominate. Generative augmentation is tempting—but can silently harm generalization. We validate augmentation scientifically, not aesthetically.",
    coreQuestions: [
      "Can we build a robust baseline detector/segmenter?",
      "Does augmentation improve PR/IoU on real held-out anomalies?",
      "Can we explain where the model looks and why it fails?"
    ],
    constraints: [
      "Report imbalance-aware metrics (PR curve, IoU).",
      "Augmentation must be validated via ablation (real-only vs real+synthetic).",
      "Provide at least one explanation map and failure discussion."
    ],
    dataOptions: [
      { label: "Starter image set (provided)", details: "Small demo set; replace with lab images later." },
      { label: "Bring-your-own", details: "SEM/optical/inspection images, operando frames, etc." }
    ],
    deliverables: [
      "Metric + imbalance rationale",
      "Augmentation validation ablation",
      "Explainability Theater answers",
      "Final poster"
    ],
    trustScoreBadges: ["Imbalance-aware", "Augmentation-validated", "Explainable", "Reproducible"],
    starterWeek: 4
  }
];

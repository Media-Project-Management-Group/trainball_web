import type { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "./_components/Logo";
import { SiteFooter } from "./_components/SiteFooter";

/* ----------------------------------------------------------------- */
/* Hero radar visual — mirrors the in-app skill radar                 */
/* ----------------------------------------------------------------- */

function SkillRadar() {
  const axes = ["Pace", "Shooting", "Passing", "Dribbling", "Defense", "Stamina"];
  return (
    <svg
      viewBox="0 0 300 320"
      className="w-full max-w-sm"
      role="img"
      aria-label="Skill radar chart showing balanced football attributes"
    >
      {/* grid rings */}
      {[
        "150,40 245,95 245,205 150,260 55,205 55,95",
        "150,77 213,114 213,186 150,223 87,186 87,114",
        "150,113 182,132 182,168 150,187 118,168 118,132",
      ].map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          className="fill-none stroke-white/10"
          strokeWidth="1"
        />
      ))}

      {/* axes */}
      {[
        "150,150 150,40",
        "150,150 245,95",
        "150,150 245,205",
        "150,150 150,260",
        "150,150 55,205",
        "150,150 55,95",
      ].map((line, i) => {
        const [x1y1, x2y2] = line.split(" ");
        const [x1, y1] = x1y1.split(",");
        const [x2, y2] = x2y2.split(",");
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className="stroke-white/10"
            strokeWidth="1"
          />
        );
      })}

      {/* player polygon */}
      <polygon
        points="150,57 217,112 236,200 150,216 102,178 74,106"
        className="fill-brand/25 stroke-brand"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {["150,57", "217,112", "236,200", "150,216", "102,178", "74,106"].map(
        (p, i) => {
          const [cx, cy] = p.split(",");
          return (
            <circle key={i} cx={cx} cy={cy} r="3.5" className="fill-brand" />
          );
        }
      )}

      {/* labels */}
      {[
        { t: axes[0], x: 150, y: 30, a: "middle" },
        { t: axes[1], x: 252, y: 92, a: "start" },
        { t: axes[2], x: 252, y: 212, a: "start" },
        { t: axes[3], x: 150, y: 280, a: "middle" },
        { t: axes[4], x: 48, y: 212, a: "end" },
        { t: axes[5], x: 48, y: 92, a: "end" },
      ].map((l) => (
        <text
          key={l.t}
          x={l.x}
          y={l.y}
          textAnchor={l.a as "start" | "middle" | "end"}
          className="fill-white/60 text-[11px] font-medium"
        >
          {l.t}
        </text>
      ))}

      {/* score badge */}
      <text
        x="150"
        y="305"
        textAnchor="middle"
        className="fill-brand text-[13px] font-semibold tracking-wide"
      >
        OVERALL 84
      </text>
    </svg>
  );
}

/* ----------------------------------------------------------------- */
/* Icons                                                              */
/* ----------------------------------------------------------------- */

const iconProps = {
  className: "h-6 w-6 text-brand",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const icons: Record<string, ReactNode> = {
  radar: (
    <svg {...iconProps}>
      <polygon points="12 3 20 8 18 18 6 18 4 8" />
      <polygon points="12 8 16 11 14 16 10 16 8 11" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  program: (
    <svg {...iconProps}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  video: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  health: (
    <svg {...iconProps}>
      <path d="M3 12h4l2 5 3-10 2 5h6" />
    </svg>
  ),
  camera: (
    <svg {...iconProps}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  ),
  trophy: (
    <svg {...iconProps}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M10 14h4M9 20h6M12 14v6" />
    </svg>
  ),
};

/* ----------------------------------------------------------------- */
/* Content                                                            */
/* ----------------------------------------------------------------- */

const features = [
  {
    icon: "radar",
    title: "Skill Radar",
    body: "See every attribute at a glance. Pace, shooting, passing, dribbling, defense and stamina mapped on a living radar that grows as you train.",
  },
  {
    icon: "program",
    title: "Structured Programs",
    body: "Systemized training plans built around your position and level. Daily drills broken into clear, repeatable sessions.",
  },
  {
    icon: "video",
    title: "Video Library",
    body: "Step-by-step technique breakdowns and guided sessions you can follow anywhere, anytime, on any device.",
  },
  {
    icon: "health",
    title: "Fitness Tracking",
    body: "Sync your health data to keep an eye on effort, recovery and load — so you train hard without burning out.",
  },
  {
    icon: "camera",
    title: "Record & Review",
    body: "Capture your reps with the camera, replay your form and watch your technique sharpen session after session.",
  },
  {
    icon: "trophy",
    title: "Goals & Progress",
    body: "Set targets, hit milestones and keep your streak alive. Every session is one measurable step forward.",
  },
];

const steps = [
  {
    n: "01",
    title: "Build your profile",
    body: "Tell TrainBall your position, level and what you want to improve.",
  },
  {
    n: "02",
    title: "Follow your plan",
    body: "Get a systemized program with guided drills tailored to your game.",
  },
  {
    n: "03",
    title: "Track & level up",
    body: "Log sessions, sync fitness data and watch your skill radar climb.",
  },
];

const stats = [
  { value: "6", label: "Core skill metrics" },
  { value: "100+", label: "Guided drills" },
  { value: "iOS", label: "& Android" },
  { value: "1", label: "Systemized platform" },
];

/* ----------------------------------------------------------------- */
/* Store buttons (static)                                             */
/* ----------------------------------------------------------------- */

function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href="https://apps.apple.com/uz/app/trainball/id6747034373"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-13 items-center gap-3 rounded-xl bg-brand px-5 py-3 font-medium text-background transition-transform hover:-translate-y-0.5"
        aria-label="Download TrainBall on the App Store"
      >
        <Image
          src="/apple.svg"
          alt=""
          width={24}
          height={24}
          unoptimized
          className="h-6 w-6"
        />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wider opacity-80">
            Download on the
          </span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=uz.uzfootball.akademiya"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-13 items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-foreground transition-transform hover:-translate-y-0.5"
        aria-label="Get TrainBall on Google Play"
      >
        <Image
          src="/google.svg"
          alt=""
          width={24}
          height={24}
          unoptimized
          className="h-6 w-6"
        />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">
            Get it on
          </span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* Page                                                               */
/* ----------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" priority />
            <span className="text-lg font-semibold tracking-tight">
              Train<span className="text-brand">Ball</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
          </div>
          <a
            href="#download"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Get the app
          </a>
        </nav>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
            <div className="absolute bottom-[-12rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand-deep/15 blur-[120px]" />
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Superpower systemized sport platform
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Turn every training into a{" "}
                <span className="text-brand">step forward.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-foreground/70">
                TrainBall systemizes football practice into measurable progress.
                Follow structured sessions, record your reps, and watch your
                skill radar climb — one workout at a time.
              </p>
              <StoreButtons className="mt-8" />
              <p className="mt-4 text-sm text-foreground/50">
                Free to start · No equipment required · iOS &amp; Android
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/60">
                    Your performance
                  </span>
                  <span className="rounded-full bg-brand/15 px-2.5 py-1 text-xs font-semibold text-brand">
                    +12% this month
                  </span>
                </div>
                <SkillRadar />
              </div>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-brand sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to train like a pro
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              A complete, systemized toolkit that turns scattered practice into a
              clear path of improvement.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/20">
                  {icons[f.icon]}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-foreground/65">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Three steps to a stronger game
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                TrainBall keeps your development simple, structured and
                measurable.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="relative">
                  <span className="font-mono text-5xl font-bold text-brand/25">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-7 text-foreground/65">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto w-full max-w-4xl px-6 py-20 text-center md:py-28">
          <Logo className="mx-auto h-20 w-20 shadow-xl shadow-black/40" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for players who want to get serious
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/70">
            TrainBall was created on a simple idea: progress should be felt and
            seen. By systemizing the way you practice — clear programs,
            recorded reps, synced fitness, and a skill radar that never lies — it
            gives every player, from grassroots to academy, a real framework to
            unlock their superpower on the pitch.
          </p>
        </section>

        {/* Download CTA */}
        <section id="download" className="px-6 pb-24">
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/15 via-white/[0.03] to-transparent p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[100px]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to unlock your superpower?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-foreground/70">
              Download TrainBall and turn your next training session into
              measurable progress.
            </p>
            <StoreButtons className="mt-8 items-center justify-center sm:flex-row" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StoreButtons } from "./StoreButtons";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { dictionaries, type Locale } from "../_i18n/dictionaries";

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
  chart: (
    <svg {...iconProps}>
      <path d="M4 5v14h16" />
      <path d="M7 14l3-4 3 2 4-6" />
    </svg>
  ),
  rating: (
    <svg {...iconProps}>
      <path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.6 9.1l5.8-.8z" />
    </svg>
  ),
  regions: (
    <svg {...iconProps}>
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  spark: (
    <svg {...iconProps}>
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
      <path d="M19 3.5v3M20.5 5h-3" />
    </svg>
  ),
  send: (
    <svg {...iconProps}>
      <path d="M22 2 11 13" />
      <path d="M22 2l-7 20-4-9-9-4z" />
    </svg>
  ),
  filter: (
    <svg {...iconProps}>
      <path d="M3 5h18l-7 8v6l-4-2v-4z" />
    </svg>
  ),
  trial: (
    <svg {...iconProps}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  chat: (
    <svg {...iconProps}>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1.2-4.5A8 8 0 1 1 21 12z" />
    </svg>
  ),
  flame: (
    <svg {...iconProps} className="h-4 w-4 text-brand">
      <path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1.5.6-2.4 1.2-3.2C10 9 11 7.5 12 3z" />
    </svg>
  ),
  check: (
    <svg {...iconProps} className="h-4 w-4 text-brand">
      <path d="M5 12l4 4 10-11" />
    </svg>
  ),
};

const SCOUT_STEP_ICONS = ["send", "filter", "trial", "chat"] as const;

const LEADERBOARD = [
  { region: "Tashkent", xp: "2,480", rank: 1 },
  { region: "Samarqand", xp: "2,415", rank: 2 },
  { region: "Andijon", xp: "2,360", rank: 3 },
  { region: "Farg'ona", xp: "2,290", rank: 4 },
  { region: "Buxoro", xp: "2,240", rank: 5 },
];

const STAT_DIRS = ["tilt-left", "up", "down", "tilt-right"] as const;
const FEATURE_DIRS = ["left", "flip", "right", "tilt-left", "zoom", "tilt-right"] as const;
const STEP_DIRS = ["left", "up", "right"] as const;
const FAQ_DIRS = ["tilt-left", "tilt-right", "blur", "tilt-left", "tilt-right"] as const;

interface LandingProps {
  locale: Locale;
}

export function Landing({ locale }: LandingProps) {
  const t = dictionaries[locale];

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader locale={locale} />

      <main id="top" className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid" />
            <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" />
            <div className="absolute bottom-[-14rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brand-deep/15 blur-[130px]" />
          </div>

          <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:py-28">
            <Reveal from="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-brand">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                {t.hero.badge}
              </span>

              <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {t.hero.titleLead}{" "}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-foreground/70">
                {t.hero.subtitle}
              </p>

              <StoreButtons className="mt-8" priority />

              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/55">
                {t.hero.trust.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="text-brand">{icons.check}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="right" delay={120} className="flex justify-center md:justify-end">
              <div className="relative">
                <PhoneMockup />

                <div className="absolute -left-4 top-12 hidden rounded-2xl border border-border bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur animate-float-slow sm:flex sm:items-center sm:gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15">
                    {icons.flame}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">12 day streak</p>
                    <p className="text-[11px] text-foreground/55">Keep it alive</p>
                  </div>
                </div>

                <div className="absolute -right-3 bottom-16 hidden rounded-2xl border border-border bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur animate-float sm:flex sm:items-center sm:gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15">
                    {icons.check}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Session done</p>
                    <p className="text-[11px] text-foreground/55">+12% this month</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-y border-border bg-white/[0.02]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:px-6 sm:grid-cols-4">
            {t.stats.map((s, i) => (
              <Reveal
                key={s.label}
                from={STAT_DIRS[i % STAT_DIRS.length]}
                delay={i * 90}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-sm text-foreground/60">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 md:py-28">
          <Reveal from="blur" className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {t.featuresSection.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.featuresSection.title}
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              {t.featuresSection.subtitle}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
              <Reveal key={f.title} from={FEATURE_DIRS[i % FEATURE_DIRS.length]} delay={(i % 3) * 80}>
                <article
                  className="group relative h-full overflow-hidden rounded-2xl border border-border
                    bg-card p-6 transition-all duration-300 hover:-translate-y-1
                    hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-brand/5"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full
                      bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/20 transition-transform duration-300 group-hover:scale-105">
                    {icons[f.icon]}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-foreground/65">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* AI Coach */}
        <section id="ai" className="border-t border-border bg-white/[0.02]">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <Reveal from="left">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t.aiCoach.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.aiCoach.title}
              </h2>
              <p className="mt-4 text-lg text-foreground/70">{t.aiCoach.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {t.aiCoach.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                      {icons.check}
                    </span>
                    <span className="leading-7">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="right" delay={120}>
              <div className="relative mx-auto max-w-sm">
                <div aria-hidden className="absolute -inset-6 -z-10 rounded-full bg-brand/15 blur-[80px]" />
                <div className="rounded-3xl border border-border bg-background/70 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                  <div className="flex items-center gap-3 border-b border-border pb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 ring-1 ring-brand/25">
                      {icons.spark}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold">{t.aiCoach.chatName}</p>
                      <p className="flex items-center gap-1.5 text-[11px] text-foreground/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        {t.aiCoach.chatStatus}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2.5 pt-4">
                    {t.aiCoach.chat.map((m, i) => (
                      <div
                        key={i}
                        className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
                      >
                        <p
                          className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-6 ${
                            m.from === "you"
                              ? "rounded-br-sm bg-brand text-background"
                              : "rounded-bl-sm bg-white/[0.06] text-foreground/85"
                          }`}
                        >
                          {m.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-border bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 md:py-28">
            <Reveal from="up" className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t.howSection.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.howSection.title}
              </h2>
              <p className="mt-4 text-lg text-foreground/70">{t.howSection.subtitle}</p>
            </Reveal>

            <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r
                  from-transparent via-brand/30 to-transparent md:block"
              />
              {t.steps.map((s, i) => (
                <Reveal
                  key={s.n}
                  from={STEP_DIRS[i % STEP_DIRS.length]}
                  delay={i * 120}
                  className="relative"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-background font-display text-xl font-bold text-brand shadow-lg shadow-brand/10">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-7 text-foreground/65">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Scouting & Clubs */}
        <section id="clubs" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 md:py-28">
          <Reveal from="up" className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {t.scouting.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.scouting.title}
            </h2>
            <p className="mt-4 text-lg text-foreground/70">{t.scouting.subtitle}</p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.scouting.steps.map((s, i) => (
              <Reveal
                key={s.title}
                from={(["tilt-left", "up", "down", "tilt-right"] as const)[i % 4]}
                delay={(i % 4) * 70}
              >
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/20">
                    {icons[SCOUT_STEP_ICONS[i % SCOUT_STEP_ICONS.length]]}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-foreground/65">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <Reveal from="left">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 ring-1 ring-brand/20">
                    {icons.rating}
                  </span>
                  {t.scouting.players.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {t.scouting.players.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/70">
                      <span className="mt-1 text-brand">{icons.check}</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal from="up" delay={80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 ring-1 ring-brand/20">
                    {icons.trophy}
                  </span>
                  {t.scouting.clubs.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {t.scouting.clubs.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/70">
                      <span className="mt-1 text-brand">{icons.check}</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal from="right" delay={160}>
              <div className="h-full rounded-2xl border border-border bg-card p-5">
                <h3 className="flex items-center gap-2 font-semibold">
                  <span className="text-brand">{icons.regions}</span>
                  {t.scouting.leaderboardTitle}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-foreground/45">
                  {t.scouting.leaderboardNote}
                </p>
                <ul className="mt-4 space-y-2">
                  {LEADERBOARD.map((row) => (
                    <li
                      key={row.region}
                      className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-3 py-2"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          row.rank <= 3
                            ? "bg-brand text-background"
                            : "bg-white/[0.06] text-foreground/70"
                        }`}
                      >
                        {row.rank}
                      </span>
                      <span className="flex-1 text-sm font-medium">{row.region}</span>
                      <span className="font-mono text-sm text-brand">{row.xp} XP</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-6 md:py-28">
          <Reveal from="zoom">
            <Logo className="mx-auto h-20 w-20 shadow-2xl shadow-black/50" />
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/70">{t.about.body}</p>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-white/[0.02]">
          <div className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-6 md:py-28">
            <Reveal from="zoom" className="text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t.faqSection.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.faqSection.title}
              </h2>
            </Reveal>

            <div className="mt-12 space-y-3">
              {t.faqs.map((item, i) => (
                <Reveal key={item.q} from={FAQ_DIRS[i % FAQ_DIRS.length]} delay={i * 50}>
                  <details className="group rounded-2xl border border-border bg-card px-5 open:border-brand/30 open:bg-white/[0.05]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl">
                      {item.q}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </summary>
                    <p className="pb-5 pr-8 leading-7 text-foreground/65">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="px-5 py-20 sm:px-6 md:py-28">
          <Reveal from="flip" className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-br from-brand/15 via-white/[0.03] to-transparent p-8 text-center sm:p-12 md:p-16">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[100px]" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-foreground/70">
                {t.cta.subtitle}
              </p>
              <StoreButtons className="mt-8 items-center justify-center" />
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}

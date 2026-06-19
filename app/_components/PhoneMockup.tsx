const AXES = ["Pace", "Shoot", "Pass", "Drbl", "Def", "Stam"] as const;
const VALUES = [0.92, 0.86, 0.78, 0.7, 0.82, 0.9];
const CX = 120;
const CY = 104;
const R = 78;

function pointAt(index: number, radius: number): [number, number] {
  const angle = (-90 + index * 60) * (Math.PI / 180);
  return [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)];
}

function ring(radius: number): string {
  return Array.from({ length: 6 }, (_, i) =>
    pointAt(i, radius)
      .map((n) => n.toFixed(1))
      .join(",")
  ).join(" ");
}

const playerPoints = VALUES.map((v, i) =>
  pointAt(i, R * v)
    .map((n) => n.toFixed(1))
    .join(",")
).join(" ");

const skills = [
  { label: "Shooting", value: 86 },
  { label: "Passing", value: 78 },
  { label: "Stamina", value: 90 },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[300px]">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-brand/20 blur-[90px] animate-pulse-glow"
      />

      {/* Device */}
      <div
        className="relative rounded-[2.75rem] border border-white/15 bg-gradient-to-b from-white/15
          to-white/[0.04] p-2.5 shadow-2xl shadow-black/60 animate-float"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#081310]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/70" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[11px] font-medium text-foreground/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-4 rounded-[2px] border border-foreground/40" />
            </span>
          </div>

          {/* App body */}
          <div className="px-4 pb-5 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-foreground/50">Your performance</p>
                <p className="text-base font-semibold tracking-tight">
                  Skill Radar
                </p>
              </div>
              <span className="rounded-full bg-brand/15 px-2.5 py-1 text-[11px] font-semibold text-brand">
                +12%
              </span>
            </div>

            {/* Radar card */}
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <svg
                viewBox="0 0 240 200"
                className="w-full"
                role="img"
                aria-label="In-app skill radar preview, overall rating 84"
              >
                {[R, R * 0.66, R * 0.33].map((r) => (
                  <polygon
                    key={r}
                    points={ring(r)}
                    className="fill-none stroke-white/10"
                    strokeWidth="1"
                  />
                ))}
                {Array.from({ length: 6 }, (_, i) => {
                  const [x, y] = pointAt(i, R);
                  return (
                    <line
                      key={i}
                      x1={CX}
                      y1={CY}
                      x2={x}
                      y2={y}
                      className="stroke-white/10"
                      strokeWidth="1"
                    />
                  );
                })}
                <polygon
                  points={playerPoints}
                  className="fill-brand/25 stroke-brand"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {VALUES.map((v, i) => {
                  const [x, y] = pointAt(i, R * v);
                  return <circle key={i} cx={x} cy={y} r="2.6" className="fill-brand" />;
                })}
                {AXES.map((label, i) => {
                  const [x, y] = pointAt(i, R + 14);
                  return (
                    <text
                      key={label}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white/45 text-[9px] font-medium"
                    >
                      {label}
                    </text>
                  );
                })}
              </svg>
              <div className="-mt-1 text-center text-[12px] font-semibold tracking-wide text-brand">
                OVERALL 84
              </div>
            </div>

            {/* Skill bars */}
            <div className="mt-3 space-y-2.5">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-foreground/70">{s.label}</span>
                    <span className="font-semibold text-foreground/90">
                      {s.value}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-deep to-brand"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom action */}
            <div className="mt-4 rounded-xl bg-brand py-2.5 text-center text-[13px] font-semibold text-background">
              Start today&rsquo;s session
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

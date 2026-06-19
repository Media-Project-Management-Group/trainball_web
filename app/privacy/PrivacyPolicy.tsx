import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "../_components/Logo";
import { SiteFooter } from "../_components/SiteFooter";
import { policies, type Block, type Lang } from "./content";

/** Render a string with **bold** segments. */
function inline(text: string): ReactNode {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.k) {
    case "h2":
      return (
        <h2 className="mt-12 text-2xl font-bold tracking-tight text-foreground">
          {inline(block.t)}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-7 text-lg font-semibold text-foreground">
          {inline(block.t)}
        </h3>
      );
    case "p":
      return <p className="mt-4 leading-7 text-foreground/70">{inline(block.t)}</p>;
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-7 text-foreground/70">
              <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>{inline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">
                  {block.head[0]}
                </th>
                <th className="px-4 py-3 font-semibold text-foreground">
                  {block.head[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="px-4 py-3 align-top text-foreground/80">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 align-top text-foreground/70">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function LangSwitch({ lang }: { lang: Lang }) {
  const base = "rounded-md px-3 py-1.5 transition-colors";
  const active = "bg-brand text-background";
  const idle = "text-foreground/70 hover:text-foreground";
  return (
    <div className="inline-flex rounded-lg border border-white/15 p-0.5 text-sm font-medium">
      <Link
        href="/privacy"
        aria-current={lang === "uz" ? "page" : undefined}
        className={`${base} ${lang === "uz" ? active : idle}`}
      >
        Oʻzbekcha
      </Link>
      <Link
        href="/privacy/ru"
        aria-current={lang === "ru" ? "page" : undefined}
        className={`${base} ${lang === "ru" ? active : idle}`}
      >
        Русский
      </Link>
    </div>
  );
}

export function PrivacyPolicy({ lang }: { lang: Lang }) {
  const policy = policies[lang];
  const back = lang === "uz" ? "Bosh sahifaga qaytish" : "Вернуться на главную";

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" priority />
            <span className="text-lg font-semibold tracking-tight">
              Train<span className="text-brand">Ball</span>
            </span>
          </Link>
          <LangSwitch lang={lang} />
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-16">
        <Link
          href="/"
          className="text-sm text-foreground/50 transition-colors hover:text-foreground"
        >
          ← {back}
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {policy.title}
        </h1>
        <div className="mt-3 space-y-1 text-sm text-foreground/50">
          {policy.meta.map((m, i) => (
            <p key={i}>{inline(m)}</p>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-2">
          {policy.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm italic text-foreground/45">
          {policy.note}
        </p>
      </main>

      <SiteFooter locale={lang} />
    </div>
  );
}

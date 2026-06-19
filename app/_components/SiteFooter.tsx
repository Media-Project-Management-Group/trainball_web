import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { dictionaries, localePath, type Locale } from "../_i18n/dictionaries";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = dictionaries[locale];
  const home = localePath(locale);

  const productLinks = [
    { href: `${home}#features`, label: t.nav.features },
    { href: `${home}#ai`, label: t.nav.aiCoach },
    { href: `${home}#clubs`, label: t.nav.clubs },
    { href: `${home}#how`, label: t.nav.how },
    { href: `${home}#about`, label: t.nav.about },
    { href: `${home}#faq`, label: t.nav.faq },
  ];

  const moreLinks = [
    { href: "/privacy", label: t.footer.privacy },
    { href: `${home}#download`, label: t.footer.download },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href={home} className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight">
                Train<span className="text-brand">Ball</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-foreground/55">
              {t.footer.tagline}
            </p>
            <LanguageSwitcher locale={locale} className="mt-5" />
          </div>

          <nav aria-label={t.footer.product}>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/45">
              {t.footer.product}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.more}>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/45">
              {t.footer.more}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-foreground/45 sm:flex-row">
          <p>{t.footer.rights}</p>
          <p>{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}

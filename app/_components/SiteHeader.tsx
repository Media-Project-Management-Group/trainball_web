"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { dictionaries, localePath, type Locale } from "../_i18n/dictionaries";

const APP_STORE_URL = "https://apps.apple.com/uz/app/trainball/id6747034373";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = dictionaries[locale].nav;
  const home = localePath(locale);

  const navLinks = [
    { href: "#features", label: t.features },
    { href: "#ai", label: t.aiCoach },
    { href: "#clubs", label: t.clubs },
    { href: "#how", label: t.how },
    { href: "#faq", label: t.faq },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link
          href={home}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo className="h-8 w-8" priority />
          <span className="text-lg font-semibold tracking-tight">
            Train<span className="text-brand">Ball</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-foreground/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-foreground after:absolute
                after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand
                after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher locale={locale} className="hidden sm:inline-flex" />

          <a
            href="#download"
            className="hidden rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-background
              shadow-lg shadow-brand/20 transition-all hover:-translate-y-0.5 hover:shadow-brand/30
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
          >
            {t.getApp}
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border
              bg-white/[0.04] text-foreground transition-colors hover:bg-white/[0.08]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-16 z-40 lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={panelRef}
          id="mobile-menu"
          className={`absolute inset-x-3 top-3 origin-top rounded-2xl border border-border
            bg-background/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-4 scale-[0.98] opacity-0"
            }`}
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80
                  transition-colors hover:bg-white/[0.06] hover:text-foreground
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex items-center justify-between gap-3 border-t border-border px-1 pt-3">
            <LanguageSwitcher locale={locale} />
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-background
                transition-transform active:scale-[0.98] focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.getApp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

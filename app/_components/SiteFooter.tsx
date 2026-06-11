import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <a href="/" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="font-semibold">
            Train<span className="text-brand">Ball</span>
          </span>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
          <a href="/#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="/#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="/#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
        </div>
        <p className="text-sm text-foreground/45">
          © 2026 TrainBall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

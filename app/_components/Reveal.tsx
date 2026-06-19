"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "zoom"
  | "blur"
  | "flip"
  | "tilt-left"
  | "tilt-right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the element travels in from. */
  from?: RevealDirection;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

export function Reveal({
  children,
  className = "",
  from = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);

    // Failsafe: never leave on-screen content stuck hidden if the
    // observer's first callback is missed (e.g. layout/HMR timing).
    const failsafe = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setShown(true);
    }, 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-from={from}
      data-shown={shown ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}

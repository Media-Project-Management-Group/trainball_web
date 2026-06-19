import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/uz/app/trainball/id6747034373";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=uz.uzfootball.akademiya";

interface StoreButtonsProps {
  className?: string;
  /** Eager-load the store icons when rendered above the fold. */
  priority?: boolean;
}

export function StoreButtons({
  className = "",
  priority = false,
}: StoreButtonsProps) {
  const loading = priority ? "eager" : "lazy";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download TrainBall on the App Store"
        className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl
          bg-foreground px-5 font-medium text-background shadow-lg shadow-black/30
          transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60
          focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
      >
        <Image
          src="/apple.svg"
          alt=""
          width={26}
          height={26}
          unoptimized
          loading={loading}
          className="h-6 w-6"
        />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium uppercase tracking-wider opacity-70">
            Download on the
          </span>
          <span className="block text-[15px] font-semibold">App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get TrainBall on Google Play"
        className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl
          border border-border bg-white/[0.04] px-5 font-medium text-foreground
          backdrop-blur transition-all duration-200 hover:-translate-y-0.5
          hover:border-brand/40 hover:bg-white/[0.07] focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          focus-visible:ring-offset-background active:scale-[0.98]"
      >
        <Image
          src="/google.svg"
          alt=""
          width={26}
          height={26}
          unoptimized
          loading={loading}
          className="h-6 w-6"
        />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium uppercase tracking-wider opacity-70">
            Get it on
          </span>
          <span className="block text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

import Image from "next/image";

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/trainball-logo.png"
      alt="TrainBall logo"
      width={128}
      height={128}
      priority={priority}
      className={`rounded-[22%] ${className}`}
    />
  );
}

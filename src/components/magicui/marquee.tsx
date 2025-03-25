import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)] motion-safe:animate-marquee",
              {
                "flex-row": !vertical,
                "flex-col": vertical,
                "group-hover:motion-safe:[animation-play-state:paused]":
                  pauseOnHover,
                "motion-safe:[animation-direction:reverse]": reverse,
                "motion-safe:animate-marquee": !vertical,
                "motion-safe:animate-marquee-vertical": vertical,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

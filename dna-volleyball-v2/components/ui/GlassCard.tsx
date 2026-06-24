import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  featured?: boolean;
};

export default function GlassCard({
  children,
  featured = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        glass-card
        rounded-[32px]
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_0_70px_rgba(168,85,247,.22)]
        ${
          featured
            ? "border-2 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,.20)]"
            : ""
        }
      `}
    >
      {children}
    </div>
  );
}

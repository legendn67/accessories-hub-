import { motion } from "motion/react";

export function Marquee({
  text,
  inverted = false,
  className = "",
}: {
  text: string;
  inverted?: boolean;
  className?: string;
}) {
  const bgColor = inverted ? "bg-primary" : "bg-secondary-fixed";
  const textColor = inverted ? "text-on-primary" : "text-primary";

  return (
    <div
      className={`py-4 overflow-hidden border-y border-outline-variant flex ${bgColor} ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap min-w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {/* Repeat enough times to fill screen twice */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`font-label-caps text-label-caps mx-8 uppercase ${textColor}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

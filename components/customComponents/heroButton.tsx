import { useEffect, useState, ReactNode } from "react";

interface HeroButtonProps {
  children: ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  href?: string;
  onclick?: () => void;
  disabled?: boolean;
}

export default function HeroButton({
  children,
  className = "",
  gradientFrom = "#6e00ff",
  gradientTo = "#4500ff0a",
  href,
  onclick,
  disabled
}: HeroButtonProps) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className={`relative backdrop-blur-md text-white px-8 py-4 rounded-2xl border-[1px] border-[#ffffff26] bo text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 before:absolute before:-inset-2 before:rounded-xl before:bg-gradient-to-r before:from-${gradientFrom} before:to-${gradientTo} before:blur-2xl before:opacity-50 before:-z-10 ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${gradientFrom}, ${gradientTo})`,
        boxShadow: `0 15px 35px rgba(110, 0, 255, 0.4)`,
      }}
      onClick={onclick}
      disabled={disabled}
    >
     { href ? (<a href={href } className="flex flex-row gap-x-2">{children}</a>) : <span className="flex flex-row gap-x-2">{children}</span>}
    </button>
  );
}

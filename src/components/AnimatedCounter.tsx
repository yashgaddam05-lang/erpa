"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({ value, label, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    // Extract numeric part and suffix
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numStr = match[1].replace(/,/g, "");
    const suffix = match[2];
    const target = parseFloat(numStr);
    const isDecimal = numStr.includes(".");
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isDecimal) {
        setDisplayValue(current.toFixed(1) + suffix);
      } else if (target >= 1000) {
        setDisplayValue(Math.round(current).toLocaleString() + suffix);
      } else {
        setDisplayValue(Math.round(current) + suffix);
      }

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div ref={ref} className={className}>
      <div className="text-3xl sm:text-4xl font-bold text-erpa-orange tabular-nums">
        {visible ? displayValue : "0"}
      </div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}

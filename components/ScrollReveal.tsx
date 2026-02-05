"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("revealed");
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, rootMargin]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}

// Wrapper component for staggered children animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  style?: React.CSSProperties;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  threshold = 0.1,
  style,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = container.querySelectorAll(".stagger-item");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("revealed");
              }, index * staggerDelay);
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [staggerDelay, threshold]);

  return (
    <div ref={ref} className={`stagger-container ${className}`} style={style}>
      {children}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";

// Custom Hook
export const useAnimation = (options = { threshold: 0.1 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current; // DOM Ref
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target); // Stop observing once visible
      }
    }, options);

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

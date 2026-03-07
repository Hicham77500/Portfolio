"use client";

import { useEffect, useRef, useState } from 'react';

type ActiveSectionOptions = {
  rootMargin?: string;
  threshold?: number;
};

export function useActiveSection(sectionIds: string[], options?: ActiveSectionOptions) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);
  const visibilityRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const resolvedOptions: IntersectionObserverInit = {
      rootMargin: options?.rootMargin ?? '-45% 0px -45% 0px',
      threshold: options?.threshold ?? 0.4,
    };

    sectionIds.forEach((id) => {
      visibilityRef.current[id] = visibilityRef.current[id] ?? false;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibilityRef.current[entry.target.id] = entry.isIntersecting;
      });

      const firstVisible = sectionIds.find((id) => visibilityRef.current[id]);
      if (firstVisible) {
        setActiveId((prev) => (prev === firstVisible ? prev : firstVisible));
      }
    }, resolvedOptions);

    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options?.rootMargin, options?.threshold]);

  return activeId;
}

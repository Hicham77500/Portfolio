"use client";

import { useEffect, useRef, useState } from 'react';

type ActiveSectionOptions = {
  rootMargin?: string;
  thresholds?: number[];
};

const DEFAULT_THRESHOLDS = Array.from({ length: 11 }, (_, index) => index / 10);
const VISIBILITY_THRESHOLD = 0.22;
const MANUAL_HOLD_MS = 900;

export function useActiveSection(sectionIds: string[], options?: ActiveSectionOptions) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);
  const visibilityRef = useRef<Record<string, number>>({});
  const manualRef = useRef<{ id: string | null; timeoutId: number | null }>({ id: null, timeoutId: null });

  const clearManualOverride = () => {
    if (manualRef.current.timeoutId) {
      window.clearTimeout(manualRef.current.timeoutId);
    }
    manualRef.current = { id: null, timeoutId: null };
  };

  const setManualActiveSection = (nextId: string) => {
    clearManualOverride();
    setActiveId(nextId);
    manualRef.current = {
      id: nextId,
      timeoutId: window.setTimeout(() => {
        manualRef.current = { id: null, timeoutId: null };
      }, MANUAL_HOLD_MS),
    };
  };

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const resolvedOptions: IntersectionObserverInit = {
      rootMargin: options?.rootMargin ?? '-30% 0px -55% 0px',
      threshold: options?.thresholds ?? DEFAULT_THRESHOLDS,
    };

    sectionIds.forEach((id) => {
      visibilityRef.current[id] = visibilityRef.current[id] ?? 0;
    });

    const lastSectionId = sectionIds[sectionIds.length - 1] ?? null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibilityRef.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      const manualTargetId = manualRef.current.id;
      if (manualTargetId) {
        const ratio = visibilityRef.current[manualTargetId] ?? 0;
        if (ratio >= VISIBILITY_THRESHOLD) {
          clearManualOverride();
        } else {
          return;
        }
      }

      if (lastSectionId) {
        const viewportBottom = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement?.scrollHeight ?? 0;
        if (docHeight > 0 && viewportBottom >= docHeight - 2) {
          setActiveId((prev) => (prev === lastSectionId ? prev : lastSectionId));
          return;
        }
      }

      const firstVisible = sectionIds.find((id) => (visibilityRef.current[id] ?? 0) >= VISIBILITY_THRESHOLD);
      if (firstVisible) {
        setActiveId((prev) => (prev === firstVisible ? prev : firstVisible));
        return;
      }

      const fallbackId = [...sectionIds].reverse().find((id) => {
        const element = document.getElementById(id);
        return element ? element.getBoundingClientRect().top < window.innerHeight / 2 : false;
      });

      if (fallbackId) {
        setActiveId((prev) => (prev === fallbackId ? prev : fallbackId));
      }
    }, resolvedOptions);

    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
    clearManualOverride();
  }, [sectionIds, options?.rootMargin, options?.thresholds]);

  return [activeId, setManualActiveSection] as const;
}

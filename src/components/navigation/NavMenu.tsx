'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export type NavSection = { id: string; label: string; href: string; hint?: string };

type NavMenuProps = {
  sections: readonly NavSection[];
  activeId?: string | null;
  onSectionSelect?: (sectionId: string) => void;
};

export function NavMenu({ sections, activeId = null, onSectionSelect }: NavMenuProps) {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const renderItems = (onNavigate?: () => void) =>
    sections.map((section) => {
      const isActive = section.id === activeId;
      const handleClick = () => {
        onSectionSelect?.(section.id);
        onNavigate?.();
      };
      return (
        <li key={section.id}>
          <Link
            href={section.href}
            aria-current={isActive ? 'true' : undefined}
            className={`relative flex items-center justify-between rounded-pill px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
              isActive ? 'text-accent' : 'text-text-muted hover:text-text'
            }`}
            onClick={handleClick}
          >
            <span>{section.label}</span>
            {section.hint && <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted/60">{section.hint}</span>}
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 -z-10 rounded-pill bg-surface-raised"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                aria-hidden="true"
              />
            )}
          </Link>
        </li>
      );
    });

  useEffect(() => {
    if (!isOverlayOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOverlayOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOverlayOpen]);

  useEffect(() => {
    if (isOverlayOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
    if (!isOverlayOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOverlayOpen]);

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOverlayOpen]);

  const overlayNavId = 'mobile-nav';

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className="hidden h-fit w-[256px] flex-shrink-0 flex-col rounded-3xl border border-border bg-surface p-4 text-text shadow-soft lg:flex lg:sticky lg:top-6 lg:self-start"
      >
        <ul className="flex flex-col gap-2">{renderItems()}</ul>
      </nav>

      <div className="w-full lg:hidden">
        <button
          ref={triggerRef}
          type="button"
          className="inline-flex items-center gap-2 rounded-pill border border-border px-4 py-2 text-sm text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          aria-controls={overlayNavId}
          aria-expanded={isOverlayOpen}
          onClick={() => setOverlayOpen((prev) => !prev)}
        >
          Menu
          <span aria-hidden="true">=</span>
        </button>
        <AnimatePresence>
          {isOverlayOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-surface/95 px-6 py-10 text-text backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-display">Navigation</h2>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOverlayOpen(false)}
                  className="rounded-pill border border-border px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  Fermer
                </button>
              </div>
              <nav id={overlayNavId} aria-label="Navigation mobile" className="mt-8">
                <ul className="space-y-4">{renderItems(() => setOverlayOpen(false))}</ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

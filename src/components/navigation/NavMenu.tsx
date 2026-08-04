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
            className={`relative flex items-center justify-between rounded-[3px] px-4 py-2 text-sm font-mono transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
              isActive
                ? 'text-accent'
                : 'text-text-muted hover:text-text hover:bg-surface/60'
            }`}
            onClick={handleClick}
          >
            <span className="flex items-center gap-2">
              <span className={`text-[10px] transition-opacity ${isActive ? 'opacity-100 text-accent/60' : 'opacity-0'}`} aria-hidden="true">▸</span>
              {section.label}
            </span>
            {section.hint && (
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-text-muted/50">
                {section.hint}
              </span>
            )}
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 -z-10 rounded-[3px] bg-surface-raised border border-accent/15"
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
        className="hidden h-fit w-[256px] flex-shrink-0 flex-col rounded-[6px] border border-border bg-surface p-4 text-text shadow-soft lg:flex lg:sticky lg:top-6 lg:self-start"
      >
        {/* Nav header */}
        <div className="mb-3 border-b border-border/40 pb-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.38em] text-accent/45">
            [ SYS.NAV ]
          </p>
        </div>
        <ul className="flex flex-col gap-0.5">{renderItems()}</ul>
        {/* Status footer */}
        <div className="mt-3 border-t border-border/40 pt-3">
          <span className="status-dot font-mono text-[9px] uppercase tracking-[0.22em] text-[#4a8a3e]/55">
            SYS OPÉRATIONNEL
          </span>
        </div>
      </nav>

      <div className="w-full lg:hidden">
        <button
          ref={triggerRef}
          type="button"
          className="inline-flex items-center gap-2 rounded-[3px] border border-border/60 bg-surface px-4 py-2 font-mono text-sm uppercase tracking-[0.1em] text-text-muted transition hover:border-accent/30 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          aria-controls={overlayNavId}
          aria-expanded={isOverlayOpen}
          onClick={() => setOverlayOpen((prev) => !prev)}
        >
          <span>[ MENU ]</span>
          <span aria-hidden="true" className="text-accent/60 text-xs">▸</span>
        </button>
        <AnimatePresence>
          {isOverlayOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-[#04060a]/97 px-6 py-10 text-text backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent/45 mb-1">
                    [ SYS.NAV ]
                  </p>
                  <h2 className="font-display text-lg font-semibold text-text">Navigation</h2>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOverlayOpen(false)}
                  className="rounded-[3px] border border-border/60 px-4 py-2 font-mono text-sm uppercase tracking-[0.1em] text-text-muted transition hover:border-accent/30 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  Fermer
                </button>
              </div>
              <nav id={overlayNavId} aria-label="Navigation mobile" className="mt-6">
                <ul className="space-y-2">{renderItems(() => setOverlayOpen(false))}</ul>
              </nav>
              <div className="mt-8 pt-4 border-t border-border/30">
                <span className="status-dot font-mono text-[9px] uppercase tracking-[0.22em] text-[#4a8a3e]/55">
                  SYS OPÉRATIONNEL
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

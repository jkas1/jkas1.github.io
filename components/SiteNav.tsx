"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { WRAP } from "@/lib/layout";

type NavLink = {
  href: string;
  label: string;
  contact?: true;
};

const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact", contact: true },
];

/** Overlay nav through this width; inline nav from 768px (Tailwind `md`). */
const MOBILE_NAV_MQ = "(max-width: 767px)";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const overlayId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const onChange = () => {
      const matches = mq.matches;
      setMobileNav(matches);
      if (!matches) {
        setOpen(false);
        document.documentElement.classList.remove("nav-overlay-open");
        document.body.classList.remove("nav-overlay-open");
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const syncOverlayOpenClass = useCallback((enabled: boolean) => {
    document.documentElement.classList.toggle("nav-overlay-open", enabled);
    document.body.classList.toggle("nav-overlay-open", enabled);
  }, []);

  const openMenu = useCallback(() => {
    if (!window.matchMedia(MOBILE_NAV_MQ).matches) return;
    syncOverlayOpenClass(true);
    setOpen(true);
  }, [syncOverlayOpenClass]);

  const close = useCallback(() => {
    setOpen(false);
    syncOverlayOpenClass(false);
  }, [syncOverlayOpenClass]);

  useEffect(
    () => () => {
      syncOverlayOpenClass(false);
    },
    [syncOverlayOpenClass],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <nav
      className="nav mono relative z-[2] py-5 sm:py-[26px] text-[11px] tracking-[0.2em] uppercase max-sm:text-[10px] max-sm:tracking-[0.14em]"
      aria-label="Site"
    >
      <div className={`${WRAP} flex items-center justify-between gap-4`}>
        <Link
          href="/"
          className="nl nl-ice inline-flex items-center gap-2.5"
          aria-label="Julie Kasparian, home"
        >
          JK {"//"} Portfolio
        </Link>

        <div className="nav-inline-links hidden items-center gap-x-5 md:flex lg:gap-x-7">
          {NAV_LINKS.map((link) =>
            link.contact ? (
              <Link
                key={link.href}
                className="btn ghost border border-ice px-[18px] py-2.5 text-ice transition hover:bg-ice/15 hover:shadow-[var(--box-shadow-btn-glow)]"
                href={link.href}
              >
                {link.label}
              </Link>
            ) : (
              <Link key={link.href} className="nl" href={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          className={`nav-menu-btn md:hidden ${open ? "nav-menu-btn--hidden" : ""}`}
          aria-expanded={open}
          aria-controls={overlayId}
          aria-label="Open menu"
          onClick={openMenu}
        >
          <span className="nav-menu-btn-icon" aria-hidden />
        </button>
      </div>

      {mounted && mobileNav
        ? createPortal(
            <div
              id={overlayId}
              className={`nav-overlay ${open ? "nav-overlay--open" : ""}`}
              aria-hidden={!open}
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <div className="nav-overlay-top py-5 sm:py-[26px]">
                <div className={`${WRAP} flex justify-end`}>
                  <button
                    type="button"
                    className="nav-overlay-close"
                    aria-label="Close menu"
                    onClick={close}
                  >
                    <span className="nav-menu-btn-icon nav-menu-btn-icon--close" aria-hidden />
                  </button>
                </div>
              </div>
              <nav className="nav-overlay-panel" aria-label="Mobile">
                <ul className="nav-overlay-list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href} className={link.contact ? "nav-overlay-item--contact" : undefined}>
                      <Link
                        href={link.href}
                        className={
                          link.contact ? "nav-overlay-link nav-overlay-link--contact" : "nav-overlay-link"
                        }
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </nav>
  );
}
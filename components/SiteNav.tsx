"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
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

const MOBILE_NAV_MQ = "(max-width: 767px)";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuRootRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const onChange = () => {
      if (!mq.matches) close();
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (e.target instanceof Node && menuRootRef.current?.contains(e.target)) return;
      close();
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, close]);

  return (
    <nav
      className="nav mono relative z-[30] py-5 sm:py-[26px] text-[11px] tracking-[0.2em] uppercase max-sm:text-[10px] max-sm:tracking-[0.14em]"
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

        <div ref={menuRootRef} className="nav-mobile-menu relative md:hidden">
          <button
            type="button"
            className="nav-menu-btn"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span
              className={`nav-menu-btn-icon ${open ? "nav-menu-btn-icon--close" : ""}`}
              aria-hidden
            />
          </button>

          <div
            id={menuId}
            className={`nav-dropdown ${open ? "nav-dropdown--open" : ""}`}
            role="navigation"
            aria-label="Mobile"
            aria-hidden={!open}
          >
            <ul className="nav-dropdown-list">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className={link.contact ? "nav-dropdown-item--contact" : undefined}
                >
                  <Link
                    href={link.href}
                    className={
                      link.contact
                        ? "nav-dropdown-link nav-dropdown-link--contact"
                        : "nav-dropdown-link"
                    }
                    onClick={close}
                    tabIndex={open ? undefined : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
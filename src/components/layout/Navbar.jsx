import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../common/Container";
import logo from "../../assets/hotline-logo.png";

// Change these once the client's real details are ready
const COMPANY_NAME = "Hotline Engineering";
const PHONE = "+92333 6600766";
const EMAIL = "Hotlineengineeringco@gmail.com";

const productLinks = [
  { label: "Sweets Machinery", href: "/#products" },
  { label: "Bakery Machinery", href: "/#products" },
  { label: "Restaurant Machinery", href: "/#products" },
  { label: "Pizzeria Machinery", href: "/#products" },
];

const serviceLinks = [
  { label: "Maintenance Service", href: "/#services" },
  { label: "Spare Parts Service", href: "/#services" },
  { label: "Special Offers", href: "/#services" },
];

function Chevron({ open = false }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
    </svg>
  );
}

// One dropdown menu for desktop (opens on hover and on keyboard focus)
function DesktopDropdown({ label, links }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
      >
        {label}
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-lg border border-border bg-white p-2 opacity-0 shadow-lg transition duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded-md px-3 py-2 text-base text-ink transition-colors hover:bg-tint hover:text-accent-dark"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// Mobile dropdown accordion inside the sidebar
function MobileDropdown({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-ink hover:text-accent transition-colors"
      >
        <span>{label}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="mb-2 ml-2 space-y-1 border-l-2 border-accent/30 pl-3">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="block rounded-md py-2 px-2 text-sm font-medium text-muted hover:bg-soft hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Stop the page behind the menu from scrolling on phones when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Utility Bar (Scrolls away normally when you scroll down) */}
    <div className="border-b border-border bg-soft/50 text-xs text-muted">
  <Container className="flex flex-wrap sm:flex-nowrap min-h-9 py-1.5 sm:py-0 items-center justify-between gap-2">
    {/* Contact Information */}
    <div className="flex items-center gap-3 sm:gap-6">
      {/* Phone: Compact icon on mobile, full text on sm+ */}
      <a 
        href={`tel:${PHONE}`} 
        className="flex items-center gap-1.5 hover:text-accent transition-colors"
      >
        <svg className="h-3.5 w-3.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="hidden sm:inline">{PHONE}</span>
      </a>

      {/* Email: Compact icon on mobile, full text on md+ */}
      <a 
        href={`mailto:${EMAIL}`} 
        className="flex items-center gap-1.5 hover:text-accent transition-colors"
      >
        <svg className="h-3.5 w-3.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden md:inline">{EMAIL}</span>
      </a>
    </div>

    {/* Secondary Links & Badges */}
    <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium ml-auto sm:ml-0">
      <a href="/#catalog" className="hover:text-accent transition-colors whitespace-nowrap">
        Download Catalog
      </a>
      <span className="text-border">|</span>
      <span className="text-accent font-semibold truncate max-w-[140px] xs:max-w-none">
        Global Delivery &amp; Support
      </span>
    </div>
  </Container>
</div>

      <header className="sticky top-0 z-50 bg-white">
        <nav
          aria-label="Main"
          className="border-b border-border bg-white shadow-sm"
        >
          <Container className="flex h-[4.5rem] items-center justify-between lg:h-20">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex shrink-0 items-center"
              aria-label={`${COMPANY_NAME} home`}
              onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <img
                src={logo}
                alt={COMPANY_NAME}
                className="h-10 w-auto sm:h-12 lg:h-14"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 lg:flex">
              <Link to="/" className="rounded-md px-3 py-2 text-base font-semibold text-ink transition-colors hover:text-accent" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Home
              </Link>
              <DesktopDropdown label="Products" links={productLinks} />
              <a href="/#catalog" className="rounded-md px-3 py-2 text-base font-semibold text-ink transition-colors hover:text-accent">
                Catalog
              </a>
              <DesktopDropdown label="Services" links={serviceLinks} />
              <a href="/#about" className="rounded-md px-3 py-2 text-base font-semibold text-ink transition-colors hover:text-accent">
                About
              </a>
              <a href="/#contact" className="rounded-md px-3 py-2 text-base font-semibold text-ink transition-colors hover:text-accent">
                Contact
              </a>
            </div>

            {/* Desktop quote button */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-base font-semibold text-white transition-all hover:bg-accent-dark shadow-sm hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Get a Quote</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Phone menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open sidebar menu"
              className="rounded-md p-2 text-ink hover:bg-soft lg:hidden"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </Container>
        </nav>

        {/* Slide-over Mobile Sidebar Drawer & Backdrop */}
        {/* Backdrop overlay appears instantly when the menu opens */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-ink/50 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Right Side Drawer Panel: fades in and slides down ~8px on open,
            fades out on close (0.2s). Reduce-motion users get no movement. */}
        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              key="mobile-menu-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-white shadow-2xl transition-transform"
            >
              {/* Drawer Header */}
              <div className="flex h-18 items-center justify-between border-b border-border px-5">
                <Link
                  to="/"
                  onClick={closeMenu}
                  aria-label={`${COMPANY_NAME} home`}
                  className="flex items-center"
                >
                  <img
                    src={logo}
                    alt={COMPANY_NAME}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-muted hover:bg-soft hover:text-ink transition-colors"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <Link
                  to="/"
                  onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="block border-b border-border/60 py-3.5 text-base font-semibold text-ink hover:text-accent transition-colors"
                >
                  Home
                </Link>

                <MobileDropdown label="Products" links={productLinks} onNavigate={closeMenu} />

                <a
                  href="/#catalog"
                  onClick={closeMenu}
                  className="block border-b border-border/60 py-3.5 text-base font-semibold text-ink hover:text-accent transition-colors"
                >
                  Catalog
                </a>

                <MobileDropdown label="Services" links={serviceLinks} onNavigate={closeMenu} />

                <a
                  href="/#about"
                  onClick={closeMenu}
                  className="block border-b border-border/60 py-3.5 text-base font-semibold text-ink hover:text-accent transition-colors"
                >
                  About
                </a>

                <a
                  href="/#contact"
                  onClick={closeMenu}
                  className="block border-b border-border/60 py-3.5 text-base font-semibold text-ink hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Pinned Bottom CTA & Info Footer */}
              <div className="border-t border-border bg-soft/30 p-5 space-y-4">
                <a
                  href="/#contact"
                  onClick={closeMenu}
                  className="block rounded-lg bg-accent px-5 py-3 text-center text-base font-semibold text-white hover:bg-accent-dark shadow-sm transition-colors"
                >
                  Get a Quote
                </a>
                <div className="space-y-1.5 text-xs text-muted border-t border-border/60 pt-3">
                  <p className="flex items-center gap-2">📞 {PHONE}</p>
                  <p className="flex items-center gap-2">✉️ {EMAIL}</p>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
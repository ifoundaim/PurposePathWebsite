"use client";

import Link from "next/link";
import { useState } from "react";
import RainbowFlowText from "@/components/RainbowFlowText";

const navLinks = [
  { label: "RouteForge", href: "/illustration-market" },
  { label: "Skill Offers", href: "/services" },
  { label: "Throne", href: "https://throne.com/ifoundaim" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="nav-logo" href="/">
          PurposePath
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-links">
          <Link className="button menu-surface" href="/contact-us">
            <RainbowFlowText className="button-label" text="CONTACT US" />
          </Link>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <RainbowFlowText className="menu-label" text="Menu" />
        </button>
      </div>
      <div className={`container mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={`${link.href}-mobile`}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

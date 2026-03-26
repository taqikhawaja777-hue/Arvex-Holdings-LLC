"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-black text-white shadow-md">
      <nav className="flex h-20 w-full items-center justify-between px-4 md:px-8">
        <Link href="/#home" className="flex h-full flex-shrink-0 items-center gap-1.5">
          <Image
            src="/images/logo x.png"
            alt="Company logo"
            width={400}
            height={120}
            priority
            className="h-16 w-14 object-cover object-left md:h-20 md:w-18"
          />
          <span className="hidden whitespace-nowrap text-xl font-semibold tracking-tight md:inline md:text-2xl">
            ARVEX Holdings LLC
          </span>
        </Link>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="gold-underline text-sm uppercase tracking-[0.08em]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-espresso/95 px-6 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.08em] text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

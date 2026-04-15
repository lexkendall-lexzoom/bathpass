"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-snow/90 backdrop-blur-md border-b border-mist">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          bathpass
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/venues" className="text-sm text-ash hover:text-black transition-colors">
            Venues
          </Link>
          <Link href="/membership" className="text-sm text-ash hover:text-black transition-colors">
            Membership
          </Link>
          <Link href="/how-it-works" className="text-sm text-ash hover:text-black transition-colors">
            How It Works
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm text-ash hover:text-black transition-colors">
            Sign In
          </Link>
          <Link href="/membership" className="btn-sage text-sm py-2.5 px-5">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${open ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${open ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist bg-snow px-6 py-5 space-y-4">
          <Link href="/venues" className="block text-sm text-charcoal" onClick={() => setOpen(false)}>Venues</Link>
          <Link href="/membership" className="block text-sm text-charcoal" onClick={() => setOpen(false)}>Membership</Link>
          <Link href="/how-it-works" className="block text-sm text-charcoal" onClick={() => setOpen(false)}>How It Works</Link>
          <div className="pt-4 border-t border-mist">
            <Link href="/membership" className="btn-sage w-full text-center text-sm" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

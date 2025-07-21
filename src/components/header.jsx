"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItem } from "@/lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-600 backdrop-blur supports-[backdrop-filter]:bg-blue-600/100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-bold text-2xl">IServices</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm  font-bold">
          {navItem.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border hover:bg-gray-50"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t  px-4 pb-4">
          <nav className="flex flex-col gap-4 py-4 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white scale-105 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
// sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
// <Image src="/logo.svg" alt="Logo" width={32} height={32} />

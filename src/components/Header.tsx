"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click or Esc
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/TTS-logo-white.png"
            alt="Tana Tech Africa Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="sm:hidden focus:outline-none transition-transform"
        >
          {menuOpen ? (
            <X className="w-6 h-6 transition-transform rotate-90" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:underline transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-neutral-800`}
      >
        <nav className="flex flex-col text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:bg-[#44b2e5] p-4"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

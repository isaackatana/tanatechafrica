"use client";

import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#333] text-white shadow-md relative z-50">
      <nav
        className="py-4 px-6 flex justify-between items-center"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/TTS-logo-white.png"
            alt="Tana Tech Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex space-x-6">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              to={href}
              className={`transition-all hover:underline underline-offset-4 ${
                pathname === href ? "font-semibold text-accent" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      <div
        className={`sm:hidden absolute w-full bg-[#444] px-6 py-4 space-y-4 shadow-md transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            to={href}
            className={`block transition-all hover:underline underline-offset-4 ${
              pathname === href ? "font-semibold text-accent" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

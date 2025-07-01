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
    { name: "Blog", href: "/blog" }, // ✅ Added Blog menu item
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#333]/90 backdrop-blur text-white shadow-md">
      <nav className="py-4 px-6 flex justify-between items-center" aria-label="Main Navigation">
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
        <div className="hidden sm:flex items-center space-x-6">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              to={href}
              className={`relative inline-block pb-1 font-medium transition-colors duration-300 ${
                pathname === href
                  ? "text-accent after:w-full after:bg-accent"
                  : "text-white after:w-0 after:bg-accent"
              } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Sliding Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden bg-[#444] px-6 transition-[max-height,padding] duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="space-y-4">
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
      </div>
    </header>
  );
};

export default Navbar;

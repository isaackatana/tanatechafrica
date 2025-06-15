"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className="bg-[#333] text-white py-4 px-6 flex justify-between items-center shadow-md"
        aria-label="Main Navigation"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/TTS-logo-white.png"
            alt="Tana Tech Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex space-x-6">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[#444] text-white px-6 py-4 space-y-4 shadow-md z-40">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block transition-all hover:underline underline-offset-4 ${
                pathname === href ? "font-semibold text-accent" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;

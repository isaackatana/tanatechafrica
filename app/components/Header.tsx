import { Link } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="bg-neutral-700 border-b p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/TTS-logo-white.png"
            alt="Tana Tech Africa Logo"
            className="h-8 w-auto"
          />
        </Link>
z
        {/* Toggle Button for Mobile */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 text-sm text-white">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        ref={menuRef}
        className={`sm:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-neutral-800 px-4 py-2 space-y-2 text-sm text-white`}
      >
        <Link to="/" className="block hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" className="block hover:underline" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" className="block hover:underline" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/blog" className="block hover:underline" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className="block hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}

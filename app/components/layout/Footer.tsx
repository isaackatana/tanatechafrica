// app/components/Footer.tsx
const Footer = () => (
  <footer className="bg-[#1a1a1a] text-gray-300 text-center px-4 py-6 text-sm sm:text-base">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
      <p className="text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Tana Tech Africa. All rights reserved.
      </p>

      <nav className="flex flex-wrap justify-center space-x-4" aria-label="Footer navigation">
        {/* Uncomment & update when needed */}
        {/* <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a> */}
        {/* <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a> */}
      </nav>
    </div>
  </footer>
);

export default Footer;

// app/components/Footer.tsx
const Footer = () => (
  <footer className="bg-[#1a1a1a] text-gray-300 text-center px-4 py-6 text-sm sm:text-base">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Tana Tech Africa. All rights reserved.
      </p>
      
      {/* Placeholder for future social links or nav */}
      <div className="flex space-x-4">
        {/* Example: */}
        {/* <a href="#" className="hover:text-white transition">Privacy Policy</a> */}
        {/* <a href="#" className="hover:text-white transition">Terms</a> */}
      </div>
    </div>
  </footer>
);

export default Footer;

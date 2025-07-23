"use client";

export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm text-gray-200 bg-neutral-900">
      © {new Date().getFullYear()}{" "}
      <span className="font-medium text-white">Tana Tech Africa</span>. All rights reserved.
    </footer>
  );
}

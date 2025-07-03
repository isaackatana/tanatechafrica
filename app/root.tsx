// app/root.tsx
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStyles from "./tailwind.css";

export const meta: MetaFunction = () => ([
  { title: "Tana Tech Africa — Digital Solutions" },
  {
    name: "description",
    content:
      "Tana Tech Africa offers website & mobile app development, branding, and digital services tailored for businesses in Africa.",
  },
]);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "icon", type: "image/x-icon", href: "/TTS-logo-icon.png" }, // <-- Favicon
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white font-sans">
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <header className="border-b p-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img src="/TTS-logo-white.png" alt="Tana Tech Africa Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">Tana Tech Africa</span>
              </div>
              <nav className="space-x-4 text-sm">
                <a href="/" className="hover:underline">Home</a>
                <a href="/services" className="hover:underline">Services</a>
                <a href="/portfolio" className="hover:underline">Portfolio</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/contact" className="hover:underline">Contact</a>
              </nav>
            </div>
          </header>

          <main className="container mx-auto p-4">
            <Outlet />
          </main>

          <footer className="border-t p-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Tana Tech Africa. All rights reserved.
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

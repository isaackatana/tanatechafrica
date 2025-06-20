import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Import your Tailwind CSS
import tailwindStyles from "~/tailwind.css";

// ✅ Export the stylesheet link
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "icon", type: "image/x-icon", href: "/TTS-logo-icon.png" }
];

export default function App() {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

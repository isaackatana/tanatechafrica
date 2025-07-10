import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Meta,
  Links,
  LiveReload,
  ScrollRestoration,
  Scripts,
  Outlet,
} from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./tailwind.css";

export const meta: MetaFunction = () => [
  { title: "Tana Tech Africa — Digital Solutions" },
  {
    name: "description",
    content:
      "Tana Tech Africa offers website & mobile app development, branding, and digital services tailored for businesses in Africa.",
  },
];

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: "/TTS-logo-icon.png" },
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
          <Header />
          <main className="container mx-auto p-4">
            <Outlet />
          </main>
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

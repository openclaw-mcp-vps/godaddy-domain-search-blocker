import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainShield – Block Domain Sniping",
  description: "Browser extension that blocks domain registrars from seeing your searches. Protect your domain research from snipers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1359b822-26bd-45e2-a8dd-5eef7ff28215"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}

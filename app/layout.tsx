import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RCC - Customer Journey",
  description: "RCC Customer Journey Overview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

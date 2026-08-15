import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CowPay",
  description: "Pide, divide la cuenta y paga desde tu mesa.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
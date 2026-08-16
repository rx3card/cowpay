import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CowPay",
  description: "Proyecto de la etapa lectica (SENA)",
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
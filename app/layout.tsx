import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vineet Burugu",
  description: "Personal website of Vineet Burugu",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--montserrat",
  weight: "100 900",
});
const montserratItalic = localFont({
  src: "./fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--montserrat-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Auto Jansen Car Dealer | Dashboard",
  description: "Auto Jansen Car Dealer Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${montserrat.variable} ${montserratItalic.variable} antialiased`}
      >
        <div className="font-[family-name:var(--montserrat)]">{children}</div>
      </body>
    </html>
  );
}

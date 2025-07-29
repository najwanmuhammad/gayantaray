import type { Metadata } from "next";
import { Sofia_Sans_Condensed, Red_Hat_Text } from "next/font/google";
import "./globals.css";

// fontHeading
const sofiaSansCondensed = Sofia_Sans_Condensed({
  variable: "--font-sofia-sans-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// fontBody
const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "GAMANTARAY UGM",
  description: "Gadjah Mada Marine and Naval Technology Advanced Research Activity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={`${sofiaSansCondensed.variable} ${redHatText.variable} antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Renish Mansara — UI/UX Designer & Product Thinker",
  description:
    "Designing digital products that are clear, usable, and conversion focused. Portfolio of Renish Mansara featuring selected work, case studies, and design services.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Web Design",
    "Interaction Design",
    "Renish Mansara",
    "Portfolio",
  ],
  authors: [{ name: "Renish Mansara" }],
  icons: {
    icon: "/images/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#F9F9F9] text-neutral-900 overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

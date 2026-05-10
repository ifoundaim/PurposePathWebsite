import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const purposePathLogoUrl =
  "https://raw.githubusercontent.com/ifoundaim/PurposePathWebsite/main/public/brand/purposepath-mark-matte.png";

export const metadata: Metadata = {
  title: "PurposePath Multimedia",
  description:
    "PurposePath is an AI-native multimedia studio and product venture building tools and worlds that let small teams create big stories.",
  icons: {
    icon: purposePathLogoUrl,
    apple: purposePathLogoUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="site">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const purposePathLogoUrl =
  "https://raw.githubusercontent.com/ifoundaim/PurposePathWebsite/main/public/brand/purposepath-mark-transparent.png";

export const metadata: Metadata = {
  title: "PurposePath Corp | Technology for human agency",
  description:
    "PurposePath Corp builds liberated, ultra-customizable, consent-based technology across creator infrastructure, consumer AI, and digital experiences.",
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
      <body>
        <div className="site">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

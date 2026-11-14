import "./bootstrap.purged.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";
import { asset } from "../lib/asset";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://medicineandislam.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Initiative on Islam & Medicine",
    template: "%s",
  },
  description: "Instilling Hikmah in Healthcare — research, education, consultation and speaking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ "--iim-pattern": `url("${asset("/images/islamic-pattern.svg")}")` }}>
      <head>
        <link rel="preload" as="font" type="font/woff2" href={asset("/fonts/v24-kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2")} crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href={asset("/fonts/v17-rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2")} crossOrigin="anonymous" />
        <link rel="stylesheet" href={asset("/fonts/fonts.css")} />
        <link rel="stylesheet" href={asset("/vendor/fontawesome/fa.min.css")} />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}

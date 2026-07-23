import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "SEO & Branding for Creators | Velvety Digital",
    template: "%s | Velvety Digital",
  },
  description:
    "Velvety Digital helps OnlyFans, Fansly and independent adult content creators grow with SEO, branding, email marketing and audience ownership strategies — legally and discreetly.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      {/*
        suppressHydrationWarning on <html> prevents React from complaining
        about data-theme being updated client-side by useTheme.
      */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

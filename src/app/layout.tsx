import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const url = process.env.SITE_URL;

export const metadata = {
  icons: {
    shortcut: `${url}/images/icons/favicon-16x16.png`,
    apple: `${url}/images/icons/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  flex flex-col min-h-screen dark `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

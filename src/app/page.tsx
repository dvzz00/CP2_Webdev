import { Metadata } from "next";
import My from "../components/My";

const url = process.env.SITE_URL;

export const metadata: Metadata = {
  title: "Eu",
  openGraph: {
    type: "website",
    title: "Eu",
    images: `${url}/images/og-image.jpg`,
    url: process.env.SITE_URL!,
  },

  alternates: {
    canonical: process.env.SITE_URL!,
  },
};

export default function Home() {
  return (
    <main className="px-5 md:px-0 max-w-[815px] mx-auto flex-1">
      <My />
    </main>
  );
}

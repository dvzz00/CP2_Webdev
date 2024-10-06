import Contato from "@/components/Contato";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contato`,
  openGraph: {
    type: "website",
    title: `Contato`,
  },
  alternates: {
    canonical: `${process.env.SITE_URL}/contato`,
  },
  robots: "noindex, nofollow",
};

const ContatoPage = () => {
  return <Contato />;
};

export default ContatoPage;

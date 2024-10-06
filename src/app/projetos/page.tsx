import Projetos from "@/components/Projetos";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projetos`,
  alternates: {
    canonical: `${process.env.SITE_URL}/projetos`,
  },
  robots: "noindex, nofollow",
};

const ProjetosPage = () => {
  return <Projetos />;
};

export default ProjetosPage;

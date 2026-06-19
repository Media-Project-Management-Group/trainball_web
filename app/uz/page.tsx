import type { Metadata } from "next";
import { Landing } from "../_components/Landing";
import { dictionaries } from "../_i18n/dictionaries";

const t = dictionaries.uz;

export const metadata: Metadata = {
  title: { absolute: t.meta.title },
  description: t.meta.description,
  alternates: {
    canonical: "/uz",
    languages: { en: "/", ru: "/ru", uz: "/uz", "x-default": "/" },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    locale: "uz_UZ",
  },
};

export default function Page() {
  return <Landing locale="uz" />;
}

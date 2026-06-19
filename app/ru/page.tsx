import type { Metadata } from "next";
import { Landing } from "../_components/Landing";
import { dictionaries } from "../_i18n/dictionaries";

const t = dictionaries.ru;

export const metadata: Metadata = {
  title: { absolute: t.meta.title },
  description: t.meta.description,
  alternates: {
    canonical: "/ru",
    languages: { en: "/", ru: "/ru", uz: "/uz", "x-default": "/" },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    locale: "ru_RU",
  },
};

export default function Page() {
  return <Landing locale="ru" />;
}

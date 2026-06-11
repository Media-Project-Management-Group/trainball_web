import type { Metadata } from "next";
import { PrivacyPolicy } from "../PrivacyPolicy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — TrainBall",
  description:
    "Политика конфиденциальности мобильного приложения TrainBall: какие данные мы собираем, как мы их используем и ваши права.",
  alternates: {
    languages: {
      uz: "/privacy",
      ru: "/privacy/ru",
    },
  },
};

export default function Page() {
  return <PrivacyPolicy lang="ru" />;
}

import type { Metadata } from "next";
import { PrivacyPolicy } from "./PrivacyPolicy";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati — TrainBall",
  description:
    "TrainBall mobil ilovasining maxfiylik siyosati: qaysi ma'lumotlarni to‘playmiz, ulardan qanday foydalanamiz va sizning huquqlaringiz.",
  alternates: {
    languages: {
      uz: "/privacy",
      ru: "/privacy/ru",
    },
  },
};

export default function Page() {
  return <PrivacyPolicy lang="uz" />;
}

export type Locale = "en" | "ru" | "uz";

export const LOCALES: Locale[] = ["uz", "ru", "en"];

export const LOCALE_LABELS: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

/** Path prefix for each locale. English is the root. */
export function localePath(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}`;
}

type IconKey =
  | "radar"
  | "program"
  | "video"
  | "chart"
  | "rating"
  | "regions"
  | "camera"
  | "health"
  | "trophy";

interface Feature {
  icon: IconKey;
  title: string;
  body: string;
}

interface Step {
  n: string;
  title: string;
  body: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Faq {
  q: string;
  a: string;
}

interface ChatLine {
  from: "coach" | "you";
  text: string;
}

export interface Dict {
  meta: { title: string; description: string };
  nav: {
    features: string;
    aiCoach: string;
    clubs: string;
    how: string;
    about: string;
    faq: string;
    getApp: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    trust: string[];
  };
  stats: Stat[];
  featuresSection: { eyebrow: string; title: string; subtitle: string };
  features: Feature[];
  aiCoach: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    chatName: string;
    chatStatus: string;
    chat: ChatLine[];
  };
  howSection: { eyebrow: string; title: string; subtitle: string };
  steps: Step[];
  scouting: {
    eyebrow: string;
    title: string;
    subtitle: string;
    players: { title: string; items: string[] };
    clubs: { title: string; items: string[] };
    steps: { title: string; body: string }[];
    leaderboardTitle: string;
    leaderboardNote: string;
  };
  about: { title: string; body: string };
  faqSection: { eyebrow: string; title: string };
  faqs: Faq[];
  cta: { title: string; subtitle: string };
  footer: {
    tagline: string;
    product: string;
    more: string;
    privacy: string;
    download: string;
    rights: string;
    made: string;
  };
}

const en: Dict = {
  meta: {
    title: "TrainBall — Superpower Systemized Sport Platform",
    description:
      "TrainBall turns football practice into measurable progress with AI skill analysis, individual programs, real-time monitoring, an XP rating, 14-region rankings and direct applications to professional clubs.",
  },
  nav: {
    features: "Features",
    aiCoach: "AI Coach",
    clubs: "Clubs",
    how: "How it works",
    about: "About",
    faq: "FAQ",
    getApp: "Get the app",
  },
  hero: {
    badge: "Superpower systemized sport platform",
    titleLead: "Train, get rated,",
    titleHighlight: "get signed.",
    subtitle:
      "TrainBall turns football practice into measurable progress. AI analyzes your skill, builds your plan, and an XP rating opens the door to professional clubs — one workout at a time.",
    trust: ["Free to start", "AI-powered", "iOS & Android"],
  },
  stats: [
    { value: "AI", label: "Skill analysis" },
    { value: "14", label: "Regions ranked" },
    { value: "100+", label: "Drills & videos" },
    { value: "iOS", label: "& Android" },
  ],
  featuresSection: {
    eyebrow: "Features",
    title: "Everything you need to train like a pro",
    subtitle:
      "A complete, systemized platform that turns scattered practice into a measurable, scoutable path.",
  },
  features: [
    {
      icon: "radar",
      title: "AI Skill Analysis",
      body: "TrainBall's AI analyzes every player's level across six core attributes and maps them on a living skill radar that grows as you train.",
    },
    {
      icon: "program",
      title: "Individual Programs & Video",
      body: "Personalized training plans plus step-by-step video lessons, tailored to your position and level.",
    },
    {
      icon: "chart",
      title: "Real-time Monitoring",
      body: "Track each player's development online, in real time, from any device — progress you can actually see.",
    },
    {
      icon: "rating",
      title: "XP & Rating System",
      body: "Earn XP every session, climb the rating, and surface as one of the most talented players on the platform.",
    },
    {
      icon: "regions",
      title: "14-Region Rankings",
      body: "See exactly where you stand with top-player rankings across all 14 regions of the country.",
    },
    {
      icon: "camera",
      title: "Record & Review",
      body: "Capture your reps with the camera, replay your form and let the AI help sharpen your technique.",
    },
  ],
  aiCoach: {
    eyebrow: "AI Coach",
    title: "Your personal AI coach, in your pocket",
    subtitle:
      "TrainBall's AI analyzes your level, builds your plan and corrects your technique — like a private trainer that's always on.",
    bullets: [
      "AI skill-level analysis from every session",
      "Individual plans and step-by-step video lessons",
      "Real-time feedback on your technique",
      "Always-on motivation to keep your streak alive",
    ],
    chatName: "AI Coach",
    chatStatus: "Online",
    chat: [
      { from: "coach", text: "Ready for today? 20 min finishing — 3 drills." },
      { from: "you", text: "Let's go 💪" },
      { from: "coach", text: "Nice strike! Plant your foot closer to the ball next time." },
    ],
  },
  howSection: {
    eyebrow: "How it works",
    title: "Three steps to a stronger game",
    subtitle: "TrainBall keeps your development simple, structured and measurable.",
  },
  steps: [
    {
      n: "01",
      title: "Build your profile",
      body: "Tell TrainBall your position, level and what you want to improve.",
    },
    {
      n: "02",
      title: "Train with AI",
      body: "Follow your AI-built program of guided drills and video lessons.",
    },
    {
      n: "03",
      title: "Climb & get scouted",
      body: "Earn XP, rise in the rankings and apply to professional clubs.",
    },
  ],
  scouting: {
    eyebrow: "Scouting & Clubs",
    title: "Train, get discovered, get signed",
    subtitle:
      "TrainBall fully digitizes scouting. Earn your rating, apply directly to professional clubs and get invited to real trials.",
    players: {
      title: "For players",
      items: [
        "Build a verified, AI-analyzed profile",
        "Climb the XP rating and your regional ranking",
        "Apply directly to professional clubs",
        "Get invited to trials and chat with scouts",
      ],
    },
    clubs: {
      title: "For clubs",
      items: [
        "Discover talent by age, region and rating",
        "Browse verified, data-backed player profiles",
        "Invite shortlisted players to trials and tests",
        "Run the entire scouting process in one place",
      ],
    },
    steps: [
      { title: "Apply", body: "Send your verified profile straight to professional clubs." },
      { title: "Get matched", body: "Clubs filter talent by age, region and rating to find you." },
      { title: "Trial invite", body: "Selected players are invited to a club trial or test." },
      { title: "Chat & sign", body: "Message scouts directly and take the next step." },
    ],
    leaderboardTitle: "Regional leaderboard",
    leaderboardNote: "Top talents · live XP",
  },
  about: {
    title: "Built for players who want to get serious",
    body: "TrainBall was created on a simple idea: progress should be felt, seen and rewarded. By systemizing the way you practice — AI analysis, clear programs, an XP rating and a fully digital path to professional clubs — it gives every player, from grassroots to academy, a real framework to unlock their superpower on the pitch.",
  },
  faqSection: { eyebrow: "FAQ", title: "Questions, answered" },
  faqs: [
    {
      q: "Is TrainBall free to use?",
      a: "Yes — TrainBall is free to start. Download it on iOS or Android and begin your first AI-built session today, no equipment required.",
    },
    {
      q: "How does the AI skill analysis work?",
      a: "As you complete sessions and log reps, the AI maps six core attributes — pace, shooting, passing, dribbling, defense and stamina — onto a living radar and turns them into an XP rating.",
    },
    {
      q: "Can I really apply to professional clubs?",
      a: "Yes. Your verified profile and rating can be sent directly to professional clubs, who can filter talent by age and region and invite you to a trial.",
    },
    {
      q: "What are the 14-region rankings?",
      a: "TrainBall ranks top players across all 14 regions of the country, so clubs and players can see who's rising where.",
    },
    {
      q: "Which devices are supported?",
      a: "TrainBall runs on both iPhone and Android. Your profile, rating and progress stay in sync across devices.",
    },
  ],
  cta: {
    title: "Ready to unlock your superpower?",
    subtitle:
      "Download TrainBall, build your AI rating and put yourself in front of professional clubs.",
  },
  footer: {
    tagline:
      "Superpower systemized sport platform. Train with AI, earn your rating and get scouted by professional clubs.",
    product: "Product",
    more: "More",
    privacy: "Privacy Policy",
    download: "Download",
    rights: "© 2026 TrainBall. All rights reserved.",
    made: "Made for players who want to get serious.",
  },
};

const ru: Dict = {
  meta: {
    title: "TrainBall — системная спорт-платформа для суперсилы",
    description:
      "TrainBall превращает футбольные тренировки в измеримый прогресс: AI-анализ навыков, индивидуальные программы, мониторинг в реальном времени, XP-рейтинг, рейтинг по 14 регионам и прямые заявки в профессиональные клубы.",
  },
  nav: {
    features: "Возможности",
    aiCoach: "AI-тренер",
    clubs: "Клубы",
    how: "Как это работает",
    about: "О нас",
    faq: "Вопросы",
    getApp: "Скачать",
  },
  hero: {
    badge: "Системная спорт-платформа для суперсилы",
    titleLead: "Тренируйся, получай рейтинг,",
    titleHighlight: "попади в клуб.",
    subtitle:
      "TrainBall превращает футбольные тренировки в измеримый прогресс. AI анализирует ваши навыки, строит план, а XP-рейтинг открывает двери профессиональных клубов — тренировка за тренировкой.",
    trust: ["Бесплатный старт", "На базе AI", "iOS и Android"],
  },
  stats: [
    { value: "AI", label: "Анализ навыков" },
    { value: "14", label: "Регионов в рейтинге" },
    { value: "100+", label: "Упражнений и видео" },
    { value: "iOS", label: "и Android" },
  ],
  featuresSection: {
    eyebrow: "Возможности",
    title: "Всё, чтобы тренироваться как профи",
    subtitle:
      "Полная системная платформа, которая превращает хаотичную практику в измеримый и заметный для клубов путь.",
  },
  features: [
    {
      icon: "radar",
      title: "AI-анализ навыков",
      body: "AI TrainBall оценивает уровень каждого игрока по шести ключевым показателям и отображает их на живом радаре, который растёт вместе с вами.",
    },
    {
      icon: "program",
      title: "Индивидуальные программы и видео",
      body: "Персональные планы тренировок и пошаговые видеоуроки под вашу позицию и уровень.",
    },
    {
      icon: "chart",
      title: "Мониторинг в реальном времени",
      body: "Следите за развитием каждого игрока онлайн, в реальном времени, с любого устройства — прогресс, который видно.",
    },
    {
      icon: "rating",
      title: "Система XP и рейтинга",
      body: "Зарабатывайте XP каждую сессию, поднимайтесь в рейтинге и становитесь одним из самых талантливых игроков платформы.",
    },
    {
      icon: "regions",
      title: "Рейтинг по 14 регионам",
      body: "Видите точно, где вы находитесь, в рейтинге лучших игроков по всем 14 регионам страны.",
    },
    {
      icon: "camera",
      title: "Запись и разбор",
      body: "Снимайте повторы на камеру, пересматривайте движения и позвольте AI оттачивать вашу технику.",
    },
  ],
  aiCoach: {
    eyebrow: "AI-тренер",
    title: "Личный AI-тренер у вас в кармане",
    subtitle:
      "AI TrainBall анализирует ваш уровень, строит план и исправляет технику — как личный тренер, который всегда на связи.",
    bullets: [
      "AI-анализ уровня по каждой сессии",
      "Индивидуальные планы и пошаговые видеоуроки",
      "Обратная связь по технике в реальном времени",
      "Мотивация и напоминания, чтобы держать серию",
    ],
    chatName: "AI-тренер",
    chatStatus: "В сети",
    chat: [
      { from: "coach", text: "Готов сегодня? 20 минут — 3 упражнения на удар." },
      { from: "you", text: "Погнали 💪" },
      { from: "coach", text: "Хороший удар! В следующий раз ставь опорную ногу ближе к мячу." },
    ],
  },
  howSection: {
    eyebrow: "Как это работает",
    title: "Три шага к сильной игре",
    subtitle: "TrainBall делает ваше развитие простым, системным и измеримым.",
  },
  steps: [
    {
      n: "01",
      title: "Создайте профиль",
      body: "Укажите TrainBall свою позицию, уровень и что хотите улучшить.",
    },
    {
      n: "02",
      title: "Тренируйтесь с AI",
      body: "Следуйте программе от AI: упражнения и видеоуроки под вашу игру.",
    },
    {
      n: "03",
      title: "Растите и попадайтесь скаутам",
      body: "Зарабатывайте XP, поднимайтесь в рейтинге и подавайте заявки в клубы.",
    },
  ],
  scouting: {
    eyebrow: "Скаутинг и клубы",
    title: "Тренируйся, будь замечен, попади в клуб",
    subtitle:
      "TrainBall полностью оцифровывает скаутинг. Заработайте рейтинг, подавайте заявки напрямую в профессиональные клубы и получайте приглашения на реальные просмотры.",
    players: {
      title: "Для игроков",
      items: [
        "Создайте проверенный профиль с AI-анализом",
        "Поднимайтесь в XP-рейтинге и рейтинге региона",
        "Подавайте заявки напрямую в профессиональные клубы",
        "Получайте приглашения на просмотры и общайтесь со скаутами",
      ],
    },
    clubs: {
      title: "Для клубов",
      items: [
        "Находите таланты по возрасту, региону и рейтингу",
        "Просматривайте проверенные профили с данными",
        "Приглашайте отобранных игроков на просмотры и тесты",
        "Ведите весь процесс скаутинга в одном месте",
      ],
    },
    steps: [
      { title: "Заявка", body: "Отправьте проверенный профиль прямо в профессиональные клубы." },
      { title: "Подбор", body: "Клубы фильтруют таланты по возрасту, региону и рейтингу." },
      { title: "Приглашение", body: "Отобранных игроков приглашают на просмотр или тест клуба." },
      { title: "Чат и контракт", body: "Общайтесь со скаутами напрямую и делайте следующий шаг." },
    ],
    leaderboardTitle: "Региональный рейтинг",
    leaderboardNote: "Топ-таланты · XP вживую",
  },
  about: {
    title: "Создано для тех, кто настроен серьёзно",
    body: "TrainBall родился из простой идеи: прогресс должен чувствоваться, быть виден и вознаграждаться. Систематизируя то, как вы тренируетесь — AI-анализ, чёткие программы, XP-рейтинг и полностью цифровой путь в профессиональные клубы — он даёт каждому игроку, от любителя до академии, реальную систему, чтобы раскрыть свою суперсилу на поле.",
  },
  faqSection: { eyebrow: "Вопросы", title: "Ответы на вопросы" },
  faqs: [
    {
      q: "TrainBall бесплатный?",
      a: "Да — начать в TrainBall можно бесплатно. Скачайте его на iOS или Android и начните первую сессию от AI уже сегодня, без инвентаря.",
    },
    {
      q: "Как работает AI-анализ навыков?",
      a: "По мере того как вы выполняете сессии и записываете повторы, AI отображает шесть ключевых показателей — скорость, удар, пас, дриблинг, защиту и выносливость — на живом радаре и превращает их в XP-рейтинг.",
    },
    {
      q: "Можно правда подать заявку в профессиональный клуб?",
      a: "Да. Ваш проверенный профиль и рейтинг можно отправить напрямую в профессиональные клубы, которые фильтруют таланты по возрасту и региону и приглашают на просмотр.",
    },
    {
      q: "Что такое рейтинг по 14 регионам?",
      a: "TrainBall ранжирует лучших игроков по всем 14 регионам страны, чтобы клубы и игроки видели, кто и где растёт.",
    },
    {
      q: "Какие устройства поддерживаются?",
      a: "TrainBall работает и на iPhone, и на Android. Ваш профиль, рейтинг и прогресс синхронизируются между устройствами.",
    },
  ],
  cta: {
    title: "Готовы раскрыть свою суперсилу?",
    subtitle:
      "Скачайте TrainBall, заработайте свой AI-рейтинг и окажитесь в поле зрения профессиональных клубов.",
  },
  footer: {
    tagline:
      "Системная спорт-платформа для суперсилы. Тренируйтесь с AI, зарабатывайте рейтинг и попадайте в профессиональные клубы.",
    product: "Платформа",
    more: "Ещё",
    privacy: "Политика конфиденциальности",
    download: "Скачать",
    rights: "© 2026 TrainBall. Все права защищены.",
    made: "Создано для тех, кто настроен серьёзно.",
  },
};

const uz: Dict = {
  meta: {
    title: "TrainBall — superkuch uchun tizimli sport platformasi",
    description:
      "TrainBall futbol mashg'ulotini o'lchanadigan natijaga aylantiradi: AI mahorat tahlili, individual dasturlar, real vaqtli monitoring, XP reytingi, 14 viloyat kesimida reyting va professional klublarga to'g'ridan-to'g'ri ariza.",
  },
  nav: {
    features: "Imkoniyatlar",
    aiCoach: "AI murabbiy",
    clubs: "Klublar",
    how: "Qanday ishlaydi",
    about: "Biz haqimizda",
    faq: "Savollar",
    getApp: "Ilovani oling",
  },
  hero: {
    badge: "Superkuch uchun tizimli sport platformasi",
    titleLead: "Mashq qil, reyting yig'",
    titleHighlight: "klubga ilashin.",
    subtitle:
      "TrainBall futbol mashg'ulotini o'lchanadigan natijaga aylantiradi. AI mahoratingizni tahlil qiladi, rejangizni tuzadi, XP reytingi esa professional klublar eshigini ochadi — har bir mashg'ulot bilan.",
    trust: ["Bepul boshlang", "AI asosida", "iOS va Android"],
  },
  stats: [
    { value: "AI", label: "Mahorat tahlili" },
    { value: "14", label: "Viloyat reytingi" },
    { value: "100+", label: "Mashq va video" },
    { value: "iOS", label: "va Android" },
  ],
  featuresSection: {
    eyebrow: "Imkoniyatlar",
    title: "Pro darajada mashq qilish uchun hammasi",
    subtitle:
      "Tartibsiz mashqni o'lchanadigan va klublarga ko'rinadigan yo'lga aylantiradigan to'liq, tizimli platforma.",
  },
  features: [
    {
      icon: "radar",
      title: "AI mahorat tahlili",
      body: "TrainBall AI har bir futbolchining darajasini oltita asosiy ko'rsatkich bo'yicha tahlil qiladi va mashq qilgan sari o'sadigan jonli radarga joylashtiradi.",
    },
    {
      icon: "program",
      title: "Individual dasturlar va video",
      body: "Mavqe va darajangizga moslangan shaxsiy mashg'ulot rejalari hamda bosqichma-bosqich video darsliklar.",
    },
    {
      icon: "chart",
      title: "Real vaqtli monitoring",
      body: "Har bir futbolchi rivojlanishini onlayn, real vaqtda, istalgan qurilmadan kuzating — ko'rinadigan natija.",
    },
    {
      icon: "rating",
      title: "XP va reyting tizimi",
      body: "Har sessiyada XP yig'ing, reytingda ko'tariling va platformadagi eng iqtidorli futbolchilardan biriga aylaning.",
    },
    {
      icon: "regions",
      title: "14 viloyat reytingi",
      body: "Respublika bo'yicha barcha 14 viloyat kesimida top futbolchilar reytingida o'rningizni aniq ko'ring.",
    },
    {
      icon: "camera",
      title: "Yozib oling va ko'ring",
      body: "Takrorlashlaringizni kamerada yozib oling, harakatlaringizni qayta ko'ring va AI texnikangizni o'tkirlashishiga yordam bersin.",
    },
  ],
  aiCoach: {
    eyebrow: "AI murabbiy",
    title: "Cho'ntagingizdagi shaxsiy AI murabbiy",
    subtitle:
      "TrainBall AI darajangizni tahlil qiladi, rejangizni tuzadi va texnikangizni to'g'rilaydi — doimo yoningizdagi shaxsiy trener kabi.",
    bullets: [
      "Har sessiyadan AI mahorat darajasi tahlili",
      "Individual rejalar va bosqichma-bosqich video darsliklar",
      "Texnika bo'yicha real vaqtli izoh",
      "Seriyangizni saqlash uchun doimiy motivatsiya",
    ],
    chatName: "AI murabbiy",
    chatStatus: "Onlayn",
    chat: [
      { from: "coach", text: "Bugunga tayyormisan? 20 daqiqa — 3 ta zarba mashqi." },
      { from: "you", text: "Ketdik 💪" },
      { from: "coach", text: "Zo'r zarba! Keyingi safar tayanch oyog'ingni to'pga yaqinroq qo'y." },
    ],
  },
  howSection: {
    eyebrow: "Qanday ishlaydi",
    title: "Kuchli o'yin sari uch qadam",
    subtitle: "TrainBall rivojlanishingizni sodda, tizimli va o'lchanadigan saqlaydi.",
  },
  steps: [
    {
      n: "01",
      title: "Profilingizni yarating",
      body: "TrainBall'ga mavqeingiz, darajangiz va nimani yaxshilamoqchiligingizni ayting.",
    },
    {
      n: "02",
      title: "AI bilan mashq qiling",
      body: "AI tuzgan dastur — mashqlar va video darsliklar bo'yicha mashq qiling.",
    },
    {
      n: "03",
      title: "Ko'taring va ko'zga tushing",
      body: "XP yig'ing, reytingda ko'tariling va professional klublarga ariza topshiring.",
    },
  ],
  scouting: {
    eyebrow: "Klublar va skauting",
    title: "Mashq qil, ko'zga tushgin, klubga qabul bo'l",
    subtitle:
      "TrainBall skauting jarayonini to'liq raqamlashtiradi. Reyting yig'ing, professional klublarga to'g'ridan-to'g'ri ariza topshiring va haqiqiy sinovlarga taklif oling.",
    players: {
      title: "O'yinchilar uchun",
      items: [
        "AI tahlilli, tasdiqlangan profil yarating",
        "XP reytingi va viloyat reytingida ko'tariling",
        "Professional klublarga to'g'ridan-to'g'ri ariza topshiring",
        "Sinovlarga taklif oling va skautlar bilan suhbatlashing",
      ],
    },
    clubs: {
      title: "Klublar uchun",
      items: [
        "Yosh, viloyat va reyting bo'yicha iqtidor toping",
        "Tasdiqlangan, ma'lumotga asoslangan profillarni ko'ring",
        "Saralangan o'yinchilarni sinov va testlarga taklif qiling",
        "Butun skauting jarayonini bitta joyda yuriting",
      ],
    },
    steps: [
      { title: "Ariza", body: "Tasdiqlangan profilingizni to'g'ridan-to'g'ri professional klublarga yuboring." },
      { title: "Moslashuv", body: "Klublar yosh, viloyat va reyting bo'yicha filtrlab sizni topadi." },
      { title: "Sinovga taklif", body: "Tanlangan o'yinchilar klub sinovi yoki testiga taklif qilinadi." },
      { title: "Suhbat va shartnoma", body: "Skautlar bilan to'g'ridan-to'g'ri yozishing va keyingi qadamni qo'ying." },
    ],
    leaderboardTitle: "Viloyat reytingi",
    leaderboardNote: "Top iqtidorlar · jonli XP",
  },
  about: {
    title: "Jiddiy shug'ullanmoqchi o'yinchilar uchun",
    body: "TrainBall oddiy g'oyadan tug'ildi: natija his qilinishi, ko'rinishi va taqdirlanishi kerak. Mashq qilish usulini tizimlashtirib — AI tahlili, aniq dasturlar, XP reytingi va professional klublarga to'liq raqamli yo'l — u har bir o'yinchiga, havaskordan akademiyagacha, maydonda superkuchini ochish uchun haqiqiy tizim beradi.",
  },
  faqSection: { eyebrow: "Savollar", title: "Savollarga javoblar" },
  faqs: [
    {
      q: "TrainBall bepulmi?",
      a: "Ha — TrainBall'ni bepul boshlash mumkin. Uni iOS yoki Android'ga yuklab oling va AI tuzgan birinchi sessiyangizni bugun boshlang, jihoz shart emas.",
    },
    {
      q: "AI mahorat tahlili qanday ishlaydi?",
      a: "Siz sessiyalarni bajarib, takrorlashlarni yozar ekansiz, AI oltita asosiy ko'rsatkichni — tezlik, zarba, uzatma, olib o'tish, himoya va chidamlilikni — jonli radarga joylashtiradi va ularni XP reytingiga aylantiradi.",
    },
    {
      q: "Haqiqatan professional klubga ariza topshira olamanmi?",
      a: "Ha. Tasdiqlangan profilingiz va reytingingizni to'g'ridan-to'g'ri professional klublarga yuborish mumkin; ular yosh va viloyat bo'yicha filtrlab sizni sinovga taklif qiladi.",
    },
    {
      q: "14 viloyat reytingi nima?",
      a: "TrainBall respublika bo'yicha barcha 14 viloyat kesimida top o'yinchilarni reytinglaydi — klublar va o'yinchilar kim qayerda o'sayotganini ko'radi.",
    },
    {
      q: "Qaysi qurilmalar qo'llab-quvvatlanadi?",
      a: "TrainBall ham iPhone, ham Android'da ishlaydi. Profilingiz, reytingingiz va natijalaringiz qurilmalar o'rtasida sinxron qoladi.",
    },
  ],
  cta: {
    title: "Superkuchingizni ochishga tayyormisiz?",
    subtitle:
      "TrainBall'ni yuklab oling, AI reytingingizni yig'ing va professional klublar e'tiboriga tushing.",
  },
  footer: {
    tagline:
      "Superkuch uchun tizimli sport platformasi. AI bilan mashq qiling, reyting yig'ing va professional klublarga ko'zga tushing.",
    product: "Platforma",
    more: "Boshqa",
    privacy: "Maxfiylik siyosati",
    download: "Yuklab olish",
    rights: "© 2026 TrainBall. Barcha huquqlar himoyalangan.",
    made: "Jiddiy shug'ullanmoqchi o'yinchilar uchun yaratilgan.",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, ru, uz };

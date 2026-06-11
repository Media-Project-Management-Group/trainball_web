// Privacy policy content, mirrored from the TrainBall mobile app
// (docs/legal/privacy-policy.{uz,ru}.md). Inline **text** marks bold.

export type Block =
  | { k: "h2"; t: string }
  | { k: "h3"; t: string }
  | { k: "p"; t: string }
  | { k: "ul"; items: string[] }
  | { k: "table"; head: [string, string]; rows: [string, string][] };

export type Policy = {
  title: string;
  meta: string[];
  blocks: Block[];
  note: string;
};

export type Lang = "uz" | "ru";

const uz: Policy = {
  title: "TrainBall — Maxfiylik siyosati",
  meta: [
    `**Kuchga kirgan sana:** 2026-yil 11-iyun`,
    `**Oxirgi yangilangan:** 2026-yil 11-iyun`,
  ],
  blocks: [
    {
      k: "p",
      t: `Ushbu Maxfiylik siyosati **TrainBall** mobil ilovasidan (keyingi o‘rinlarda — "Ilova", "biz") foydalanganingizda qaysi shaxsiy ma'lumotlarni to‘plashimizni, ulardan qanday foydalanishimizni, ularni qanday saqlash va himoya qilishimizni hamda sizning huquqlaringizni tushuntiradi.`,
    },
    {
      k: "p",
      t: `TrainBall — futbol va jismoniy tayyorgarlik bo‘yicha mashg‘ulot platformasi bo‘lib, u sizning mashg‘ulot faolligingiz, jismoniy ko‘rsatkichlaringiz va rivojlanishingizni kuzatib borishga yordam beradi.`,
    },
    {
      k: "p",
      t: `Ilovadan foydalanish orqali siz ushbu siyosatda bayon etilgan amaliyotlarga rozilik bildirasiz. Agar siz ushbu shartlarga rozi bo‘lmasangiz, iltimos, Ilovadan foydalanmang.`,
    },

    { k: "h2", t: `1. Biz to‘playdigan ma'lumotlar` },
    { k: "h3", t: `1.1. Hisob va profil ma'lumotlari` },
    {
      k: "p",
      t: `Ro‘yxatdan o‘tish va profilingizni to‘ldirish jarayonida biz quyidagilarni to‘plashimiz mumkin:`,
    },
    {
      k: "ul",
      items: [
        `ism va familiya;`,
        `elektron pochta manzili;`,
        `tug‘ilgan sana;`,
        `mamlakat va klub (jamoa) nomi;`,
        `o‘yin pozitsiyasi va roli;`,
        `bo‘y va vazn;`,
        `profil rasmi.`,
      ],
    },
    {
      k: "p",
      t: `Siz Google yoki Apple hisobi orqali tizimga kirsangiz, ushbu xizmatlar bizga sizning ismingiz va elektron pochta manzilingiz kabi asosiy ma'lumotlaringizni taqdim etadi.`,
    },
    { k: "h3", t: `1.2. Sog‘liq va fitnes ma'lumotlari` },
    {
      k: "p",
      t: `Ruxsatingiz bilan Ilova qurilmangizning sog‘liq platformasidan (iOS'da **Apple Health/HealthKit**, Android'da **Google Health Connect**) jismoniy faollik ma'lumotlarini o‘qiydi. Batafsil ma'lumot 4-bo‘limda keltirilgan. Biz quyidagilarni o‘qiymiz:`,
    },
    {
      k: "ul",
      items: [
        `qadamlar soni;`,
        `yurish va yugurish masofasi;`,
        `sarflangan faol kaloriyalar (active energy);`,
        `mashg‘ulot (workout) yozuvlari.`,
      ],
    },
    { k: "h3", t: `1.3. Kamera, mikrofon va media` },
    {
      k: "p",
      t: `Mashg‘ulotlarni yozib olish, harakatlarni tahlil qilish va profil rasmingizni yuklash funksiyalari uchun Ilova, sizning ruxsatingiz bilan, qurilmangizning **kamerasi**, **mikrofoni** va **foto kutubxonasiga** kirishni so‘rashi mumkin. Ushbu ruxsatlar faqat tegishli funksiyadan foydalanganingizda ishlatiladi.`,
    },
    { k: "h3", t: `1.4. Qurilma va texnik ma'lumotlar` },
    {
      k: "p",
      t: `Ilovaning barqaror ishlashini ta'minlash uchun biz quyidagilarni avtomatik tarzda to‘plashimiz mumkin:`,
    },
    {
      k: "ul",
      items: [
        `qurilma modeli va ishlab chiqaruvchisi;`,
        `operatsion tizim turi va versiyasi;`,
        `Ilova versiyasi;`,
        `til va mintaqa sozlamalari;`,
        `noyob qurilma/ilova identifikatorlari va push-bildirishnoma tokeni (FCM).`,
      ],
    },
    { k: "h3", t: `1.5. Foydalanish va analitika ma'lumotlari` },
    {
      k: "p",
      t: `Ilova qanday ishlatilishini tushunish va uni yaxshilash uchun biz **Firebase Analytics** va **Firebase Crashlytics** orqali foydalanish hodisalari, sessiyalar va nosozliklar (crash) hisobotlarini to‘playmiz.`,
    },
    { k: "h3", t: `1.6. To‘lov ma'lumotlari` },
    {
      k: "p",
      t: `Pro obunani sotib olganingizda to‘lov **Click** to‘lov tizimi orqali amalga oshiriladi. To‘lov kartangiz ma'lumotlari to‘g‘ridan-to‘g‘ri Click tomonidan qayta ishlanadi — **biz karta raqami yoki maxfiy to‘lov ma'lumotlarini saqlamaymiz va ularga ega bo‘lmaymiz**. Biz faqat obuna holati, to‘lov identifikatori va tranzaksiya natijasi kabi ma'lumotlarni saqlaymiz.`,
    },
    { k: "h3", t: `1.7. Bildirishnomalar` },
    {
      k: "p",
      t: `Sizning roziligingiz bilan biz mashg‘ulot eslatmalari va yangiliklar haqida push-bildirishnomalar yuborishimiz mumkin. Buni qurilma sozlamalaridan istalgan vaqtda o‘chirishingiz mumkin.`,
    },

    { k: "h2", t: `2. Ma'lumotlardan qanday foydalanamiz` },
    {
      k: "p",
      t: `To‘plangan ma'lumotlardan quyidagi maqsadlarda foydalanamiz:`,
    },
    {
      k: "ul",
      items: [
        `hisobingizni yaratish va boshqarish;`,
        `mashg‘ulot faolligingiz, statistikangiz va rivojlanishingizni ko‘rsatish;`,
        `gamifikatsiya — qadamlar, mashqlar va to‘g‘ri javoblar uchun XP/ballar berish;`,
        `Pro obuna va to‘lovlarni qayta ishlash;`,
        `bildirishnomalar va eslatmalar yuborish;`,
        `Ilovani yaxshilash, nosozliklarni tuzatish va xavfsizlikni ta'minlash;`,
        `qonuniy talablarga rioya qilish.`,
      ],
    },

    { k: "h2", t: `3. Sog‘liq ma'lumotlari to‘g‘risida maxsus siyosat` },
    {
      k: "p",
      t: `Sog‘liq va fitnes ma'lumotlari maxfiy toifadagi ma'lumotlar hisoblanadi va biz ularga alohida e'tibor qaratamiz.`,
    },
    { k: "h3", t: `3.1. Qanday ma'lumotlarni o‘qiymiz` },
    {
      k: "p",
      t: `Faqat siz aniq ruxsat berganingizdan so‘ng, Ilova Apple Health (HealthKit) yoki Google Health Connect'dan quyidagilarni **o‘qiydi**:`,
    },
    {
      k: "table",
      head: [`Ma'lumot turi`, `Maqsad`],
      rows: [
        [`Qadamlar soni`, `Kunlik/haftalik faollikni ko‘rsatish va XP berish`],
        [`Yurish/yugurish masofasi`, `Faollik statistikasini ko‘rsatish`],
        [`Faol kaloriyalar`, `Sarflangan energiyani ko‘rsatish`],
        [
          `Mashg‘ulot (workout) yozuvlari`,
          `Yugurish masofasini aniqlash va faollikni hisoblash`,
        ],
      ],
    },
    { k: "h3", t: `3.2. Sog‘liq ma'lumotlaringizdan qanday foydalanamiz` },
    {
      k: "ul",
      items: [
        `Ushbu ko‘rsatkichlar Ilova ichida **shaxsiy statistikangiz va rivojlanishingizni** ko‘rsatish uchun ishlatiladi.`,
        `Kunlik qadamlar soni belgilangan chegaradan (10 000 qadam) oshganda, sizga XP/ballar berish maqsadida ushbu son va sana hisobingiz bilan bog‘liq holda serverimizga yuboriladi.`,
        `Faollik xulosalari (masalan, umumiy masofa va kaloriyalar) rivojlanishingizni kuzatib borish uchun hisobingizga bog‘lanishi mumkin.`,
        `iOS'da Ilova sizning faollik tarixingizni to‘liq saqlash uchun mashg‘ulot xulosalarini Apple Health'ga qaytarib **yozishi** mumkin.`,
      ],
    },
    { k: "h3", t: `3.3. Biz NIMA QILMAYMIZ` },
    {
      k: "ul",
      items: [
        `Biz sog‘liq ma'lumotlaringizni **reklama yoki marketing maqsadlarida ishlatmaymiz**.`,
        `Biz sog‘liq ma'lumotlaringizni **sotmaymiz** va ijaraga bermaymiz.`,
        `Biz sog‘liq ma'lumotlaringizni **uchinchi tomonlarga ularning o‘z maqsadlari uchun bermaymiz**.`,
        `Biz faqat yuqorida tavsiflangan funksiyalar uchun zarur bo‘lgan minimal ma'lumotlarnigina o‘qiymiz.`,
      ],
    },
    { k: "h3", t: `3.4. Ruxsatni bekor qilish` },
    {
      k: "p",
      t: `Sog‘liq ma'lumotlariga kirish ruxsatini istalgan vaqtda bekor qilishingiz mumkin:`,
    },
    {
      k: "ul",
      items: [
        `**iOS:** Sozlamalar → Sog‘liq (Health) → Ma'lumotlarga ruxsat → TrainBall;`,
        `**Android:** Health Connect ilovasi → Ilova ruxsatlari → TrainBall.`,
      ],
    },
    {
      k: "p",
      t: `Ruxsatni bekor qilganingizdan so‘ng, Ilova yangi sog‘liq ma'lumotlarini o‘qishni to‘xtatadi.`,
    },

    { k: "h2", t: `4. Ma'lumotlarni uchinchi tomonlar bilan ulashish` },
    {
      k: "p",
      t: `Biz shaxsiy ma'lumotlaringizni sotmaymiz. Biz ulardan faqat quyidagi xizmat ko‘rsatuvchilar bilan, Ilovaning ishlashi uchun zarur bo‘lgan darajada foydalanamiz:`,
    },
    {
      k: "ul",
      items: [
        `**Google Firebase** (Analytics, Crashlytics, Firestore, Remote Config, Cloud Messaging) — ma'lumotlarni saqlash, analitika, nosozliklar hisoboti va bildirishnomalar uchun;`,
        `**Apple Health / Google Health Connect** — sog‘liq ma'lumotlarini o‘qish uchun (faqat qurilmangizda, ruxsatingiz bilan);`,
        `**Google Sign-In / Apple Sign-In** — autentifikatsiya uchun;`,
        `**Click** — to‘lovlarni qayta ishlash uchun.`,
      ],
    },
    {
      k: "p",
      t: `Shuningdek, qonun talab qilgan hollarda yoki huquqlarimiz va foydalanuvchilarimiz xavfsizligini himoya qilish uchun ma'lumotlarni oshkor qilishimiz mumkin.`,
    },

    { k: "h2", t: `5. Ma'lumotlarni saqlash va xavfsizlik` },
    {
      k: "p",
      t: `Ma'lumotlaringiz xavfsiz serverlarda saqlanadi va shifrlangan ulanishlar (HTTPS/TLS) orqali uzatiladi. Maxfiy ma'lumotlar (masalan, autentifikatsiya tokenlari) qurilmangizda xavfsiz xotirada saqlanadi. Biz ma'lumotlaringizni ruxsatsiz kirish, o‘zgartirish yoki yo‘qotishdan himoya qilish uchun texnik va tashkiliy choralarni qo‘llaymiz.`,
    },
    {
      k: "p",
      t: `Hech qanday usul 100% xavfsizlikni kafolatlay olmasa-da, biz ma'lumotlaringizni himoya qilish uchun sohaga mos eng yaxshi amaliyotlardan foydalanamiz.`,
    },

    { k: "h2", t: `6. Ma'lumotlarni saqlash muddati` },
    {
      k: "p",
      t: `Biz shaxsiy ma'lumotlaringizni hisobingiz faol bo‘lgan davrda yoki ushbu siyosatda ko‘rsatilgan maqsadlar uchun zarur bo‘lgan muddatgacha saqlaymiz. Hisobingizni o‘chirishni so‘raganingizda, biz ma'lumotlaringizni qonun talab qilgan hollar bundan mustasno, oqilona muddat ichida o‘chiramiz.`,
    },

    { k: "h2", t: `7. Sizning huquqlaringiz` },
    { k: "p", t: `Sizda quyidagi huquqlar mavjud:` },
    {
      k: "ul",
      items: [
        `shaxsiy ma'lumotlaringizga kirish va ularning nusxasini olish;`,
        `noto‘g‘ri ma'lumotlarni tuzatish;`,
        `ma'lumotlaringizni va hisobingizni o‘chirishni so‘rash;`,
        `ma'lumotlardan foydalanishga roziligingizni qaytarib olish (masalan, sog‘liq yoki bildirishnoma ruxsatlarini bekor qilish).`,
      ],
    },
    {
      k: "p",
      t: `Ushbu huquqlardan foydalanish uchun quyida ko‘rsatilgan manzil orqali biz bilan bog‘laning.`,
    },

    { k: "h2", t: `8. Bolalar maxfiyligi` },
    {
      k: "p",
      t: `Ilova 13 yoshgacha bo‘lgan bolalar uchun mo‘ljallanmagan. Biz bilib turib 13 yoshgacha bo‘lgan bolalardan ma'lumot to‘plamaymiz. Agar bunday ma'lumot to‘planganini aniqlasak, uni o‘chirib tashlaymiz.`,
    },

    { k: "h2", t: `9. Ushbu siyosatga o‘zgartirishlar` },
    {
      k: "p",
      t: `Biz ushbu Maxfiylik siyosatini vaqti-vaqti bilan yangilab turishimiz mumkin. Muhim o‘zgarishlar haqida Ilova orqali yoki boshqa usulda xabar beramiz. Yangilangan sana ushbu hujjatning yuqori qismida ko‘rsatiladi.`,
    },

    { k: "h2", t: `10. Biz bilan bog‘lanish` },
    {
      k: "p",
      t: `Maxfiylik siyosati yoki ma'lumotlaringiz bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning:`,
    },
    {
      k: "ul",
      items: [
        `**Elektron pochta:** contact@trainball.com`,
        `**Ilova:** TrainBall`,
      ],
    },
  ],
  note: `Ushbu hujjat TrainBall ilovasining joriy holatini aks ettiradi. Yangi funksiyalar qo‘shilganda yoki ma'lumotlar amaliyoti o‘zgarganda hujjat yangilanadi.`,
};

const ru: Policy = {
  title: "TrainBall — Политика конфиденциальности",
  meta: [
    `**Дата вступления в силу:** 11 июня 2026 г.`,
    `**Последнее обновление:** 11 июня 2026 г.`,
  ],
  blocks: [
    {
      k: "p",
      t: `Настоящая Политика конфиденциальности описывает, какие персональные данные мы собираем при использовании вами мобильного приложения **TrainBall** (далее — «Приложение», «мы»), как мы их используем, храним и защищаем, а также какие права у вас есть.`,
    },
    {
      k: "p",
      t: `TrainBall — это платформа для тренировок по футболу и физической подготовке, которая помогает отслеживать вашу тренировочную активность, физические показатели и прогресс.`,
    },
    {
      k: "p",
      t: `Используя Приложение, вы соглашаетесь с практиками, описанными в настоящей Политике. Если вы не согласны с этими условиями, пожалуйста, не используйте Приложение.`,
    },

    { k: "h2", t: `1. Какие данные мы собираем` },
    { k: "h3", t: `1.1. Данные учётной записи и профиля` },
    { k: "p", t: `При регистрации и заполнении профиля мы можем собирать:` },
    {
      k: "ul",
      items: [
        `имя и фамилию;`,
        `адрес электронной почты;`,
        `дату рождения;`,
        `страну и название клуба (команды);`,
        `игровую позицию и роль;`,
        `рост и вес;`,
        `фотографию профиля.`,
      ],
    },
    {
      k: "p",
      t: `Если вы входите через учётную запись Google или Apple, эти сервисы предоставляют нам базовые данные, такие как имя и адрес электронной почты.`,
    },
    { k: "h3", t: `1.2. Данные о здоровье и фитнесе` },
    {
      k: "p",
      t: `С вашего разрешения Приложение считывает данные о физической активности из платформы здоровья вашего устройства (**Apple Health/HealthKit** на iOS и **Google Health Connect** на Android). Подробности — в разделе 4. Мы считываем:`,
    },
    {
      k: "ul",
      items: [
        `количество шагов;`,
        `дистанцию ходьбы и бега;`,
        `потраченные активные калории (active energy);`,
        `записи тренировок (workout).`,
      ],
    },
    { k: "h3", t: `1.3. Камера, микрофон и медиа` },
    {
      k: "p",
      t: `Для функций записи тренировок, анализа движений и загрузки фотографии профиля Приложение с вашего разрешения может запрашивать доступ к **камере**, **микрофону** и **фотобиблиотеке** устройства. Эти разрешения используются только при работе с соответствующей функцией.`,
    },
    { k: "h3", t: `1.4. Данные об устройстве и технические данные` },
    {
      k: "p",
      t: `Для стабильной работы Приложения мы можем автоматически собирать:`,
    },
    {
      k: "ul",
      items: [
        `модель и производителя устройства;`,
        `тип и версию операционной системы;`,
        `версию Приложения;`,
        `настройки языка и региона;`,
        `уникальные идентификаторы устройства/приложения и токен push-уведомлений (FCM).`,
      ],
    },
    { k: "h3", t: `1.5. Данные об использовании и аналитика` },
    {
      k: "p",
      t: `Чтобы понимать, как используется Приложение, и улучшать его, мы собираем события использования, сессии и отчёты о сбоях (crash) с помощью **Firebase Analytics** и **Firebase Crashlytics**.`,
    },
    { k: "h3", t: `1.6. Платёжные данные` },
    {
      k: "p",
      t: `При покупке Pro-подписки оплата осуществляется через платёжную систему **Click**. Данные вашей платёжной карты обрабатываются непосредственно Click — **мы не храним и не имеем доступа к номеру карты или конфиденциальным платёжным данным**. Мы храним только такую информацию, как статус подписки, идентификатор платежа и результат транзакции.`,
    },
    { k: "h3", t: `1.7. Уведомления` },
    {
      k: "p",
      t: `С вашего согласия мы можем отправлять push-уведомления о напоминаниях о тренировках и новостях. Вы можете отключить их в любой момент в настройках устройства.`,
    },

    { k: "h2", t: `2. Как мы используем данные` },
    { k: "p", t: `Собранные данные мы используем для следующих целей:` },
    {
      k: "ul",
      items: [
        `создание учётной записи и управление ею;`,
        `отображение вашей тренировочной активности, статистики и прогресса;`,
        `геймификация — начисление XP/баллов за шаги, упражнения и правильные ответы;`,
        `обработка Pro-подписки и платежей;`,
        `отправка уведомлений и напоминаний;`,
        `улучшение Приложения, исправление ошибок и обеспечение безопасности;`,
        `соблюдение требований законодательства.`,
      ],
    },

    { k: "h2", t: `3. Особые положения о данных о здоровье` },
    {
      k: "p",
      t: `Данные о здоровье и фитнесе относятся к конфиденциальной категории данных, и мы уделяем им особое внимание.`,
    },
    { k: "h3", t: `3.1. Какие данные мы считываем` },
    {
      k: "p",
      t: `Только после вашего явного разрешения Приложение **считывает** из Apple Health (HealthKit) или Google Health Connect следующее:`,
    },
    {
      k: "table",
      head: [`Тип данных`, `Цель`],
      rows: [
        [
          `Количество шагов`,
          `Отображение дневной/недельной активности и начисление XP`,
        ],
        [`Дистанция ходьбы/бега`, `Отображение статистики активности`],
        [`Активные калории`, `Отображение потраченной энергии`],
        [
          `Записи тренировок (workout)`,
          `Определение дистанции бега и расчёт активности`,
        ],
      ],
    },
    { k: "h3", t: `3.2. Как мы используем данные о здоровье` },
    {
      k: "ul",
      items: [
        `Эти показатели используются для отображения вашей **личной статистики и прогресса** внутри Приложения.`,
        `Когда дневное количество шагов превышает установленный порог (10 000 шагов), это число и дата отправляются на наш сервер в привязке к вашей учётной записи с целью начисления XP/баллов.`,
        `Сводные данные об активности (например, суммарная дистанция и калории) могут привязываться к вашей учётной записи для отслеживания прогресса.`,
        `На iOS Приложение может **записывать** сводки тренировок обратно в Apple Health, чтобы сохранить полную историю вашей активности.`,
      ],
    },
    { k: "h3", t: `3.3. Чего мы НЕ делаем` },
    {
      k: "ul",
      items: [
        `Мы **не используем** данные о здоровье в рекламных или маркетинговых целях.`,
        `Мы **не продаём** и не сдаём в аренду данные о здоровье.`,
        `Мы **не передаём** данные о здоровье третьим лицам для их собственных целей.`,
        `Мы считываем только минимально необходимые данные для функций, описанных выше.`,
      ],
    },
    { k: "h3", t: `3.4. Отзыв разрешения` },
    {
      k: "p",
      t: `Вы можете в любой момент отозвать доступ к данным о здоровье:`,
    },
    {
      k: "ul",
      items: [
        `**iOS:** Настройки → Здоровье (Health) → Доступ к данным → TrainBall;`,
        `**Android:** приложение Health Connect → Разрешения приложений → TrainBall.`,
      ],
    },
    {
      k: "p",
      t: `После отзыва разрешения Приложение перестаёт считывать новые данные о здоровье.`,
    },

    { k: "h2", t: `4. Передача данных третьим лицам` },
    {
      k: "p",
      t: `Мы не продаём ваши персональные данные. Мы используем их совместно только со следующими поставщиками услуг и только в объёме, необходимом для работы Приложения:`,
    },
    {
      k: "ul",
      items: [
        `**Google Firebase** (Analytics, Crashlytics, Firestore, Remote Config, Cloud Messaging) — для хранения данных, аналитики, отчётов о сбоях и уведомлений;`,
        `**Apple Health / Google Health Connect** — для считывания данных о здоровье (только на вашем устройстве, с вашего разрешения);`,
        `**Google Sign-In / Apple Sign-In** — для аутентификации;`,
        `**Click** — для обработки платежей.`,
      ],
    },
    {
      k: "p",
      t: `Мы также можем раскрывать данные, если этого требует закон или если это необходимо для защиты наших прав и безопасности наших пользователей.`,
    },

    { k: "h2", t: `5. Хранение и безопасность данных` },
    {
      k: "p",
      t: `Ваши данные хранятся на защищённых серверах и передаются через зашифрованные соединения (HTTPS/TLS). Конфиденциальные данные (например, токены аутентификации) хранятся в защищённом хранилище на вашем устройстве. Мы применяем технические и организационные меры для защиты ваших данных от несанкционированного доступа, изменения или потери.`,
    },
    {
      k: "p",
      t: `Хотя ни один способ не может гарантировать 100% безопасности, мы используем передовые отраслевые практики для защиты ваших данных.`,
    },

    { k: "h2", t: `6. Срок хранения данных` },
    {
      k: "p",
      t: `Мы храним ваши персональные данные в течение срока действия вашей учётной записи или столько, сколько необходимо для целей, указанных в настоящей Политике. При запросе на удаление учётной записи мы удаляем ваши данные в разумный срок, за исключением случаев, когда их хранение требуется по закону.`,
    },

    { k: "h2", t: `7. Ваши права` },
    { k: "p", t: `У вас есть следующие права:` },
    {
      k: "ul",
      items: [
        `доступ к своим персональным данным и получение их копии;`,
        `исправление неверных данных;`,
        `запрос на удаление ваших данных и учётной записи;`,
        `отзыв согласия на использование данных (например, отзыв разрешений на доступ к данным о здоровье или к уведомлениям).`,
      ],
    },
    {
      k: "p",
      t: `Для реализации этих прав свяжитесь с нами по указанному ниже адресу.`,
    },

    { k: "h2", t: `8. Конфиденциальность детей` },
    {
      k: "p",
      t: `Приложение не предназначено для детей младше 13 лет. Мы сознательно не собираем данные детей младше 13 лет. Если нам станет известно, что такие данные были собраны, мы удалим их.`,
    },

    { k: "h2", t: `9. Изменения в настоящей Политике` },
    {
      k: "p",
      t: `Мы можем периодически обновлять настоящую Политику конфиденциальности. О существенных изменениях мы сообщим через Приложение или иным образом. Дата обновления указывается в верхней части этого документа.`,
    },

    { k: "h2", t: `10. Свяжитесь с нами` },
    {
      k: "p",
      t: `Если у вас есть вопросы о Политике конфиденциальности или о ваших данных, свяжитесь с нами:`,
    },
    {
      k: "ul",
      items: [
        `**Электронная почта:** contact@trainball.com`,
        `**Приложение:** TrainBall`,
      ],
    },
  ],
  note: `Настоящий документ отражает текущее состояние приложения TrainBall. Документ обновляется при добавлении новых функций или изменении практик обработки данных.`,
};

export const policies: Record<Lang, Policy> = { uz, ru };

export const locales = ["fa", "en", "ar"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "fa";

export const translations = {
  en: {
    dir: "ltr",
    nav: { home: "Home", about: "About", training: "Training", results: "Results", articles: "Articles", contact: "Contact" },
    header: {
      label: "Personal Coaching Website",
      subLabel: "Private Tennis & Conditioning Coaching",
      location: "Dubai",
      whatsapp: "WhatsApp Now",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Private Tennis Coaching",
      title1: "Train Smarter.",
      title2: "Compete Stronger.",
      subtitle: "From technical skills to match conditioning, build a complete game with a structured, results-driven coaching system.",
      cta1: "Book Training Session",
      cta2: "WhatsApp Consultation",
      badges: ["Tennis Conditioning Specialist", "Dubai Experience", "Performance Training System"],
    },
    about: {
      tag: "The Coach",
      title: "Mohammad Moslemkhani",
      role: "Tennis & Performance Conditioning Specialist",
      bio: "Tennis coach and conditioning specialist building modern performance systems — combining technical tennis coaching, sports science, movement efficiency and functional training, with international coaching experience in Dubai.",
      stats: [
        { v: "10+", l: "Years Coaching" },
        { v: "500+", l: "Performance Sessions" },
        { v: "100%", l: "Tennis Conditioning" },
        { v: "∞", l: "Athlete Development" },
      ],
    },
    services: {
      tag: "Programs",
      title: "Built for Performance",
      sub: "Engineered training tracks for tennis players who refuse to plateau.",
      items: [
        { t: "Private Tennis Coaching", d: "Technical 1-on-1 coaching tailored to your level and competitive goals." },
        { t: "Tennis Conditioning", d: "Sport-specific conditioning protocols built around the demands of the game." },
        { t: "HIIT for Tennis", d: "Court-based interval training engineered for VO2max and rally endurance." },
        { t: "Speed & Agility", d: "First-step explosiveness, change of direction, reactive footwork." },
        { t: "Strength & Power", d: "Force production, rotational power and injury-resilient strength." },
        { t: "Recovery & Mobility", d: "Mobility, soft-tissue and recovery systems to keep you on court." },
      ],
    },
    science: {
      tag: "Match performance lab",
      title: "How Tennis Physiology Shapes Your Training",
      sub: "A clear breakdown of match demands, energy systems, and interval design for tennis players.",
      demands: {
        title: "What Tennis Demands From Your Body",
        items: [
          { l: "Speed", v: 92 },
          { l: "Agility", v: 96 },
          { l: "Power", v: 88 },
          { l: "Endurance", v: 84 },
          { l: "Recovery", v: 78 },
        ],
      },
      systems: {
        title: "Energy Systems",
        items: [
          { code: "ATP-PC", t: "Phosphagen", time: "0–10 sec", d: "Explosive energy. Sprints, serves and acceleration off the mark." },
          { code: "ANAEROBIC", t: "Glycolytic", time: "10–90 sec", d: "High-intensity rallies. Lactate tolerance. Repeated explosive effort." },
          { code: "AEROBIC", t: "Oxidative", time: "90 sec +", d: "Recovery between points. Long-match endurance and energy restoration." },
        ],
      },
      hiit: {
        title: "Interval Training Models (HIIT)",
        workLabel: "Work",
        restLabel: "Rest",
        items: [
          { t: "Long Interval HIIT", w: "3–5 min", r: "2–3 min", d: "Targets VO2max and aerobic ceiling." },
          { t: "Short Interval HIIT", w: "15–30 s", r: "15–30 s", d: "Repeatable on-court power." },
          { t: "Repeated Sprint", w: "5–10 s", r: "20–60 s", d: "Maximal acceleration capacity." },
        ],
      },
      movement: {
        title: "Tennis Movement Patterns",
        items: ["X Pattern", "Recovery Pattern", "Suicide Runs", "Direction Change Drills"],
      },
    },
    results: { tag: "Results", title: "Transformations that speak", sub: "Real outcomes from focused coaching and disciplined execution." },
    resultsCards: [
      { title: "Weight Loss", stat: "-11 KG", desc: "Improved body composition and better performance." },
      { title: "Performance Boost", stat: "+37%", desc: "Increase in speed, endurance, and match performance." },
      { title: "Mobility Improvement", stat: "+60%", desc: "Better movement, flexibility, and injury prevention." },
    ],
    reviews: {
      tag: "Reviews",
      title: "What athletes say",
      items: [
        { n: "Ahmad K.", r: "Dubai", q: "The conditioning work changed my game. I last longer in third sets and my first step is faster." },
        { n: "Sara M.", r: "Dubai", q: "Methodical, scientific, intense. Three months and my movement is unrecognizable." },
        { n: "Omar B.", r: "Abu Dhabi", q: "World-class methodology. Every session has a purpose. Worth every minute." },
      ],
    },
    social: { tag: "Social", title: "On the court.", handle: "@mmpersonaltraining", cta: "Follow on Instagram" },
    certs: {
      tag: "Coach Certifications",
      title: "Verified by ITF Academy",
      sub: "International certification in conditioning and strength for high-performance tennis players.",
      view: "View certificate",
    },
    articles: {
      tag: "Articles & education",
      title: "Learn Tennis Performance",
      sub: "Practical education and curated articles in one place.",
      read: "Read article",
      source: "Source file",
      browseAll: "Browse all articles",
      back: "Back to articles",
    },
    cta: {
      title: "Train Like a Modern Tennis Athlete",
      sub: "Free assessment. Direct line to the coach.",
      btn: "WhatsApp Consultation",
      btn2: "Book Private Session",
      instagram: "Instagram",
      formLabel: "Quick inquiry",
    },
    ready: { title: "Ready to improve your game?", sub: "Book your session today and start your journey.", btn: "Book on WhatsApp" },
    footer: {
      rights: "All rights reserved.",
      tag: "Dubai Tennis Coach",
      aboutTitle: "Designed around your progress",
      aboutText: "This is a direct coach-to-athlete platform for training plans, education, and performance updates.",
      quickLinks: "Quick Links",
      contactTitle: "Direct Contact",
      instagram: "Instagram",
    },
    whatsapp: "Chat on WhatsApp",
  },
  fa: {
    dir: "rtl",
    nav: { home: "خانه", about: "درباره", training: "آموزش", results: "نتایج", articles: "مقالات", contact: "تماس" },
    header: {
      label: "وب‌سایت شخصی مربی",
      subLabel: "مربیگری خصوصی تنیس و آمادگی جسمانی",
      location: "دبی",
      whatsapp: "واتساپ مستقیم",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
    },
    hero: {
      eyebrow: "مربی خصوصی تنیس",
      title1: "هوشمند تمرین کن.",
      title2: "قدرتی رقابت کن.",
      subtitle: "از تکنیک تا آمادگی مسابقه، با یک مسیر تمرینی ساختاریافته و نتیجه‌محور، بازی کامل‌تری بساز.",
      cta1: "رزرو جلسه تمرین",
      cta2: "مشاوره واتساپ",
      badges: ["متخصص آماده‌سازی تنیس", "تجربه دبی", "سیستم تمرین عملکردی"],
    },
    about: {
      tag: "مربی",
      title: "محمد مسلم‌خانی",
      role: "متخصص تنیس و آماده‌سازی عملکرد",
      bio: "مربی تنیس و متخصص آماده‌سازی بدنی با ترکیب مربیگری تکنیکی، علوم ورزشی، کارایی حرکت و تمرین فانکشنال، با تجربه بین‌المللی در دبی.",
      stats: [
        { v: "+۱۰", l: "سال مربیگری" },
        { v: "+۵۰۰", l: "جلسه عملکرد" },
        { v: "۱۰۰٪", l: "آماده‌سازی تنیس" },
        { v: "∞", l: "توسعه ورزشکار" },
      ],
    },
    services: {
      tag: "برنامه‌ها",
      title: "ساخته‌شده برای عملکرد",
      sub: "مسیرهای تمرینی برای بازیکنان تنیسی که از سکون می‌گریزند.",
      items: [
        { t: "تنیس خصوصی", d: "مربیگری تک‌نفره متناسب با سطح و اهداف رقابتی." },
        { t: "آماده‌سازی تنیس", d: "پروتکل‌های ویژه ورزش بر اساس نیازهای بازی." },
        { t: "HIIT برای تنیس", d: "تمرین اینتروال روی کورت برای VO2max." },
        { t: "سرعت و چابکی", d: "گام اول انفجاری، تغییر جهت، فوت‌ورک واکنشی." },
        { t: "قدرت و توان", d: "تولید نیرو، توان چرخشی و قدرت مقاوم." },
        { t: "ریکاوری و تحرک", d: "سیستم‌های ریکاوری برای ماندن در کورت." },
      ],
    },
    science: {
      tag: "آزمایشگاه عملکرد مسابقه",
      title: "فیزیولوژی تنیس و طراحی تمرین مسابقه",
      sub: "در این بخش می‌بینی بدن در مسابقه چه فشاری تحمل می‌کند و تمرین باید بر چه پایه‌ای طراحی شود.",
      demands: {
        title: "مطالبات واقعی بدن در تنیس",
        items: [
          { l: "سرعت", v: 92 },
          { l: "چابکی", v: 96 },
          { l: "توان", v: 88 },
          { l: "استقامت", v: 84 },
          { l: "ریکاوری", v: 78 },
        ],
      },
      systems: {
        title: "سیستم‌های انرژی",
        items: [
          { code: "ATP-PC", t: "فسفاژن", time: "۰–۱۰ ثانیه", d: "انرژی انفجاری. اسپرینت، سرویس و شتاب." },
          { code: "ANAEROBIC", t: "گلیکولیتیک", time: "۱۰–۹۰ ثانیه", d: "رالی‌های پرشدت. تحمل لاکتات." },
          { code: "AEROBIC", t: "اکسیداتیو", time: "+۹۰ ثانیه", d: "ریکاوری بین پوینت‌ها و استقامت طولانی." },
        ],
      },
      hiit: {
        title: "مدل‌های تمرین اینتروال (HIIT)",
        workLabel: "بازه کار",
        restLabel: "بازه استراحت",
        items: [
          { t: "اینتروال طولانی", w: "۳–۵ دق", r: "۲–۳ دق", d: "هدف: VO2max." },
          { t: "اینتروال کوتاه", w: "۱۵–۳۰ ث", r: "۱۵–۳۰ ث", d: "توان تکرارپذیر." },
          { t: "اسپرینت تکراری", w: "۵–۱۰ ث", r: "۲۰–۶۰ ث", d: "ظرفیت شتاب حداکثری." },
        ],
      },
      movement: {
        title: "الگوهای حرکتی تنیس",
        items: ["الگوی X", "الگوی ریکاوری", "ساویساید", "تمرین تغییر جهت"],
      },
    },
    results: { tag: "نتایج", title: "نتایجی که حرف می‌زنند", sub: "خروجی واقعی از تمرین هدفمند و اجرای منظم." },
    resultsCards: [
      { title: "کاهش وزن", stat: "۱۱- کیلو", desc: "بهبود ترکیب بدنی و عملکرد بهتر." },
      { title: "بهبود عملکرد", stat: "+۳۷٪", desc: "افزایش سرعت، استقامت و کیفیت مسابقه." },
      { title: "بهبود موبیلیتی", stat: "+۶۰٪", desc: "حرکت بهتر، انعطاف بیشتر و پیشگیری از آسیب." },
    ],
    reviews: {
      tag: "نظرات",
      title: "ورزشکاران چه می‌گویند",
      items: [
        { n: "احمد ک.", r: "دبی", q: "آماده‌سازی بدنی بازی‌ام را عوض کرد. در ست سوم بیشتر دوام می‌آورم." },
        { n: "سارا م.", r: "دبی", q: "اصولی، علمی، شدید. سه ماه و حرکتم قابل تشخیص نیست." },
        { n: "عمر ب.", r: "ابوظبی", q: "روش‌شناسی در سطح جهانی. هر جلسه هدف دارد." },
      ],
    },
    social: { tag: "شبکه‌های اجتماعی", title: "روی کورت.", handle: "@mmpersonaltraining", cta: "دنبال در اینستاگرام" },
    certs: {
      tag: "مدارک مربی",
      title: "تاییدشده توسط ITF Academy",
      sub: "مدرک بین‌المللی در آماده‌سازی بدنی و قدرت برای بازیکنان تنیس سطح بالا.",
      view: "مشاهده مدرک",
    },
    articles: {
      tag: "مقالات و آموزش",
      title: "یادگیری علمیِ تنیس",
      sub: "آموزش‌های کاربردی و مقالات منتخب در یک بخش واحد.",
      read: "مطالعه مقاله",
      source: "فایل منبع",
      browseAll: "مشاهده همه مقالات",
      back: "بازگشت به مقالات",
    },
    cta: {
      title: "مثل ورزشکار مدرن تنیس تمرین کن",
      sub: "ارزیابی رایگان. ارتباط مستقیم با مربی.",
      btn: "مشاوره واتساپ",
      btn2: "رزرو جلسه خصوصی",
      instagram: "اینستاگرام",
      formLabel: "درخواست سریع",
    },
    ready: { title: "آماده‌ای بازی‌ات را بهتر کنی؟", sub: "همین امروز جلسه‌ات را رزرو کن و مسیر پیشرفت را شروع کن.", btn: "رزرو در واتساپ" },
    footer: {
      rights: "تمامی حقوق محفوظ است.",
      tag: "مربی تنیس-دبی",
      aboutTitle: "این سایت برای رشد شما طراحی شده",
      aboutText: "یک فضای مستقیم بین مربی و ورزشکار برای برنامه تمرینی، آموزش و پیگیری عملکرد.",
      quickLinks: "لینک‌های سریع",
      contactTitle: "ارتباط مستقیم",
      instagram: "اینستاگرام",
    },
    whatsapp: "گفتگو در واتساپ",
  },
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", about: "نبذة", training: "التدريب", results: "النتائج", articles: "المقالات", contact: "تواصل" },
    header: {
      label: "موقع تدريب شخصي",
      subLabel: "تدريب خاص للتنس والإعداد البدني",
      location: "دبي",
      whatsapp: "واتساب مباشر",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      eyebrow: "تدريب تنس خاص",
      title1: "تدرّب بذكاء.",
      title2: "نافس بقوة.",
      subtitle: "من المهارة الفنية إلى جاهزية المباراة، ابنِ أداءً متكاملاً عبر منهج تدريبي منظم وموجّه للنتائج.",
      cta1: "احجز جلسة تدريب",
      cta2: "استشارة واتساب",
      badges: ["أخصائي تأهيل تنس", "خبرة دبي", "نظام تدريب أداء"],
    },
    about: {
      tag: "المدرّب",
      title: "محمد مسلم خاني",
      role: "أخصائي تنس وتأهيل أداء",
      bio: "مدرب تنس وأخصائي تأهيل بدني يجمع بين التدريب التقني وعلوم الرياضة وكفاءة الحركة، مع خبرة دولية تشمل دبي.",
      stats: [
        { v: "+10", l: "سنوات تدريب" },
        { v: "+500", l: "جلسة أداء" },
        { v: "100٪", l: "تأهيل تنس" },
        { v: "∞", l: "تطوير رياضي" },
      ],
    },
    services: {
      tag: "البرامج",
      title: "مصمّم للأداء",
      sub: "مسارات تدريب هندسية للاعبي التنس الذين يرفضون الثبات.",
      items: [
        { t: "تنس خاص", d: "تدريب تقني فردي مصمم لمستواك وأهدافك." },
        { t: "تأهيل التنس", d: "بروتوكولات خاصة بالرياضة." },
        { t: "HIIT للتنس", d: "تدريب فاصل على الملعب لـ VO2max." },
        { t: "سرعة ورشاقة", d: "خطوة أولى انفجارية وتغيير اتجاه." },
        { t: "قوة وقدرة", d: "إنتاج القوة والقدرة الدورانية." },
        { t: "تعافي ومرونة", d: "أنظمة تعافي للبقاء على الملعب." },
      ],
    },
    science: {
      tag: "مختبر أداء المباراة",
      title: "فسيولوجيا التنس وتصميم تمرين المباراة",
      sub: "هنا نفهم متطلبات الجسم في المباراة وكيف تُبنى الحصة التدريبية على أساس علمي واضح.",
      demands: {
        title: "المتطلبات الفعلية للجسم في التنس",
        items: [
          { l: "السرعة", v: 92 },
          { l: "الرشاقة", v: 96 },
          { l: "القوة", v: 88 },
          { l: "التحمّل", v: 84 },
          { l: "التعافي", v: 78 },
        ],
      },
      systems: {
        title: "أنظمة الطاقة",
        items: [
          { code: "ATP-PC", t: "الفوسفاجيني", time: "٠–١٠ ث", d: "طاقة انفجارية. سرعات وإرسال." },
          { code: "ANAEROBIC", t: "الجلايكولي", time: "١٠–٩٠ ث", d: "تبادلات عالية الشدة." },
          { code: "AEROBIC", t: "الأكسيدي", time: "+٩٠ ث", d: "تعافي بين النقاط." },
        ],
      },
      hiit: {
        title: "نماذج التدريب المتقطع (HIIT)",
        workLabel: "زمن العمل",
        restLabel: "زمن الراحة",
        items: [
          { t: "فاصل طويل", w: "٣–٥ د", r: "٢–٣ د", d: "هدف VO2max." },
          { t: "فاصل قصير", w: "١٥–٣٠ ث", r: "١٥–٣٠ ث", d: "قدرة متكررة." },
          { t: "سرعات متكررة", w: "٥–١٠ ث", r: "٢٠–٦٠ ث", d: "سعة تسارع قصوى." },
        ],
      },
      movement: {
        title: "أنماط الحركة في التنس",
        items: ["نمط X", "نمط التعافي", "ركض الانتحاري", "تمارين تغيير الاتجاه"],
      },
    },
    results: { tag: "النتائج", title: "نتائج تتحدث", sub: "مخرجات حقيقية من تدريب مركز وانضباط مستمر." },
    resultsCards: [
      { title: "خفض الوزن", stat: "11- كغ", desc: "تحسن في تركيب الجسم وأداء أفضل." },
      { title: "تعزيز الأداء", stat: "+37%", desc: "زيادة في السرعة والتحمل وجودة المباراة." },
      { title: "تحسين الحركة", stat: "+60%", desc: "حركة أفضل ومرونة أعلى وتقليل الإصابات." },
    ],
    reviews: {
      tag: "التقييمات",
      title: "ماذا يقول الرياضيون",
      items: [
        { n: "أحمد ك.", r: "دبي", q: "التأهيل البدني غيّر لعبتي. أصمد أكثر في المجموعة الثالثة." },
        { n: "سارة م.", r: "دبي", q: "منهجي وعلمي ومكثف. ثلاثة أشهر وتغيرت حركتي." },
        { n: "عمر ب.", r: "أبوظبي", q: "منهجية عالمية. كل جلسة لها هدف." },
      ],
    },
    social: { tag: "وسائل التواصل", title: "على الملعب.", handle: "@mmpersonaltraining", cta: "تابع على إنستغرام" },
    certs: {
      tag: "شهادات المدرب",
      title: "معتمد من ITF Academy",
      sub: "شهادات دولية في الإعداد البدني والقوة للاعبي التنس ذوي الأداء العالي.",
      view: "عرض الشهادة",
    },
    articles: {
      tag: "المقالات والتعليم",
      title: "تعلم أداء التنس",
      sub: "محتوى تعليمي عملي ومقالات مختارة في مكان واحد.",
      read: "اقرأ المقال",
      source: "الملف المصدر",
      browseAll: "عرض جميع المقالات",
      back: "العودة إلى المقالات",
    },
    cta: {
      title: "تدرّب كرياضي تنس عصري",
      sub: "تقييم مجاني. خط مباشر مع المدرب.",
      btn: "استشارة واتساب",
      btn2: "احجز جلسة خاصة",
      instagram: "إنستغرام",
      formLabel: "استفسار سريع",
    },
    ready: { title: "جاهز لتحسين لعبتك؟", sub: "احجز جلستك اليوم وابدأ رحلتك.", btn: "احجز عبر واتساب" },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tag: "مدرب تنس-دبي",
      aboutTitle: "الموقع مصمم لتطورك الرياضي",
      aboutText: "منصة مباشرة بين المدرب واللاعب للبرامج التدريبية والتعليم ومتابعة الأداء.",
      quickLinks: "روابط سريعة",
      contactTitle: "تواصل مباشر",
      instagram: "إنستغرام",
    },
    whatsapp: "محادثة واتساب",
  },
} as const;

export type Translation = (typeof translations)[Lang];

export function isLang(value: string): value is Lang {
  return locales.includes(value as Lang);
}

export function getLangOrDefault(value?: string): Lang {
  if (!value) {
    return defaultLang;
  }
  return isLang(value) ? value : defaultLang;
}

export function getTranslations(value?: string): Translation {
  const lang = getLangOrDefault(value);
  return translations[lang];
}

export const WHATSAPP_URL = "https://wa.me/971000000000?text=Hi%20Mohammad%2C%20I%27m%20interested%20in%20training";
export const INSTAGRAM_URL = "https://instagram.com/mmpersonaltraining";

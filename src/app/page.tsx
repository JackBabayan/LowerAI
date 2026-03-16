"use client";

import { useState } from "react";
import styles from "./page.module.scss";

type Language = "en" | "hy" | "ru";

type LocalizedContent = {
  navItems: { href: string; label: string }[];
  labels: {
    primaryNav: string;
    languageSwitch: string;
    languageEnglish: string;
    languageArmenian: string;
    languageRussian: string;
    toggleMenu: string;
    mobileNav: string;
    learnMore: string;
    forLabel: string;
    linkedin: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    privacy: string;
    terms: string;
  };
  hero: {
    titlePrefix: string;
    titleEmphasis: string;
    titleSuffix: string;
    subtitle: string;
  };
  featured: {
    badge: string;
    title: string;
    description: string;
  };
  about: {
    title: string;
    lead: string;
    missionTitle: string;
    missionText: string;
    problemTitle: string;
    problemText: string;
    approachTitle: string;
    approachText: string;
    values: { title: string; description: string }[];
  };
  products: {
    title: string;
    items: {
      title: string;
      audience: string;
      description: string;
      features: string[];
      status: string;
    }[];
  };
  team: {
    title: string;
    members: { name: string; role: string; bio: string; linkedin: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
};

const content: Record<Language, LocalizedContent> = {
  en: {
    navItems: [
      { href: "#about", label: "About" },
      { href: "#products", label: "Products" },
      { href: "#team", label: "Team" },
      { href: "#contact", label: "Contact" },
    ],
    labels: {
      primaryNav: "Primary navigation",
      languageSwitch: "Language switch",
      languageEnglish: "English",
      languageArmenian: "Armenian",
      languageRussian: "Russian",
      toggleMenu: "Toggle navigation menu",
      mobileNav: "Mobile navigation",
      learnMore: "Learn more",
      forLabel: "For",
      linkedin: "LinkedIn",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    hero: {
      titlePrefix: "Illuminating",
      titleEmphasis: "legal knowledge",
      titleSuffix: "through artificial intelligence",
      subtitle:
        "We build intelligent systems that transform how governments and citizens access legal information.",
    },
    featured: {
      badge: "In Development",
      title: "Launching Armenia's First AI Legal Assistant",
      description:
        "Our flagship product combines proprietary AI technology with comprehensive Armenian legal databases to deliver instant, accurate legal research and consultation for professionals and citizens.",
    },
    about: {
      title: "Building the future of legal technology",
      lead: "We founded Noctua Tech after witnessing a critical gap in Armenia's legal system: professionals spend countless hours searching fragmented databases, while citizens rely on word-of-mouth because official sources are hard to navigate.",
      missionTitle: "Our Mission",
      missionText:
        "Modernize Armenia's legal infrastructure through AI and transform legal services for government and citizens.",
      problemTitle: "The Problem",
      problemText:
        "Professionals waste valuable hours searching fragmented legal databases, while citizens struggle with complex official sources.",
      approachTitle: "Our Approach",
      approachText:
        "We build proprietary AI trained on Armenian legal corpus and deliver one unified platform with continuous legal updates.",
      values: [
        {
          title: "Innovation",
          description:
            "We apply state-of-the-art AI to solve real legal access problems.",
        },
        {
          title: "Transparency",
          description:
            "We value clarity in how data and systems are built and used.",
        },
        {
          title: "National Progress",
          description:
            "We contribute to modernizing Armenia's legal infrastructure.",
        },
        {
          title: "Trust",
          description:
            "We earn trust through quality, reliability, and legal accuracy.",
        },
      ],
    },
    products: {
      title: "Solutions for government and legal professionals",
      items: [
        {
          title: "AI Legal Assistant",
          audience: "Lawyers, judges, legal professionals, and citizens",
          description:
            "Instant legal research, case analysis, and consultations powered by Armenian law.",
          features: [
            "Search across Armenian legal codes",
            "Case precedent analysis",
            "Natural language queries in Armenian, English, and Russian",
            "Continuous updates with latest regulations",
          ],
          status: "In Development - Launch 2026",
        },
        {
          title: "Government AI Suite",
          audience: "Government agencies, ministries, and regulatory bodies",
          description:
            "AI tools for policy analysis, legislative drafting, and compliance workflows.",
          features: [
            "Policy impact analysis",
            "Legislative drafting assistant",
            "Regulatory compliance monitoring",
            "Inter-agency knowledge sharing",
          ],
          status: "Planned - Roadmap 2026-2027",
        },
        {
          title: "Citizen Legal Portal",
          audience: "Armenian citizens and small businesses",
          description:
            "Accessible legal education and guidance for everyday legal questions.",
          features: [
            "Plain-language legal explanations",
            "Know-your-rights guidance",
            "Document template generator",
            "Legal process navigator",
          ],
          status: "Planned - Roadmap 2026",
        },
      ],
    },
    team: {
      title: "Led by experienced founders",
      members: [
        {
          name: "Vitali Sargsyan",
          role: "Co-founder & CEO",
          bio: "Vitali drives business vision and strategic partnerships with a strong entrepreneurial background in building scalable ventures.",
          linkedin: "#",
        },
        {
          name: "Saro Babayan",
          role: "Co-founder & Chief Product Officer",
          bio: "Saro leads product direction with a deep focus on user needs, turning complex legal workflows into intuitive digital experiences.",
          linkedin: "#",
        },
        {
          name: "Tigran Vardanyan",
          role: "Co-founder & Chief Technology Officer",
          bio: "Tigran leads AI and engineering architecture, building robust, high-accuracy systems for legal search and reasoning.",
          linkedin: "#",
        },
      ],
    },
    contact: {
      title: "Let's work together",
      subtitle: "Interested in partnering or investing? Get in touch.",
      email: "placeholder@noctuatech.ai",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Tell us about your request",
    },
    footer: {
      tagline: "AI solutions for legal infrastructure.",
      copyright: "© 2025 Noctua Tech. All rights reserved.",
    },
  },
  hy: {
    navItems: [
      { href: "#about", label: "Մեր մասին" },
      { href: "#products", label: "Ապրանքներ" },
      { href: "#team", label: "Թիմ" },
      { href: "#contact", label: "Կապ" },
    ],
    labels: {
      primaryNav: "Հիմնական նավիգացիա",
      languageSwitch: "Լեզվի ընտրություն",
      languageEnglish: "Անգլերեն",
      languageArmenian: "Հայերեն",
      languageRussian: "Ռուսերեն",
      toggleMenu: "Բացել նավիգացիայի մենյուն",
      mobileNav: "Բջջային նավիգացիա",
      learnMore: "Իմանալ ավելին",
      forLabel: "Ում համար",
      linkedin: "LinkedIn",
      name: "Անուն",
      email: "Էլ. հասցե",
      message: "Հաղորդագրություն",
      submit: "Ուղարկել",
      privacy: "Գաղտնիության քաղաքականություն",
      terms: "Օգտագործման պայմաններ",
    },
    hero: {
      titlePrefix: "Լուսավորելով",
      titleEmphasis: "իրավական գիտելիքը",
      titleSuffix: "արհեստական բանականությամբ",
      subtitle:
        "Մենք ստեղծում ենք խելացի համակարգեր, որոնք փոխում են, թե ինչպես են պետությունն ու քաղաքացիները ստանում իրավական տեղեկատվություն։",
    },
    featured: {
      badge: "Մշակման փուլում",
      title: "Հայաստանի առաջին AI Իրավական Օգնականի մեկնարկը",
      description:
        "Մեր առաջատար արտադրանքը համադրում է սեփական AI տեխնոլոգիան և հայկական իրավական տվյալների բազաները՝ ապահովելով արագ և ճշգրիտ իրավական հետազոտություն ու խորհրդատվություն մասնագետների և քաղաքացիների համար։",
    },
    about: {
      title: "Կառուցում ենք իրավական տեխնոլոգիաների ապագան",
      lead: "Noctua Tech-ը հիմնեցինք՝ տեսնելով Հայաստանի իրավական համակարգի կարևոր բացը. մասնագետները ժամեր են ծախսում բեկված բազաներում որոնումների վրա, իսկ քաղաքացիները պաշտոնական աղբյուրների բարդության պատճառով ապավինում են ծանոթների խորհուրդներին։",
      missionTitle: "Մեր առաքելությունը",
      missionText:
        "AI-ի միջոցով արդիականացնել Հայաստանի իրավական ենթակառուցվածքը և փոխակերպել իրավական ծառայությունները պետության ու քաղաքացիների համար։",
      problemTitle: "Խնդիրը",
      problemText:
        "Մասնագետները կորցնում են արժեքավոր ժամանակ բեկված իրավական բազաներում, իսկ քաղաքացիները դժվարանում են պաշտոնական աղբյուրների բարդության պատճառով։",
      approachTitle: "Մեր մոտեցումը",
      approachText:
        "Մենք մշակում ենք հայկական իրավական կորպուսի վրա սովորած սեփական AI և առաջարկում ենք մեկ միասնական հարթակ՝ շարունակական իրավական թարմացումներով։",
      values: [
        {
          title: "Նորարարություն",
          description:
            "Օգտագործում ենք առաջատար AI՝ իրավական հասանելիության իրական խնդիրները լուծելու համար։",
        },
        {
          title: "Թափանցիկություն",
          description:
            "Գնահատում ենք պարզությունն ու բացությունը՝ տվյալների և ալգորիթմների կիրառման մեջ։",
        },
        {
          title: "Ազգային առաջընթաց",
          description:
            "Նպաստում ենք Հայաստանի իրավական ենթակառուցվածքի արդիականացմանը։",
        },
        {
          title: "Վստահություն",
          description:
            "Վստահություն ենք կառուցում որակի, հուսալիության և իրավական ճշգրտության միջոցով։",
        },
      ],
    },
    products: {
      title: "Լուծումներ պետական և իրավական մասնագետների համար",
      items: [
        {
          title: "AI Իրավական Օգնական",
          audience: "Փաստաբաններ, դատավորներ, իրավաբաններ և քաղաքացիներ",
          description:
            "Արագ իրավական հետազոտություն, գործերի վերլուծություն և խորհրդատվություն՝ հիմնված Հայաստանի օրենսդրության վրա։",
          features: [
            "Որոնում հայկական իրավական ամբողջ օրենսդրությամբ",
            "Դատական նախադեպերի վերլուծություն",
            "Բնական լեզվի հարցումներ հայերեն, անգլերեն և ռուսերեն",
            "Շարունակական թարմացումներ վերջին կարգավորումների հետ",
          ],
          status: "Մշակման փուլում - Մեկնարկ 2026",
        },
        {
          title: "Government AI Suite",
          audience:
            "Պետական կառույցներ, նախարարություններ և կարգավորող մարմիններ",
          description:
            "AI գործիքներ քաղաքականության վերլուծության, օրենսդրական նախագծման և համապատասխանության գործընթացների համար։",
          features: [
            "Քաղաքականության ազդեցության վերլուծություն",
            "Օրենսդրական նախագծման օգնական",
            "Կարգավորիչ համապատասխանության մոնիթորինգ",
            "Միջգերատեսչական գիտելիքների փոխանակում",
          ],
          status: "Պլանավորված - Roadmap 2026-2027",
        },
        {
          title: "Citizen Legal Portal",
          audience: "Հայաստանի քաղաքացիներ և փոքր բիզնեսներ",
          description:
            "Հասանելի իրավական կրթություն և ուղեցույցներ ամենօրյա իրավական հարցերի համար։",
          features: [
            "Իրավական պարզ բացատրություններ",
            "Ձեր իրավունքների մասին ուղեցույց",
            "Փաստաթղթերի ձևանմուշների գեներատոր",
            "Իրավական գործընթացների նավիգատոր",
          ],
          status: "Պլանավորված - Roadmap 2026",
        },
      ],
    },
    team: {
      title: "Փորձառու հիմնադիրների առաջնորդությամբ",
      members: [
        {
          name: "Vitali Sargsyan",
          role: "Համահիմնադիր և CEO",
          bio: "Vitali-ն ղեկավարում է բիզնես ռազմավարությունը և գործընկերությունները՝ ունենալով մասշտաբավորվող նախաձեռնությունների կառուցման փորձ։",
          linkedin: "#",
        },
        {
          name: "Saro Babayan",
          role: "Համահիմնադիր և Product Director",
          bio: "Saro-ն ղեկավարում է պրոդուկտի զարգացումը՝ օգտատերերի կարիքները դարձնելով պարզ և արդյունավետ թվային փորձառություն։",
          linkedin: "#",
        },
        {
          name: "Tigran Vardanyan",
          role: "Համահիմնադիր և CTO",
          bio: "Tigran-ը ղեկավարում է AI և ինժեներական ճարտարապետությունը՝ կառուցելով հուսալի և բարձր ճշգրտությամբ համակարգեր։",
          linkedin: "#",
        },
      ],
    },
    contact: {
      title: "Եկեք համագործակցենք",
      subtitle:
        "Հետաքրքրվա՞ծ եք գործընկերությամբ կամ ներդրումով։ Կապ հաստատեք մեզ հետ։",
      email: "placeholder@noctuatech.ai",
      namePlaceholder: "Ձեր անունը",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Գրեք ձեր հարցումը",
    },
    footer: {
      tagline: "AI լուծումներ իրավական ենթակառուցվածքի համար։",
      copyright: "© 2025 Noctua Tech. Բոլոր իրավունքները պաշտպանված են։",
    },
  },
  ru: {
    navItems: [
      { href: "#about", label: "О нас" },
      { href: "#products", label: "Продукты" },
      { href: "#team", label: "Команда" },
      { href: "#contact", label: "Контакты" },
    ],
    labels: {
      primaryNav: "Основная навигация",
      languageSwitch: "Переключение языка",
      languageEnglish: "Английский",
      languageArmenian: "Армянский",
      languageRussian: "Русский",
      toggleMenu: "Открыть меню навигации",
      mobileNav: "Мобильная навигация",
      learnMore: "Узнать больше",
      forLabel: "Для",
      linkedin: "LinkedIn",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      submit: "Отправить",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
    hero: {
      titlePrefix: "Освещая",
      titleEmphasis: "юридические знания",
      titleSuffix: "с помощью искусственного интеллекта",
      subtitle:
        "Мы создаем интеллектуальные системы, которые меняют способ доступа государства и граждан к правовой информации.",
    },
    featured: {
      badge: "В разработке",
      title: "Запуск первого AI Legal Assistant в Армении",
      description:
        "Наш флагманский продукт объединяет собственные AI-технологии и обширные армянские правовые базы, чтобы обеспечить мгновенный и точный юридический поиск и консультации для специалистов и граждан.",
    },
    about: {
      title: "Строим будущее юридических технологий",
      lead: "Мы основали Noctua Tech, увидев критический разрыв в правовой системе Армении: специалисты тратят часы на поиск в разрозненных базах, а граждане полагаются на советы знакомых, потому что официальные источники сложны в использовании.",
      missionTitle: "Наша миссия",
      missionText:
        "Модернизировать правовую инфраструктуру Армении с помощью AI и трансформировать юридические сервисы для государства и граждан.",
      problemTitle: "Проблема",
      problemText:
        "Специалисты теряют ценные часы на поиск в разрозненных правовых базах, а гражданам сложно пользоваться официальными источниками.",
      approachTitle: "Наш подход",
      approachText:
        "Мы создаем собственный AI, обученный на армянском юридическом корпусе, и предоставляем единую платформу с постоянными обновлениями.",
      values: [
        {
          title: "Инновации",
          description:
            "Применяем передовые AI-технологии для решения реальных проблем доступа к праву.",
        },
        {
          title: "Прозрачность",
          description:
            "Мы за ясность и открытость в работе с данными и алгоритмами.",
        },
        {
          title: "Национальный прогресс",
          description:
            "Содействуем модернизации правовой инфраструктуры Армении.",
        },
        {
          title: "Доверие",
          description:
            "Строим доверие через качество, надежность и юридическую точность.",
        },
      ],
    },
    products: {
      title: "Решения для государства и юридических специалистов",
      items: [
        {
          title: "AI Legal Assistant",
          audience: "Юристы, судьи, правовые специалисты и граждане",
          description:
            "Мгновенный юридический поиск, анализ кейсов и консультации на основе законодательства Армении.",
          features: [
            "Поиск по всем правовым кодексам Армении",
            "Анализ судебных прецедентов",
            "Запросы на естественном языке: армянский, английский, русский",
            "Постоянные обновления по последним регуляциям",
          ],
          status: "В разработке - Запуск 2026",
        },
        {
          title: "Government AI Suite",
          audience:
            "Государственные органы, министерства и регулирующие структуры",
          description:
            "AI-инструменты для анализа политик, подготовки законопроектов и контроля соответствия.",
          features: [
            "Анализ влияния политик",
            "Помощник по законодательному драфтингу",
            "Мониторинг регуляторного соответствия",
            "Обмен знаниями между ведомствами",
          ],
          status: "Планируется - Roadmap 2026-2027",
        },
        {
          title: "Citizen Legal Portal",
          audience: "Граждане Армении и малый бизнес",
          description:
            "Доступные правовые объяснения и сопровождение для повседневных юридических вопросов.",
          features: [
            "Объяснение права простым языком",
            "Гайд по правам граждан",
            "Генератор шаблонов документов",
            "Навигатор юридических процессов",
          ],
          status: "Планируется - Roadmap 2026",
        },
      ],
    },
    team: {
      title: "Команда опытных основателей",
      members: [
        {
          name: "Vitali Sargsyan",
          role: "Co-founder & CEO",
          bio: "Vitali отвечает за стратегию и партнерства, опираясь на предпринимательский опыт в построении масштабируемых проектов.",
          linkedin: "#",
        },
        {
          name: "Saro Babayan",
          role: "Co-founder & Chief Product Officer",
          bio: "Saro руководит продуктовым направлением и переводит сложные юридические процессы в понятный пользовательский опыт.",
          linkedin: "#",
        },
        {
          name: "Tigran Vardanyan",
          role: "Co-founder & Chief Technology Officer",
          bio: "Tigran возглавляет AI и инженерную архитектуру, создавая надежные и точные системы юридического поиска.",
          linkedin: "#",
        },
      ],
    },
    contact: {
      title: "Давайте работать вместе",
      subtitle: "Заинтересованы в партнерстве или инвестициях? Свяжитесь с нами.",
      email: "placeholder@noctuatech.ai",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Расскажите о вашем запросе",
    },
    footer: {
      tagline: "AI-решения для правовой инфраструктуры.",
      copyright: "© 2025 Noctua Tech. Все права защищены.",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Noctua Tech",
  url: "https://noctuatech.org",
  description:
    "AI solutions for legal infrastructure, modernizing Armenia's legal access for professionals, government, and citizens.",
  email: "placeholder@noctuatech.ai",
  foundingLocation: "Armenia",
  sameAs: ["https://www.linkedin.com/company/noctua-tech"],
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  const languageButtons: { code: Language; label: string; ariaLabel: string }[] =
    [
      { code: "en", label: "EN", ariaLabel: t.labels.languageEnglish },
      { code: "hy", label: "ARM", ariaLabel: t.labels.languageArmenian },
      { code: "ru", label: "RU", ariaLabel: t.labels.languageRussian },
    ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a className={styles.logo} href="#top" aria-label="Noctua Tech home">
            <span className={styles.logoMark}>N</span>
            <span>Noctua Tech</span>
          </a>

          <nav className={styles.desktopNav} aria-label={t.labels.primaryNav}>
            {t.navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.langSwitch} aria-label={t.labels.languageSwitch}>
            {languageButtons.map((button) => (
              <button
                key={button.code}
                type="button"
                aria-label={button.ariaLabel}
                onClick={() => setLanguage(button.code)}
                className={language === button.code ? styles.langActive : ""}
              >
                {button.label}
              </button>
            ))}
          </div>

          <details className={styles.mobileMenu}>
            <summary aria-label={t.labels.toggleMenu}>
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label={t.labels.mobileNav}>
              {t.navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="top">
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.container}>
            <h1>
              {t.hero.titlePrefix} <span>{t.hero.titleEmphasis}</span>{" "}
              {t.hero.titleSuffix}
            </h1>
            <p>{t.hero.subtitle}</p>
            <a className={styles.scrollIndicator} href="#featured">
              {t.labels.learnMore}
            </a>
          </div>
        </section>

        <section
          id="featured"
          className={`${styles.section} ${styles.sectionDark} ${styles.featured}`}
        >
          <div className={styles.container}>
            <div className={styles.featuredCard}>
              <span className={styles.badge}>{t.featured.badge}</span>
              <h2>{t.featured.title}</h2>
              <p>{t.featured.description}</p>
              <div className={styles.mockup}>
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.container}>
            <h2>{t.about.title}</h2>
            <p className={styles.lead}>{t.about.lead}</p>

            <div className={styles.columns3}>
              <article className={styles.infoCard}>
                <h3>{t.about.missionTitle}</h3>
                <p>{t.about.missionText}</p>
              </article>
              <article className={styles.infoCard}>
                <h3>{t.about.problemTitle}</h3>
                <p>{t.about.problemText}</p>
              </article>
              <article className={styles.infoCard}>
                <h3>{t.about.approachTitle}</h3>
                <p>{t.about.approachText}</p>
              </article>
            </div>

            <div className={styles.values}>
              {t.about.values.map((value) => (
                <article key={value.title} className={styles.valueCard}>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className={`${styles.section} ${styles.sectionBeige} ${styles.products}`}
        >
          <div className={styles.container}>
            <h2>{t.products.title}</h2>
            <div className={styles.productsGrid}>
              {t.products.items.map((product) => (
                <article key={product.title} className={styles.productCard}>
                  <span className={styles.badgeSecondary}>{product.status}</span>
                  <h3>{product.title}</h3>
                  <p>
                    <strong>{t.labels.forLabel}:</strong> {product.audience}
                  </p>
                  <p>{product.description}</p>
                  <ul>
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.container}>
            <h2>{t.team.title}</h2>
            <div className={styles.teamGrid}>
              {t.team.members.map((member) => (
                <article key={member.name} className={styles.teamCard}>
                  <div className={styles.teamPhoto} aria-hidden />
                  <h3>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p>{member.bio}</p>
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    {t.labels.linkedin}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <h2>{t.contact.title}</h2>
            <p className={styles.contactLead}>{t.contact.subtitle}</p>
            <a className={styles.contactEmail} href={`mailto:${t.contact.email}`}>
              {t.contact.email}
            </a>

            <form className={styles.contactForm}>
              <label>
                {t.labels.name}
                <input type="text" name="name" placeholder={t.contact.namePlaceholder} />
              </label>
              <label>
                {t.labels.email}
                <input type="email" name="email" placeholder={t.contact.emailPlaceholder} />
              </label>
              <label>
                {t.labels.message}
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                />
              </label>
              <button type="submit">{t.labels.submit}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <a className={styles.logo} href="#top" aria-label="Noctua Tech home">
              <span className={styles.logoMark}>N</span>
              <span>Noctua Tech</span>
            </a>
            <p>{t.footer.tagline}</p>
          </div>
          <div className={styles.footerMeta}>
            <p>{t.footer.copyright}</p>
            <div>
              <a href="#">{t.labels.privacy}</a>
              <a href="#">{t.labels.terms}</a>
            </div>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
}

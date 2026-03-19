export type Language = "en" | "hy" | "ru";

export type LocalizedContent = {
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
    roadmap: {
      title: string;
      text: string;
    }[];
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
    members: {
      name: string;
      role: string;
      bio: string;
      linkedin: string;
      photo: string;
    }[];
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

export type OrganizationSchema = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  email: string;
  foundingLocation: string;
  sameAs: string[];
};

export type SiteContentPayload = {
  contentDate: string;
  organizationSchema: OrganizationSchema;
  locales: Record<Language, LocalizedContent>;
};

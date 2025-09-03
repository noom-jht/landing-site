export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Relationships Driven by Trust",
      subtitle: "",
      description: [
        "We believe in establishing trust.",
        "Trust let's us build relationships across multiple sectors.",
        "With trusted experts across sectors, we can provide you with the best solutions.",
        "Let us become your trusted partner.",
      ],
      exploreServices: "Explore Services",
      getStarted: "Get Started",
    },
    services: {
      title: "Our Services",
      subtitle: "Trustworthy solutions tailored to your needs",
      trading: {
        title: "Trading Solutions",
        description:
          "Our broad range of trusted connections allows us to provide you with worthy items.",
        features: [
          "Wide variety of PET films",
          "Customized PCB boards",
          "Portfolio Management",
          "Risk Management",
          "Algorithmic Trading",
        ],
      },
      consulting: {
        title: "Consulting Services",
        description:
          "Strategic business consulting to help you navigate challenges, optimize operations, and achieve sustainable growth.",
        features: [
          "Business Strategy",
          "Process Optimization",
          "Digital Transformation",
          "Performance Analytics",
        ],
      },
    },
    about: {
      title: "Why Choose Noom?",
      description:
        "With years of experience in both trading and business consulting, we provide comprehensive solutions that drive real results. Our approach combines deep market knowledge with strategic business insights.",
      stats: {
        experience: "Years Experience",
        projects: "Projects Completed",
        satisfaction: "Client Satisfaction",
        support: "Support Available",
      },
      mission: {
        title: "Our Mission",
        description:
          "To empower businesses with innovative trading strategies and strategic consulting solutions that drive sustainable growth and long-term success.",
        points: [
          "Data-driven decision making",
          "Customized solutions",
          "Continuous innovation",
        ],
      },
    },
    contact: {
      title: "Ready to Get Started?",
      description:
        "Let's discuss how we can help you achieve your business goals with our trading and consulting services.",
      contactUs: "Contact Us",
      callNow: "Call Now",
    },
    footer: {
      description:
        "Professional trading and consulting solutions for modern businesses.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      serviceLinks: [
        "Trading Solutions",
        "Business Consulting",
        "Market Analysis",
        "Strategy Development",
      ],
      companyLinks: ["About Us", "Our Team", "Careers", "News"],
      contactInfo: [
        "contact@noom.com",
        "+1 (234) 567-890",
        "123 Business St",
        "City, State 12345",
      ],
      copyright: "© 2024 Noom. All rights reserved.",
    },
  },
  "zh-TW": {
    nav: {
      services: "服務",
      about: "關於我們",
      contact: "聯絡我們",
    },
    hero: {
      title: "建立值得信任的長久關係",
      subtitle: "解決方案",
      description: [
        "• 專業的交易策略和戰略諮詢服務，推動您的業務發展",
        "• 我們結合金融專業知識和創新解決方案，實現可持續增長",
        "• 通過多年的經驗和實證結果，我們建立了提供卓越價值的聲譽",
        "• 我們維護最高誠信標準，贏得客戶長期信任",
      ],
      exploreServices: "探索服務",
      getStarted: "立即開始",
    },
    services: {
      title: "我們的服務",
      subtitle: "為您的業務需求量身定制的全面解決方案",
      trading: {
        title: "交易解決方案",
        description: "先進的交易策略和市場分析，優化您的投資組合並最大化回報。",
        features: ["市場分析與研究", "投資組合管理", "風險管理", "演算法交易"],
      },
      consulting: {
        title: "諮詢服務",
        description: "戰略業務諮詢，幫助您應對挑戰、優化運營並實現可持續增長。",
        features: ["業務策略", "流程優化", "數位轉型", "績效分析"],
      },
    },
    about: {
      title: "為什麼選擇 Noom？",
      description:
        "憑藉在交易和業務諮詢方面的多年經驗，我們提供推動真實結果的全面解決方案。我們的方法結合了深厚的市場知識和戰略業務洞察。",
      stats: {
        experience: "年經驗",
        projects: "完成項目",
        satisfaction: "客戶滿意度",
        support: "全天候支援",
      },
      mission: {
        title: "我們的使命",
        description:
          "通過創新的交易策略和戰略諮詢解決方案，為企業提供支持，推動可持續增長和長期成功。",
        points: ["數據驅動的決策制定", "客製化解決方案", "持續創新"],
      },
    },
    contact: {
      title: "準備開始了嗎？",
      description: "讓我們討論如何通過我們的交易和諮詢服務幫助您實現業務目標。",
      contactUs: "聯絡我們",
      callNow: "立即致電",
    },
    footer: {
      description: "為現代企業提供專業的交易和諮詢解決方案。",
      services: "服務",
      company: "公司",
      contact: "聯絡",
      serviceLinks: ["交易解決方案", "業務諮詢", "市場分析", "策略發展"],
      companyLinks: ["關於我們", "我們的團隊", "職涯機會", "新聞"],
      contactInfo: [
        "contact@noom.com",
        "+1 (234) 567-890",
        "123 Business St",
        "City, State 12345",
      ],
      copyright: "© 2024 Noom. 版權所有。",
    },
  },
};

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

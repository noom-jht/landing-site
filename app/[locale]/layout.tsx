import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noom | Trading & Consulting Solutions",
  description: "Professional trading and consulting services. Expert solutions for your business growth and financial success.",
  keywords: "trading, consulting, business solutions, financial services, strategy",
  alternates: {
    languages: {
      'en': '/en',
      'zh-TW': '/zh-TW',
    },
  },
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Set the language attribute on the html element
  if (typeof document !== 'undefined') {
    document.documentElement.lang = params.locale;
  }
  
  return children;
} 
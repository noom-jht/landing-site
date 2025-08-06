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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  return children;
} 
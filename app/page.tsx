import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will redirect to the English version by default
  redirect('/en');
}

// This ensures the page is not cached
export const dynamic = 'force-dynamic'; 
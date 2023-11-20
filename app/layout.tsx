import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next14 Dashboard',
  description: 'A simple dashboard built with Next.js 14.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

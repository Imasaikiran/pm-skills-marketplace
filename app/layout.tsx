import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PM Skills Marketplace | World-Class Product Management Skills',
  description: 'The ultimate marketplace for Product Manager skills. 60+ curated, battle-tested skills built on first principles. Compatible with Claude Code.',
  keywords: ['product management', 'PM skills', 'Claude Code', 'RICE framework', 'roadmap', 'metrics', 'analytics'],
  authors: [{ name: 'PM Skills Marketplace' }],
  openGraph: {
    title: 'PM Skills Marketplace',
    description: '60+ world-class PM skills for Claude Code',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

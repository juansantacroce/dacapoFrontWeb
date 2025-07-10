import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Dacapo',
  description: 'Escuela de Música',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn('font-sans', poppins.variable)}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';
import DynamicBackground from '@/components/DynamicBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NovaTrade — Supply Chain Escrow & Financing',
  description: 'Trustless trade and supply chain tracking on Stellar Soroban',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col bg-transparent text-slate-900 relative`}>
        <DynamicBackground />
        <Navbar />
        <main className="flex-1 pt-16 z-10 relative">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
            },
          }}
        />
      </body>
    </html>
  );
}

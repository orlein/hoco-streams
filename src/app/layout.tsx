import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { Providers } from './providers';
import BottomNavigation from '@/components/bottom-navigation';

export const metadata: Metadata = {
  title: 'Streams!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen max-w-screen-sm mx-auto">
        <Providers>
          <header className="bg-indigo-600 text-white p-4">
            <h1 className="text-2xl font-bold">Streams</h1>
          </header>
          <main className="flex-1 overflow-y-auto pb-16">{children}</main>
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  );
}

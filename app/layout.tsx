import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import GlobalContextProvider from '@/context/global/global-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DzhunovScore',
  description: 'Platform for football results and discussions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GlobalContextProvider>
          <Toaster position='top-right' />

          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}

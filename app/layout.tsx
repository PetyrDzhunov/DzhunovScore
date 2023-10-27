import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import legendsImage from '../assets/hero-background.png';
import { Toaster } from 'react-hot-toast';
import GlobalContext from '@/context/global/global-context';
import { INITIAL_CONTEXT_DATA } from '@/constants/globals';
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
          <Image
            style={{ zIndex: -1 }}
            alt='legends-image'
            src={legendsImage}
            fill
          ></Image>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}

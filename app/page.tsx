import Image from 'next/image';
import legendsImage from '../assets/hero-background.png';
import Button from '@/components/Button/Button';
import { ButtonVariantWithStyles } from '@/components/Button/types';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        style={{ zIndex: -1 }}
        alt='legends-image'
        src={legendsImage}
        fill
      ></Image>
      <section className='flex'>
        <Button text='Register' variant={ButtonVariantWithStyles.Primary} />
        <Button text='Login' variant={ButtonVariantWithStyles.Secondary} />
      </section>
    </main>
  );
}

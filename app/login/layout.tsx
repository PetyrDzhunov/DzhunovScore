import LoginRegisterButtons from '@/components/LoginRegisterButtons/LoginRegisterButtons';
import Hero from '@/components/Hero/Hero';
import Image from 'next/image';
import legendsImage from '../../assets/hero.jpg';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Hero />
      <div className="flex">
        <Image
          className="h-full w-full object-cover"
          alt="legends-image"
          src={legendsImage}
        ></Image>
        <LoginRegisterButtons absolute />
      </div>
      {children}
    </div>
  );
}

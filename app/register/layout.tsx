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
    <div className="flex flex-col">
      <Hero />
      <div className="flex flex-col">
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

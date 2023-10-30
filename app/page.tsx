import Hero from '@/components/Hero/Hero';
import LoginRegisterButtons from '@/components/LoginRegisterButtons/LoginRegisterButtons';
import Image from 'next/image';
import legendsImage from '../assets/hero-background.png';

const App = () => {
  return (
    <main className=''>
      <div className='flex flex-col'>
        <Hero />
        <div className='flex flex-col'>
          <Image
            style={{ position: 'relative', zIndex: -1 }}
            alt='legends-image'
            src={legendsImage}
          ></Image>
          <LoginRegisterButtons absolute />
        </div>
      </div>
    </main>
  );
};

export default App;

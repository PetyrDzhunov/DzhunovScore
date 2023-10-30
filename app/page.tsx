import Hero from '@/components/Hero/Hero';
import LoginRegisterButtons from '@/components/LoginRegisterButtons/LoginRegisterButtons';
import Image from 'next/image';
import legendsImage from '../assets/hero.jpg';

const App = () => {
  return (
    <main className=''>
      <div className='flex flex-col'>
        <Hero />
        <div className='flex flex-col'>
          <Image alt='legends-image' src={legendsImage}></Image>
          <LoginRegisterButtons absolute />
        </div>
      </div>
    </main>
  );
};

export default App;

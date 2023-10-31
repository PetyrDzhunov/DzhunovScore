import Hero from '@/components/Hero/Hero';
import LoginRegisterButtons from '@/components/LoginRegisterButtons/LoginRegisterButtons';
import Image from 'next/image';
import legendsImage from '../assets/hero.jpg';
import RegisterPage from './register/page';

const App = () => {
  return (
    <main className="">
      <div className="flex flex-col">
        <Hero />
        <div className="flex flex-col w-full h-full bg-repeat">
          <Image
            className="h-full w-full object-cover"
            alt="legends-image"
            src={legendsImage}
          />
          <LoginRegisterButtons absolute />
          <RegisterPage />
        </div>
      </div>
    </main>
  );
};

export default App;

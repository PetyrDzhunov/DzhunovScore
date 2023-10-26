'use client';
import LoginRegisterButtons from '@/components/LoginRegisterButtons/LoginRegisterButtons';
import { useGlobalContext } from '@/context/global/global-context';

export default function Home() {
  const globalContext = useGlobalContext();
  console.log(globalContext);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <LoginRegisterButtons />
    </main>
  );
}

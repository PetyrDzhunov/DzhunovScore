import LoginRegisterButtons from '@/components/LoginRegisterButtons/LoginRegisterButtons';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      <LoginRegisterButtons />
      {children}
    </div>
  );
}

import Navigation from '@/components/Navigation/Navigation';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className='w-full'>
        <Navigation />
        {children}
      </main>
    </div>
  );
}

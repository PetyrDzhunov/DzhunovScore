import MainHomePage from '@/components/MainHomePage/MainHomePage';
import Navigation from '@/components/Navigation/Navigation';
import { getCountries } from '@/utils/football-api-utils';

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

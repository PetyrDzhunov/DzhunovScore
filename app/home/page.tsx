import Navigation from '@/components/Navigation/Navigation';
import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { getCountries } from '@/utils/football-api-utils';

const HomePage = async () => {
  const countries = await getCountries();

  return (
    <main className='w-full'>
      <Navigation />
      <MainHomePage countries={countries} />
    </main>
  );
};

export default HomePage;

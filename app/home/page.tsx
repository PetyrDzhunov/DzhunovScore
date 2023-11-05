import Navigation from '@/components/Navigation/Navigation';
import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { getCountries } from '@/utils/football-api-utils';

const HomePage = async () => {
  const countries = await getCountries();

  return (
    <main>
      <MainHomePage countries={countries} />
      <Navigation />
    </main>
  );
};

export default HomePage;

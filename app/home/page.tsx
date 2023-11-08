import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { getCountries } from '@/utils/football-api-utils';

const HomePage = async () => {
  const countries = await getCountries();

  return <MainHomePage countries={countries} />;
};

export default HomePage;

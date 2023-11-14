import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { getCountries } from '@/utils/football-api-utils';

const HomePage = async () => {
  const countries = await getCountries();

  return (
    <div className='flex bg-gray-500'>
      <MainHomePage countries={countries} />
    </div>
  );
};

export default HomePage;

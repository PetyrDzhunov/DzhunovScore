import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { getCountries } from '@/utils/football-api-utils';

const HomePage = async () => {
  const countries = await getCountries();

  return (
    <div className='flex'>
      <MainHomePage countries={countries} />
      <div>Hello from Home Page</div>;
    </div>
  );
};

export default HomePage;

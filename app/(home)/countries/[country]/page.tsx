'use client';
import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { useGlobalContext } from '@/context/global/global-context';
import { useParams } from 'next/navigation';

const CountryPage: React.FC = () => {
  const { country: countryName } = useParams();
  const { state } = useGlobalContext();
  //fetch country scores
  return (
    <div className='flex'>
      <MainHomePage countries={state.countries} />
      Entered Country Page for {countryName}
    </div>
  );
};

export default CountryPage;

import { useGlobalContext } from '@/context/global/global-context';
import { Country } from '@/types/api/api-types';
import SingleCountry from '../SingleCountry/SingleCountry';

type SideDrawerProps = {
  countries: Country[];
};

const SideDrawer: React.FC<SideDrawerProps> = ({ countries }) => {
  const { state } = useGlobalContext();

  // Filter out countries without an image (flag)
  const countriesWithImages = countries.filter((country) => country.flag);

  return (
    <div className='w-60 bg-white p-2'>
      <ul className=' overflow-x-auto'>
        {countriesWithImages.map((country: Country, index) => (
          <SingleCountry key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;

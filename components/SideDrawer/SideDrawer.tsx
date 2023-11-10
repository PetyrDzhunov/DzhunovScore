import { Country } from '@/types/api/api-types';
import SingleCountry from '../SingleCountry/SingleCountry';

type SideDrawerProps = {
  countries: Country[];
};

const SideDrawer: React.FC<SideDrawerProps> = ({ countries }) => {
  const countriesWithImages = countries.filter((country) => country.flag);

  return (
    <div className='w-60 bg-secondary bg-opacity-20 p'>
      <div className='h-[calc(100vh-4em)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-primaryLight scrollbar-track-secondaryLight fixed'>
        <ul className=''>
          {countriesWithImages.map((country: Country, index) => (
            <SingleCountry
              key={index}
              country={country}
              isLast={index === countriesWithImages.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;

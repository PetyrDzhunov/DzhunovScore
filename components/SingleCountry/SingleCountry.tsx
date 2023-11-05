import React from 'react';
import Image from 'next/image';
import { Country } from '@/types/api/api-types';

type SingleCountryProps = {
  country: Country;
};

const SingleCountry: React.FC<SingleCountryProps> = ({ country }) => {
  return (
    <div className='mb-4 flex flex-row cursor-pointer hover:bg-gray-200 hover:shadow-md p-1 w-full'>
      <Image
        src={country?.flag}
        alt={country.name}
        width={24}
        height={16}
        className='mr-2'
      />
      {country.name}
    </div>
  );
};

export default SingleCountry;

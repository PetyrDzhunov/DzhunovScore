'use client';
import React from 'react';
import Image from 'next/image';
import { Country } from '@/types/api/api-types';
import useNavigate from '@/app/hooks/useNavigate';
import { RouteUrls } from '@/constants/constants';

type SingleCountryProps = {
  country: Country;
  isLast: boolean;
};

const SingleCountry: React.FC<SingleCountryProps> = ({ country, isLast }) => {
  const marginClass = isLast ? '' : 'mb-4';
  const navigate = useNavigate();
  const onCountryClickHandler = () => {
    navigate(`${RouteUrls.COUNTRIES}/${country.name}`);
  };

  return (
    <div
      className={`flex flex-row cursor-pointer hover:bg-secondary hover:shadow-md p-1 w-full ${marginClass}`}
      onClick={onCountryClickHandler}
    >
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

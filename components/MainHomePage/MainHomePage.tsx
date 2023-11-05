'use client';
import { useGlobalContext } from '@/context/global/global-context';
import { setCounriesAction } from '@/context/global/user-action';
import { Country } from '@/types/api/api-types';
import { useEffect } from 'react';

type MainHomePageProps = {
  countries: Country[];
};

const MainHomePage: React.FC<MainHomePageProps> = ({ countries }) => {
  const { dispatch, state } = useGlobalContext();
  console.log(state);
  useEffect(() => {
    dispatch(setCounriesAction(countries));
  }, []);

  return <div>Main Home Page</div>;
};

export default MainHomePage;

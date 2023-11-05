'use client';
import { useGlobalContext } from '@/context/global/global-context';
import { setCounriesAction } from '@/context/global/user-action';
import { Country } from '@/types/api/api-types';
import { useEffect } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';

type MainHomePageProps = {
  countries: Country[];
};

const MainHomePage: React.FC<MainHomePageProps> = ({ countries }) => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch(setCounriesAction(countries));
  }, []);

  return (
    <div className='bg-opacity-50 bg-black min-h-screen'>
      <SideDrawer countries={countries} />
    </div>
  );
};

export default MainHomePage;

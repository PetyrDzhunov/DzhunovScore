'use client';
import Button from '@/components/Button/Button';
import { ButtonVariantWithStyles } from '@/components/Button/types';
import { useGlobalContext } from '@/context/global/global-context';
import { clearUserAction } from '@/context/global/user-action';
import useNavigate from '../hooks/useNavigate';
import { RouteUrls } from '@/constants/constants';
import toast from 'react-hot-toast';
import useFetch from '../hooks/useFetch';
import {
  FootballApiEndpoints,
  customRapidApiHeaders,
} from '@/utils/football-api-utils';
import { useEffect, useState } from 'react';
import { Country } from '@/types/api/api-types';

const HomePage = () => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const { sendRequest } = useFetch();

  const onLogoutHandler = () => {
    dispatch(clearUserAction());
    navigate(RouteUrls.BASE);
    toast.success('Logout successfull. We hope to see you again soon!');
  };

  const [countries, setCountries] = useState<Country[]>([]);
  console.log(customRapidApiHeaders);

  useEffect(() => {
    const getCountries = async () => {
      const res = await sendRequest(
        FootballApiEndpoints.Countries,
        'GET',
        null,
        customRapidApiHeaders,
      );
      setCountries(res.response as Country[]);
    };
    getCountries();
  }, []);

  //IN order to use async function here to fetch countries and whatever needed using next js features
  // i have to put navigation , logout button, and everything that requires use client in other components so i can pass the information down or save it in global context

  console.log(countries);

  return (
    <div>
      Home Page
      <Button
        text='Logout'
        variant={ButtonVariantWithStyles.Secondary}
        onClick={onLogoutHandler}
      />
    </div>
  );
};

export default HomePage;

'use client';
import Button from '@/components/Button/Button';
import { ButtonVariantWithStyles } from '@/components/Button/types';
import { useGlobalContext } from '@/context/global/global-context';
import { clearUserAction } from '@/context/global/user-action';
import useNavigate from '../hooks/useNavigate';
import { RouteUrls } from '@/constants/constants';
import toast from 'react-hot-toast';

const HomePage = () => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    dispatch(clearUserAction());
    navigate(RouteUrls.BASE);
    toast.success('Logout successful. We hope to see you again soon!');
  };

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

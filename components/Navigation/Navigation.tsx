'use client';
import { useGlobalContext } from '@/context/global/global-context';
import Button from '../Button/Button';
import { ButtonVariantWithStyles } from '../Button/types';
import useNavigate from '@/app/hooks/useNavigate';
import { clearUserAction } from '@/context/global/user-action';
import { RouteUrls } from '@/constants/constants';
import toast from 'react-hot-toast';

const Navigation = () => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    dispatch(clearUserAction());
    navigate(RouteUrls.BASE);
    toast.success('Logout successfull. We hope to see you again soon!');
  };

  return (
    <div>
      <Button
        text='Logout'
        variant={ButtonVariantWithStyles.Secondary}
        onClick={onLogoutHandler}
      />
    </div>
  );
};

export default Navigation;

'use client';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { ButtonVariantWithStyles } from '../Button/types';
import { RouteUrls } from '@/constants/constants';

type LoginRegisterButtonsProps = {
  absolute?: boolean;
};

const LoginRegisterButtons: React.FC<LoginRegisterButtonsProps> = ({
  absolute,
}) => {
  const router = useRouter();

  const onRegisterHandler = (): void => {
    router.push(RouteUrls.REGISTER);
  };

  const onLoginHandler = (): void => {
    router.push(RouteUrls.LOGIN);
  };

  const classes = `${absolute ? 'absolute right-2/6' : ''} flex m-5 mt-52`;

  return (
    <section className={classes}>
      <Button
        text='Register'
        buttonSize='medium'
        variant={ButtonVariantWithStyles.LinearGradientPrimary}
        onClick={onRegisterHandler}
      />
      <Button
        text='Login'
        buttonSize='medium'
        variant={ButtonVariantWithStyles.LinearGradientSecondary}
        onClick={onLoginHandler}
      />
    </section>
  );
};

export default LoginRegisterButtons;

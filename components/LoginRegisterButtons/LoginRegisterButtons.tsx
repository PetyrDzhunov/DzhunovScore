'use client';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { ButtonVariantWithStyles } from '../Button/types';

const LoginRegisterButtons: React.FC = () => {
  const router = useRouter();

  const onRegisterHandler = (): void => {
    router.push('/register');
  };

  const onLoginHandler = (): void => {
    router.push('/login');
  };

  return (
    <section className="flex m-5">
      <Button
        text="Register"
        buttonSize="medium"
        variant={ButtonVariantWithStyles.Primary}
        onClick={onRegisterHandler}
      />
      <Button
        text="Login"
        buttonSize="medium"
        variant={ButtonVariantWithStyles.Secondary}
        onClick={onLoginHandler}
      />
    </section>
  );
};

export default LoginRegisterButtons;

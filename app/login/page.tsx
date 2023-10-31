'use client';
import Button from '@/components/Button/Button';
import { ButtonVariantWithStyles } from '@/components/Button/types';
import { UserLoginSchema, UserSchema } from '@/types/user/user-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserType } from '@/types/user/user-validation';
import { ApiUrls, RouteUrls } from '@/constants/constants';
import {
  AuthActions,
  AuthenticationApiPostResponse,
} from '@/types/generic-types';
import useFetch from '../hooks/useFetch';
import toast from 'react-hot-toast';
import useNavigate from '../hooks/useNavigate';
import { setUserAction } from '@/context/global/user-action';
import { useGlobalContext } from '@/context/global/global-context';
type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();

  const { sendRequest } = useFetch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<UserType, 'username'>>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmitHandler: SubmitHandler<Omit<UserType, 'username'>> = async (
    data: Omit<UserType, 'username'>
  ) => {
    const response: AuthenticationApiPostResponse = await sendRequest(
      ApiUrls.AUTHENTICATE,
      'POST',
      JSON.stringify({ ...data, action: AuthActions.Login }),
      {
        'Content-Type': 'application/json',
      }
    );

    reset();
    if (response.status >= 200 && response.status < 300) {
      toast.success(response.message, {
        position: 'top-right',
      });
      dispatch(setUserAction(response.data));
      navigate(RouteUrls.HOME);
    } else {
      toast.error(response.message, {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-md absolute -bottom-4/6 right-2/6 xl:-bottom-5/6">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-white p-8 rounded shadow-md max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            {...register('email')}
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors?.email?.message && (
            <p className="text-red-500 text-sm mt-1 font-semibold">
              {errors?.email?.message as string}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            {...register('password')}
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors?.password?.message && (
            <p className="text-red-500 text-sm mt-1 font-semibold">
              {errors?.password?.message as string}
            </p>
          )}
        </div>

        <div className="mb-6">
          <Button
            type="submit"
            variant={ButtonVariantWithStyles.Primary}
            text="Login"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

'use client';
import Button from '@/components/Button/Button';
import { z } from 'zod';
import { ButtonVariantWithStyles } from '@/components/Button/types';
import { UserSchema } from '@/types/user/user-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserType } from '@/types/user/user-validation';
import useFetch from '../hooks/useFetch';
import { ApiUrls, RouteUrls } from '@/constants/constants';
import {
  AuthActions,
  AuthenticationApiPostResponse,
} from '@/types/generic-types';
import toast from 'react-hot-toast';
import { useGlobalContext } from '@/context/global/global-context';
import { setUserAction } from '@/context/global/user-action';
import { useRouter } from 'next/navigation';
import useNavigate from '../hooks/useNavigate';
type RegisterPageProps = {};

const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const { sendRequest } = useFetch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmitHandler: SubmitHandler<UserType> = async (data: UserType) => {
    const response: AuthenticationApiPostResponse = await sendRequest(
      ApiUrls.AUTHENTICATE,
      'POST',
      JSON.stringify({ ...data, action: AuthActions.Register }),
      {
        'Content-Type': 'application/json',
      }
    );

    reset();
    if (!response) {
      toast.error('Something went wrong', {
        position: 'top-right',
      });
    }
    if (response.status >= 200 && response.status < 300) {
      toast.success('Successfully created user', {
        position: 'top-right',
      });
    } else {
      toast.error(response.message, {
        position: 'top-right',
      });
    }

    dispatch(setUserAction(response.data));
    navigate(RouteUrls.HOME);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-md absolute 2xl:-bottom-4/6 lg:-bottom-full right-2/6">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-white p-8 rounded shadow-md max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            {...register('username')}
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors?.username?.message && (
            <p className="text-red-500 text-sm mt-1 font-semibold">
              {errors?.username?.message as string}
            </p>
          )}
        </div>

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
            variant={ButtonVariantWithStyles.Primary}
            text="Register"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

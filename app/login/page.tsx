'use client';
import Button from '@/components/Button/Button';
import { z } from 'zod';
import { ButtonVariantWithStyles } from '@/components/Button/types';
import { UserSchema } from '@/types/user/user-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserType } from '@/types/user/user-validation';
import axios from 'axios';
type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmitHandler: SubmitHandler<UserType> = async (data: UserType) => {
    // const response = await axios.post('http://localhost:3000/api/users', data, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    console.log(data);
    // maybe save the user to some global local state
    // on creating reroute to future home page
  };

  return (
    <div className='flex items-center justify-center bg-gray-100 rounded-md'>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='bg-white p-8 rounded shadow-md max-w-md'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email:
          </label>
          <input
            {...register('email')}
            className='text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
          />
          {errors?.email?.message && (
            <p className='text-red-500 text-sm mt-1 font-semibold'>
              {errors?.email?.message as string}
            </p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password:
          </label>
          <input
            type='password'
            {...register('password')}
            className='text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
          />
          {errors?.password?.message && (
            <p className='text-red-500 text-sm mt-1 font-semibold'>
              {errors?.password?.message as string}
            </p>
          )}
        </div>

        <div className='mb-6'>
          <Button
            variant={ButtonVariantWithStyles.Primary}
            text='Login'
            className='w-full'
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

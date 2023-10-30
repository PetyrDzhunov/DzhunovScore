'use client';
import useNavigate from '@/app/hooks/useNavigate';
import { RouteUrls } from '@/constants/constants';
import React from 'react';

const Hero = () => {
  const navigate = useNavigate();

  const onStartHandler = () => {
    navigate(RouteUrls.REGISTER);
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-700 text-white text-center'>
      <h1 className='text-6xl font-extrabold mb-4'>Football & Social Hub</h1>
      <p className='text-2xl mb-8'>
        Stay Updated with Live Football Scores and Engage with Fans!
      </p>
      <button
        onClick={onStartHandler}
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg'
      >
        Start Now
      </button>
    </div>
  );
};

export default Hero;

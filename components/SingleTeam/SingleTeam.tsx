'use client';
import React from 'react';
import { StandingsItem } from '@/types/api/api-types';
import Image from 'next/image';
import useNavigate from '@/app/hooks/useNavigate';
import { RouteUrls } from '@/constants/constants';

type SingleTeamProps = {
  standing: StandingsItem;
};

const SingleTeam: React.FC<SingleTeamProps> = ({ standing }) => {
  const navigate = useNavigate();

  const handleTeamClick = () => {
    navigate(`${RouteUrls.TEAMS}/${standing.team.name}`);
  };

  return (
    <tr key={standing.rank} className='border-t border-gray-300'>
      <td className='p-2 text-center'>{standing.rank}</td>
      <td className='p-2 text-center'>
        {standing.team.logo && (
          <Image
            src={standing.team.logo}
            alt='team-logo'
            width={20}
            height={20}
          />
        )}
      </td>
      <td onClick={handleTeamClick} className='p-2 text-center cursor-pointer'>
        {standing.team.name}
      </td>
      <td className='p-2 text-center'>{standing.points}</td>
      <td className='p-2 text-center'>{standing.all.played}</td>
      <td className='p-2 text-center'>{standing.all.win}</td>
      <td className='p-2 text-center'>{standing.all.draw}</td>
      <td className='p-2 text-center'>{standing.all.lose}</td>
      <td className='p-2 text-center'>
        {standing.all.goals.for}:{standing.all.goals.against}
      </td>
      <td
        className={`p-2 text-center ${
          standing.goalsDiff > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {standing.goalsDiff}
      </td>
      <td className='p-2 text-center'>
        <div className='flex'>
          {standing?.form?.split('').map((letter, index) => (
            <div
              key={index}
              className={`${
                letter === 'W'
                  ? 'bg-green-500'
                  : letter === 'D'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              } text-center rounded-full w-6 h-6 text-sm flex items-center justify-center mx-1`}
            >
              {letter}
            </div>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default SingleTeam;

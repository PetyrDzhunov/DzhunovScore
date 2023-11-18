// TeamInfo.tsx
import { TeamInformation } from '@/types/api/api-types';
import React from 'react';
import Image from 'next/image';

type TeamInfoProps = {
  team: TeamInformation;
};

const TeamInfo: React.FC<TeamInfoProps> = ({ team }) => {
  return (
    <div className='p-4 flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold mb-4'>{team.name}</h2>
      <Image
        src={team.logo}
        alt={`${team.name} logo`}
        width={50}
        height={50}
        className='mb-2 '
      />
      <p>
        Country: <span className='font-bold'>{team.country}</span>
      </p>
      <p>
        Founded: <span className='font-bold'>{team.founded}</span>
      </p>
      <p>
        National:{' '}
        <span className='font-bold'>{team.national ? 'Yes' : 'No'}</span>
      </p>
    </div>
  );
};

export default TeamInfo;

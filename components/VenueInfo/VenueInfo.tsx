// VenueInfo.tsx
import { TeamVenue } from '@/types/api/api-types';
import React from 'react';
import Image from 'next/image';

type VenueInfoProps = {
  venue: TeamVenue;
};

const VenueInfo: React.FC<VenueInfoProps> = ({ venue }) => {
  return (
    <div className='p-4 flex items-center flex-col'>
      <h2 className='text-2xl font-bold mb-4'>{venue.name}</h2>
      <Image
        src={venue.image}
        alt={`${venue.name} image`}
        width={300}
        height={300}
        className='mb-2 rounded-md'
      />
      <p>
        City: <span className='font-bold'>{venue.city}</span>
      </p>
      <p>
        Capacity: <span className='font-bold'>{venue.capacity}</span>
      </p>
      <p>
        Surface: <span className='font-bold'>{venue.surface}</span>
      </p>
      {venue.address && (
        <p>
          Address: <span className='font-bold'>{venue.address}</span>
        </p>
      )}
    </div>
  );
};

export default VenueInfo;

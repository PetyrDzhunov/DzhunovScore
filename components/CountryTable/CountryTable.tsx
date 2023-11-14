'use client';
import React from 'react';
import { LeagueById, StandingsItem, Team } from '@/types/api/api-types';
import Image from 'next/image';
import SingleTeam from '../SingleTeam/SingleTeam';

type CountryTableProps = {
  footballData: LeagueById[];
};

const CountryTable: React.FC<CountryTableProps> = ({ footballData }) => {
  return (
    <div className='overflow-x-auto mx-auto text-white mt-6'>
      {footballData.map((league, index) => (
        <div
          key={league.id}
          className={`mb-8 bg-black ${
            index === 0 ? 'mt-20' : '' // Add mt-20 margin to the first table
          }`}
        >
          <h2 className='text-xl font-bold mb-2 text-center pt-2'>
            {`${league.country} - ${league.name} (${league.season})`}
          </h2>
          <table className='min-w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='p-3 text-center text-white bg-black'>Rank</th>
                <th className='p-3 text-center text-white bg-black'>Logo</th>
                <th className='p-3 text-center text-white bg-black'>Team</th>
                <th className='p-3 text-center text-white bg-black'>Points</th>
                <th className='p-3 text-center text-white bg-black'>Played</th>
                <th className='p-3 text-center text-white bg-black'>Win</th>
                <th className='p-3 text-center text-white bg-black'>Draw</th>
                <th className='p-3 text-center text-white bg-black'>Lose</th>
                <th className='p-3 text-center text-white bg-black'>G</th>
                <th className='p-3 text-center text-white bg-black'>GD</th>
                <th className='p-3 text-center text-white bg-black'>Form</th>
              </tr>
            </thead>
            <tbody>
              {league.standings.length > 0 ? (
                league.standings.map((standingArray: StandingsItem[]) =>
                  standingArray.map((standing: StandingsItem) => (
                    <SingleTeam key={standing.rank} standing={standing} />
                  )),
                )
              ) : (
                <tr>
                  <td colSpan={11} className='text-center'>
                    No standings available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CountryTable;

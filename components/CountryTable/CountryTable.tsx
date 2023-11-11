'use client';
import React from 'react';
import { LeagueById, StandingsItem, Team } from '@/types/api/api-types';
import Image from 'next/image';

type CountryTableProps = {
  footballData: LeagueById[];
};

const CountryTable: React.FC<CountryTableProps> = ({ footballData }) => {
  return (
    <div className='overflow-x-auto mx-auto text-white mt-6'>
      {footballData.map((league) => (
        <div key={league.id} className='mb-8 bg-black'>
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
                    <tr
                      key={standing.rank}
                      className='border-t border-gray-300'
                    >
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
                      <td className='p-2 text-center'>{standing.team.name}</td>
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
                          standing.goalsDiff > 0
                            ? 'text-green-500'
                            : 'text-red-500'
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

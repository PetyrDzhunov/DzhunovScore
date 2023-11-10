'use client';
import React from 'react';
import {
  LeagueById,
  StandingsItem,
  StandingsStats,
  Team,
} from '@/types/api/api-types';
import Image from 'next/image';

type CountryTableProps = {
  footballData: LeagueById[];
};

const CountryTable: React.FC<CountryTableProps> = ({ footballData }) => {
  return (
    <div className='overflow-x-auto m-auto bg-black text-white'>
      {footballData.map((league) => (
        <div key={league.id} className='mb-8'>
          <h2 className='text-xl font-bold mb-2 text-center'>
            {`${league.country} - ${league.name} (${league.season})`}
          </h2>
          <table className='min-w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='p-3 text-center text-white bg-black'>Rank</th>
                <th className='p-3 text-center text-white bg-black'>Logo</th>
                <th className='p-3 text-center text-white bg-black'>
                  Team Name
                </th>
                <th className='p-3 text-center text-white bg-black'>Points</th>
                <th className='p-3 text-center text-white bg-black'>Form</th>
                <th className='p-3 text-center text-white bg-black'>Played</th>
                <th className='p-3 text-center text-white bg-black'>Win</th>
                <th className='p-3 text-center text-white bg-black'>Draw</th>
                <th className='p-3 text-center text-white bg-black'>Lose</th>
                <th className='p-3 text-center text-white bg-black'>
                  Goals For
                </th>
                <th className='p-3 text-center text-white bg-black'>
                  Goals Against
                </th>
                <th className='p-3 text-center text-white bg-black'>
                  Goals Difference
                </th>
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
                      <td className='p-3 text-center'>{standing.rank}</td>
                      <td className='p-3 text-center'>
                        {standing.team.logo && (
                          <Image
                            src={standing.team.logo}
                            alt='team-logo'
                            width={20}
                            height={20}
                          />
                        )}
                      </td>
                      <td className='p-3 text-center'>{standing.team.name}</td>
                      <td className='p-3 text-center'>{standing.points}</td>
                      <td className='p-3 text-center'>
                        {standing?.form?.split('').map((letter, index) => (
                          <span
                            key={index}
                            className={`${
                              letter === 'W'
                                ? 'text-green-500'
                                : letter === 'D'
                                ? 'text-yellow-600'
                                : 'text-red-500'
                            }`}
                          >
                            {letter}
                          </span>
                        ))}
                      </td>
                      <td className='p-3 text-center'>{standing.all.played}</td>
                      <td className='p-3 text-center'>{standing.all.win}</td>
                      <td className='p-3 text-center'>{standing.all.draw}</td>
                      <td className='p-3 text-center'>{standing.all.lose}</td>
                      <td className='p-3 text-center'>
                        {standing.all.goals.for}
                      </td>
                      <td className='p-3 text-center'>
                        {standing.all.goals.against}
                      </td>
                      <td
                        className={`p-3 text-center ${
                          standing.goalsDiff > 0
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {standing.goalsDiff}
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

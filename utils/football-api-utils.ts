import {
  Country,
  LeagueAPIResponse,
  LeagueById,
  SingleLeagueByIdAPIResponse,
  SingleTeamByIdAPIResponse,
} from '@/types/api/api-types';
import { sendRequest } from './api-utils';
import { LATEST_SEASON_YEAR } from '@/constants/constants';

export const customRapidApiHeaders: {
  'x-rapidapi-key'?: string;
  'x-rapidapi-host'?: string;
} = {
  'x-rapidapi-host': process.env.NEXT_PUBLIC_X_RapidAPI_Host,
  'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RapidAPI_Key,
};

export const BASE_FOOTBALL_API_URL =
  'https://api-football-v1.p.rapidapi.com/v3';

export enum FootballApiEndpoints {
  Countries = `${BASE_FOOTBALL_API_URL}/countries`,
  Leagues = `${BASE_FOOTBALL_API_URL}/leagues`,
  Standings = `${BASE_FOOTBALL_API_URL}/standings`,
  TeamById = `${BASE_FOOTBALL_API_URL}/teams`,
}

export const getCountries = async () => {
  const res = await sendRequest(
    FootballApiEndpoints.Countries,
    'GET',
    null,
    customRapidApiHeaders,
  );
  return res.response as Country[];
};

export const getLeague = async (countryName: string) => {
  const res = await sendRequest(
    `${FootballApiEndpoints.Leagues}?country=${countryName}`,
    'GET',
    null,
    customRapidApiHeaders,
  );
  return res.response as LeagueAPIResponse[];
};

export const getStandings = async (
  leagueIds: number[],
): Promise<LeagueById[]> => {
  // Create an array of promises for each league ID
  const standingsPromises = leagueIds.map(async (leagueId) => {
    const res = await sendRequest(
      `${FootballApiEndpoints.Standings}?season=${LATEST_SEASON_YEAR}&league=${leagueId}`,
      'GET',
      null,
      customRapidApiHeaders,
    );
    return res as SingleLeagueByIdAPIResponse;
  });
  // Use Promise.all to wait for all requests to complete
  const standingsResponses = await Promise.all(standingsPromises);
  const currentLeaguesForThisCountry = standingsResponses
    .flatMap((i) => i.response)
    .map((item) => item.league)
    .filter((league) => {
      return league.id !== null;
    });

  return currentLeaguesForThisCountry;
};

export const getTeamInformationByName = async (
  teamName: string,
): Promise<SingleTeamByIdAPIResponse> => {
  const res = await sendRequest(
    `${FootballApiEndpoints.TeamById}?name=${teamName}`,
    'GET',
    null,
    customRapidApiHeaders,
  );

  return res.response[0] as SingleTeamByIdAPIResponse;
};

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
}

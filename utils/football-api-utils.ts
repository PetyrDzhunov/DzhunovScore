export const customRapidApiHeaders: {
    'X-RapidAPI-Key'?: string;
    'X-RapidAPI-Host'?: string;
} = {
    'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    'X-RapidAPI-Host': process.env.X_RapidAPI_Host
}

export const BASE_FOOTBALL_API_URL = 'https://api-football-v1.p.rapidapi.com/v3';

export enum FootballApiEndpoints {
    Countries = `${BASE_FOOTBALL_API_URL}/countries`
}
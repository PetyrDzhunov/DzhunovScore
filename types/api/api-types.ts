export type Country = {
  name: string;
  code: string;
  flag: string;
};

export type SeasonCoverage = {
  fixtures: {
    // Define the structure of fixtures coverage if needed
  };
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  // Add more properties as needed
};

export type Season = {
  coverage: SeasonCoverage;
  current: boolean;
  end: string;
  start: string;
  year: number;
  // Add more properties as needed
};

export type League = {
  id: number;
  logo: string;
  name: string;
  type: string;
  // Add more properties as needed
};

export type LeagueAPIResponse = {
  country: Country;
  league: League;
  seasons: Season[];
};

export type SingleLeagueByIdAPIResponse = {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: any[]; // Replace with a specific type if possible
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: { league: LeagueById }[];
};

export type Team = {
  id: string;
  name: string;
  logo: string;
};

export type StandingsItem = {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: StandingsStats;
  home: StandingsStats;
  away: StandingsStats;
  update: string;
};

export type StandingsStats = {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
};

export type LeagueById = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: StandingsItem[][];
};

export type TeamVenue = {
  id: number;
  name: string;
  address: string | null;
  city: string;
  capacity: number;
  surface: string;
  image: string;
};

export type TeamInformation = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
};

export type SingleTeamByIdAPIResponse = {
  team: TeamInformation;
  venue: TeamVenue;
};

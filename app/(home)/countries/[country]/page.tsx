import CountryTable from '@/components/CountryTable/CountryTable';
import MainHomePage from '@/components/MainHomePage/MainHomePage';
import { useGlobalContext } from '@/context/global/global-context';
import {
  getCountries,
  getLeague,
  getStandings,
} from '@/utils/football-api-utils';
import { useParams } from 'next/navigation';

type CountryPageProps = {
  params: {
    country: string;
  };
};

const CountryPage: React.FC<CountryPageProps> = async ({
  params: { country },
}) => {
  const currentCountryLeagues = await getLeague(country as string);
  const leagueIds = currentCountryLeagues.map((item) => item.league.id);
  const currentSeasonStandingsForAllLeaguesForCurrentCountry =
    await getStandings(leagueIds);
  console.log(currentSeasonStandingsForAllLeaguesForCurrentCountry);
  const countries = await getCountries();
  return (
    <div className='flex bg-gray-500'>
      <MainHomePage countries={countries} />
      <CountryTable
        footballData={currentSeasonStandingsForAllLeaguesForCurrentCountry}
      />
    </div>
  );
};

export default CountryPage;

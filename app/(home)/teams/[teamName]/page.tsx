import MainHomePage from '@/components/MainHomePage/MainHomePage';
import TeamInfo from '@/components/TeamsInfo/TeamsInfo';
import VenueInfo from '@/components/VenueInfo/VenueInfo';
import {
  getCountries,
  getTeamInformationByName,
} from '@/utils/football-api-utils';

type TeamPageProps = {
  params: {
    teamName: string;
  };
};

const TeamPage: React.FC<TeamPageProps> = async ({ params: { teamName } }) => {
  const countries = await getCountries();
  const { team, venue } = await getTeamInformationByName(teamName);
  return (
    <div className='flex bg-gray-500 min-h-screen'>
      <MainHomePage countries={countries} />
      <div className='overflow-x-auto mx-auto text-white mt-16'>
        <TeamInfo team={team} />
        <VenueInfo venue={venue} />
      </div>
    </div>
  );
};

export default TeamPage;

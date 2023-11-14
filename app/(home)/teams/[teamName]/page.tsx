import MainHomePage from '@/components/MainHomePage/MainHomePage';
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
    <div className='flex bg-gray-500'>
      <MainHomePage countries={countries} />
    </div>
  );
};

export default TeamPage;

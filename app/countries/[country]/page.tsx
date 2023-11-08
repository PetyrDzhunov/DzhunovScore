'use client';
import { useParams } from 'next/navigation';

const CountryPage: React.FC = () => {
  const { country: countryName } = useParams();
  //fetch country scores
  return <div>Entered Country Page for {countryName}</div>;
};

export default CountryPage;

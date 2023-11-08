'use client';
import HomeLayout from '@/app/home/layout';

type CountryPageLayoutProps = {
  children: React.ReactNode;
};
const CountryPageLayout: React.FC<CountryPageLayoutProps> = ({ children }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default CountryPageLayout;

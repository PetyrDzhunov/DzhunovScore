import { RouteUrls } from '@/constants/constants';
import { useRouter } from 'next/navigation';

const useNavigate = () => {
  const router = useRouter();

  const navigate = (route: RouteUrls | string) => {
    router.push(route);
  };

  return navigate;
};

export default useNavigate;

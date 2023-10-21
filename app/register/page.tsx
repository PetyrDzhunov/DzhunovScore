type RegisterPageProps = {};
import { z } from 'zod';

const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  return (
    <form>
      <div>
        <input type='email' />
      </div>
    </form>
  );
};

export default RegisterPage;

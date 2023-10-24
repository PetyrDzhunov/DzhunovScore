import { UserType } from './user/user-validation';

export type ApiPostResponse = {
  message: string;
  status: number;
};

export enum AuthActions {
  Register = 'Register',
  Login = 'Login',
}

export type AuthenticationRequestData = UserType & {
  action: AuthActions; // Replace 'AuthActions' with the actual type for 'action'
};

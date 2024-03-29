import { UserType } from './user/user-validation';

export type ApiPostResponse = {
  message: string;
  status: number;
};

export type AuthenticationApiPostResponse = ApiPostResponse & {
  data: UserType;
};

export enum AuthActions {
  Register = 'Register',
  Login = 'Login',
}

export type AuthenticationRequestData = UserType & {
  action: AuthActions;
};

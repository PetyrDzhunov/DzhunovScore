import { UserType } from '@/types/user/user-validation';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

// Action creators
export const setUserAction = (user: UserType) =>
  ({
    type: SET_USER,
    payload: user,
  } as const);

export const clearUserAction = () =>
  ({
    type: CLEAR_USER,
  } as const);

'use client';
import React, { ReactNode, createContext, useContext, useReducer } from 'react';
import {
  setUserAction,
  clearUserAction,
  SET_USER,
  CLEAR_USER,
  SET_COUNTRIES,
  setCounriesAction,
} from './user-action';
import { UserType } from '@/types/user/user-validation';
import { INITIAL_CONTEXT_DATA } from '@/constants/globals';
import { Country } from '@/types/api/api-types';

// Define the context state type
type ContextState = {
  user: UserType | null;
  countries: Country[];
};

// Define the action types
type Action =
  | ReturnType<typeof setUserAction>
  | ReturnType<typeof clearUserAction>
  | ReturnType<typeof setCounriesAction>;

const GlobalContext = createContext<
  { state: ContextState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const reducer = (state: ContextState, action: Action): ContextState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_CONTEXT_DATA);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Use this within a provider.');
  }
  return context;
};

export default GlobalContextProvider;

import React, { ReactNode, createContext, useContext, useReducer } from 'react';
import {
  setUserAction,
  clearUserAction,
  SET_USER,
  CLEAR_USER,
} from './user-action';
import { UserType } from '@/types/user/user-validation';
import { INITIAL_CONTEXT_DATA } from '@/constants/globals';

export type GlobalContextType = {
  user: UserType | null;
  dispatch: React.Dispatch<Action>;
};

type Action = ReturnType<typeof setUserAction | typeof clearUserAction>;
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const reducer = (
  state: GlobalContextType,
  action: Action,
): GlobalContextType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
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

  const contextValue: GlobalContextType = {
    user: state.user,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
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

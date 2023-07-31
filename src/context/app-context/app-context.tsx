import React, {ReactNode, createContext, useContext} from 'react';

import {
  AppContext,
  useContextApp,
  initialContextValue,
} from './use-app-context';
import {useSessionStorage} from './use-session-storage';

const appContext = createContext<AppContext>(initialContextValue);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const {state, actions} = useContextApp();
  const {isLoading} = useSessionStorage({
    appState: state,
    callback: appState => {
      actions.setSession(appState);
    },
  });

  return (
    <appContext.Provider
      value={{
        ...state,
        ...actions,
      }}>
      {isLoading ? null : children}
    </appContext.Provider>
  );
};

export const useAppCtx = () => {
  const ctxValue = useContext(appContext);

  if (!ctxValue) {
    throw new Error('appContext must be use whitin the AppProvider');
  }

  return ctxValue;
};

import React, {ReactNode, createContext, useContext} from 'react';

import {
  AppContext,
  useContextApp,
  initialContextValue,
} from './use-app-context';

const appContext = createContext<AppContext>(initialContextValue);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const ctxValue = useContextApp();

  return <appContext.Provider value={ctxValue}>{children}</appContext.Provider>;
};

export const useAppCtx = () => {
  const ctxValue = useContext(appContext);

  if (!ctxValue) {
    throw new Error('appContext must be use whitin the AppProvider');
  }

  return ctxValue;
};

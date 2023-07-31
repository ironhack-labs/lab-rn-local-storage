import {useEffect, useState} from 'react';

import {getStorageData, setStorageData} from '../../utils';
import type {AppState} from './app-reducer';

type UseSessionStorageProps = {
  appState: AppState;
  callback: (appState: AppState) => void;
};

export const useSessionStorage = ({
  appState,
  callback,
}: UseSessionStorageProps) => {
  const [isLoading, setLoading] = useState(true);
  const KEY_STORAGE = 'app-state';

  useEffect(() => {
    getStorageData<AppState>(KEY_STORAGE).then(state => {
      if (state) {
        callback(state);
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStorageData<AppState>(KEY_STORAGE, appState);
  }, [appState]);

  return {
    isLoading,
  };
};

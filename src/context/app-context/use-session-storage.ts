import {useEffect, useState} from 'react';

import {getStorageData} from '../../utils';
import type {AppState} from './app-reducer';
import {KEY_STORAGE} from '../../constants';

type UseSessionStorageProps = {
  callback: (appState: AppState) => void;
};

export const useSessionStorage = ({callback}: UseSessionStorageProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStorageData<AppState>(KEY_STORAGE).then(state => {
      if (state) {
        callback(state);
      }
      setLoading(false);
    });
  }, [callback, setLoading]);

  return {
    isLoading,
  };
};

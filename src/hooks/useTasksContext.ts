import {useContext} from 'react';
import {TasksContext} from '../context/TaskContext';

const useTasksContext = () => {
  const ctxValue = useContext(TasksContext);

  if (!ctxValue) {
    throw new Error(
      'useTasksContext must be use within the TaskContextProvider',
    );
  }

  return ctxValue;
};

export default useTasksContext;

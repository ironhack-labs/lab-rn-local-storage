import { useContext } from 'react';
import { TaskListContext } from '../context';
import { Category } from '../types';

export default function useTaskList() {
  const cartContext = useContext(TaskListContext);

  function getTaskById(id: string) {
    const tasks = cartContext.taskList.filter(item => item.id === id);
    return tasks.length ? tasks[0] : null;
  }

  function filterTaskListByCategory(category: Category) {
    console.log('filterTaskListByCategory', cartContext.taskList);
    if (category === 'ALL') {
      return cartContext.taskList;
    }

    return cartContext.taskList.filter(item => item.category === category);
  }

  return {
    ...cartContext,
    getTaskById,
    filterTaskListByCategory,
  };
}

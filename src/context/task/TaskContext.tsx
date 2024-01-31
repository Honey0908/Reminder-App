import React, { createContext, Dispatch, useReducer } from 'react';
import localStorageService from '../../services/localStorage';
import taskReducer from './TaskReducer';

export interface TaskContextValue {
  state: TaskState;
  dispatch: Dispatch<TaskActionTypes>;
}

const initialState: TaskState = {
  tasks: localStorageService.getItem("tasks") as Task[] || [],
};

export const TaskContext = createContext<TaskContextValue>({
  state: initialState,
  dispatch: () => null
});


export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<TaskState, TaskActionTypes>>(
    taskReducer,
    initialState
  );

  const value: TaskContextValue = {
    state,
    dispatch,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};


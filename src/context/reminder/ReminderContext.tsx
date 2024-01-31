// ReminderContext.tsx
import React, { createContext, Dispatch, useReducer } from 'react';
import reminderReducer from './reminderReducer';
import localStorageService from '../../services/localStorage';

export interface ReminderContextValue {
  state: ReminderState;
  dispatch: Dispatch<ReminderActionTypes>;
}

const initialState: ReminderState = {
  reminders: localStorageService.getItem("reminders") as Reminder[] || [],
};

export const ReminderContext = createContext<ReminderContextValue>({
  state: initialState,
  dispatch: () => null
});


export const ReminderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<ReminderState, ReminderActionTypes>>(
    reminderReducer,
    initialState
  );

  const value: ReminderContextValue = {
    state,
    dispatch,
  };


  return <ReminderContext.Provider value={value}>{children}</ReminderContext.Provider>;
};


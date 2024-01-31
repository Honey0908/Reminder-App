import localStorageService from "../../services/localStorage";

const reminderReducer = (state: ReminderState, action: ReminderActionTypes): ReminderState => {
  switch (action.type) {

    case 'SET_USER_SUBSCRIPTION_ID':
      return { ...state, userId: action.payload };

    case 'ADD_REMINDER':
      const addedReminders = [...state.reminders, action.payload];
      localStorageService.setItem("reminders", addedReminders)
      return { ...state, reminders: [...state.reminders, action.payload] };

    case 'DELETE_REMINDER':
      const filteredReminders = state.reminders.filter((reminder) => reminder.id !== action.payload)
      localStorageService.setItem("reminders", filteredReminders)
      return { ...state, reminders: filteredReminders };

    default:
      return state;
  }
};

export default reminderReducer;

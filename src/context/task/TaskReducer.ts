import localStorageService from "../../services/localStorage";

const taskReducer = (state: TaskState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      const addedTasks = [...state.tasks, action.payload];
      localStorageService.setItem('tasks', addedTasks);
      return { ...state, tasks: addedTasks };

    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorageService.setItem('tasks', filteredTasks);
      return { ...state, tasks: filteredTasks };

    case 'TOGGLE_COMPLETED':
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorageService.setItem('tasks', updatedTasks);
      return { ...state, tasks: updatedTasks };

    default:
      return state;
  }
};

export default taskReducer;

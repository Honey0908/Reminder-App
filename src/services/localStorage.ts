

const localStorageService = {
 
  setItem: (key: StorageType, data: Task[] | Reminder[]) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  getItem: (key: StorageType): Task[] | Reminder[] | null => {
    try {
      const serializedData = localStorage.getItem(key);
      return serializedData ? JSON.parse(serializedData) : null;
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return null;
    }
  },

}

export default localStorageService;

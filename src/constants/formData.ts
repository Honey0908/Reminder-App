export const REMINDER_FORM: FormDetails = {
  title: 'Create Reminder',
  fields: [
    { name: 'title', type: 'text', placeholder: 'Reminder Title' },
    { name: 'time', type: 'datetime-local', placeholder: 'Time' },
    { name: 'description', type: 'textarea', rows: "3", placeholder: 'Description' },
  ],
}

export const TASK_FORM = {
  title: 'Create Task',
  fields: [
    { name: 'title', type: 'text', placeholder: 'Task Title' },
    { name: 'description', type: 'textarea', rows: "3", placeholder: 'Description' },
  ],
};
interface NavigationOptions {
    id: string;
    title: string;
    icon: JSX.Element;
    to: string
};

interface ModalProps {
    modalButtonName: string;
    heading?: string
    children: React.ReactNode;
    isOpen:boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// reminder and task

interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface Reminder extends Omit<Task, 'completed'> {
    time: string;
}

// context and state types

type ReminderActionTypes = { type: 'ADD_REMINDER'; payload: Reminder } | { type: 'DELETE_REMINDER'; payload: Reminder["id"] };
type TaskActionTypes = { type: 'ADD_TASK'; payload: Task } | { type: 'DELETE_TASK'; payload: Task["id"] }|{ type: 'TOGGLE_COMPLETED', payload: Task["id"]};

interface ReminderState {
    reminders: Reminder[];
}

interface TaskState {
    tasks: Task[];
}

type StorageType = "reminders" | "tasks"


// Form Types

interface FormField {
    name: string;
    type: string;
    placeholder: string;
    rows?: string;
}

interface FormDetails {
    title: string;
    fields: FormField[];
}

interface FormProps {
    formFieldData: FormDetails;
    handleChange: (e: React.ChangeEvent) => void;
    handleSubmit: (e: React.FormEvent) => void;
    formData:{ [key: string]: string | boolean }
}
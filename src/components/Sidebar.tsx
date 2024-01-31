import { Link } from 'react-router-dom';
import { REMINDER_NAVIGATIONS } from '../constants/NavigationOptions';
import ReminderForm from './reminders/ReminderForm';
import TaskForm from './tasks/TaskForm';
import { useContext } from 'react';
import { ReminderContext } from '../context/reminder/ReminderContext';
import { TaskContext } from '../context/task/TaskContext';

export default function Sidebar() {
    const { state: reminderState } = useContext(ReminderContext);
    const { state: taskState } = useContext(TaskContext);

    const reminders = reminderState.reminders;
    const tasks = taskState.tasks;

    return (
        <>
            <div className='flex flex-wrap'>
                {REMINDER_NAVIGATIONS.map((option: NavigationOptions) => {

                    const getCount = (title: NavigationOptions["title"]) => {
                        switch (title) {
                            case "Reminders":
                                return reminders.length;
                            case "Tasks":
                                return tasks.length;
                            case "All":
                                return reminders.length + tasks.length;
                            case "Today's":
                                return reminders.reduce((count, reminder) => {
                                    return count + (reminder.time.slice(0, 11) === new Date().toISOString().slice(0, 11) ? 1 : 0);
                                }, 0);
                            default:
                                return 0;
                        }
                    };

                    return (
                        <Link to={option?.to} key={option?.id} className="w-1/2 ">
                            <div className={`m-1 border-primary shadow-sm border px-3 py-4 flex justify-between  rounded-lg`}>
                                <div className="flex flex-col ">
                                    {option?.icon}
                                    <div className='text-danger text-xl font-bold'>{option?.title}</div>
                                </div>
                                <div className='text-danger font-bold text-4xl'>{getCount(option.title)}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <ReminderForm />
            <TaskForm />
        </>
    )
}
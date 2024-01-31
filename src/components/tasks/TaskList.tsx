import { useContext } from 'react';
import { TaskContext } from '../../context/task/TaskContext';
import Task from './Task'


const TaskList = () => {

    const renderTasks = (taskList: Task[]) => {
        return taskList.map((task) => (
            <Task id={task?.id} title={task?.title} description={task?.description} completed={task?.completed} key={task?.id} />
        ));
    };

    const { state } = useContext(TaskContext);
    const { tasks } = state

    return (
        <div className="flex flex-col items-center md:m-0 m-3">
            <div className="text-2xl font-medium text-primary">Tasks</div>
            {
                tasks?.length > 0 ? (
                    <>
                        {renderTasks(tasks.filter((task) => !task?.completed))}
                        {renderTasks(tasks.filter((task) => task?.completed))}
                    </>

                ) : <h4 className=" mt-2 text-green-800 md:text-xl text-center">No Tasks Yet </h4>
            }
        </div>
    )
}

export default TaskList
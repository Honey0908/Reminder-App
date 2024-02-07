import React, { useContext } from 'react'
import { TaskContext } from '../../context/task/TaskContext'
import { toast } from 'react-toastify'
import xss from 'xss';


const Task: React.FC<Task> = ({ ...data }) => {
    const { dispatch } = useContext(TaskContext)

    const handleDelete = (id: Task["id"]) => {
        dispatch({ type: "DELETE_TASK", payload: id })
        toast.success("Task deleted Successfully")
    }

    const handleCheck = (id: Task["id"]) => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
    }

    const sanitizedDescription = { __html: xss(data.description) };

    return (
        <div className="flex flex-col border-primary rounded-lg shadow-sm md:w-3/4 w-full max-h-fit border bg-white p-3 md:p-4 m-2">
            <div className="flex items-center mb-1.5">
                <input type="checkbox" className='mr-3 h-4 w-4 border border-primary rounded-sm bg-white focus:outline-none' onChange={() => handleCheck(data?.id)} checked={data?.completed} />
                <h5 className="text-primary text-xl  font-medium">{data.title}</h5>
            </div>

            <p className="text-gray-700 text-base mb-2" dangerouslySetInnerHTML={sanitizedDescription}></p>

            <button onClick={() => handleDelete(data?.id)} className='py-1 px-2 rounded-md bg-danger hover:bg-red-700 text-white w-fit'>Delete</button>

        </div>
    )
}

export default Task

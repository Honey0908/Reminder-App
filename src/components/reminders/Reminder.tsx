import React, { useContext } from 'react'
import { deleteReminder } from '../../services/reminder'
import { ReminderContext } from '../../context/reminder/ReminderContext'
import { toast } from 'react-toastify'

const Reminder: React.FC<Reminder> = ({ ...data }) => {

    const { dispatch } = useContext(ReminderContext)

    const handleDelete = async (id: Reminder["id"]) => {
        const response = await deleteReminder(id);
        if (response.success) {
            dispatch({ type: "DELETE_REMINDER", payload: id })
            toast.success("Reminder Deleted Successfully")
            return;
        }
        toast.error("Something Went Wrong");
    }
    return (
        <div className="flex flex-col border-primary rounded-lg shadow-sm md:w-3/4 w-full max-h-fit border bg-white p-3 md:p-4 m-2">
            <h5 className="text-primary text-xl  font-medium mb-1.5">{data.title}</h5>

            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>

                <h2 className="text-primary text-xl font-medium me-2"> {data.time.slice(0, 10)}</h2>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <h2 className="text-primary text-xl  font-medium"> {data.time.slice(11, 16)}</h2>
            </div>

            <p className="text-gray-700 text-base mb-2 mt-1">
                {data.description}
            </p>

            <button onClick={() => handleDelete(data?.id)} className='py-1 px-2 rounded-md bg-danger hover:bg-red-700 text-white w-fit'>Delete</button>
        </div>
    )
}

export default Reminder

import React, { useContext, useState } from 'react'
import Modal from '../Modal';
import Form from '../Form';
import { TASK_FORM } from '../../constants/formData';
import { TaskContext } from '../../context/task/TaskContext';
import { v4 as uuidV4 } from 'uuid';
import { toast } from 'react-toastify';

const TaskForm = () => {
    const { dispatch } = useContext(TaskContext)

    const [taskData, setTaskData] = useState({ title: '', description: '', completed: false });
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setTaskData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ "type": "ADD_TASK", "payload": { ...taskData, id: uuidV4() } })
        toast.success("Task Created Successfully");
        setTaskData({ title: '', description: '', completed: false });
        setIsOpen(false);
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalButtonName='Create Task' heading='Enter Details'>
            <Form formFieldData={TASK_FORM} handleChange={handleChange} handleSubmit={handleSubmit} formData={taskData} />
        </Modal>
    )
}

export default TaskForm

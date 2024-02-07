import React, { useContext, useState } from 'react'
import { createReminder } from '../../services/reminder';
import { ReminderContext } from '../../context/reminder/ReminderContext';
import Form from '../Form';
import Modal from '../Modal';
import { REMINDER_FORM } from '../../constants/formData';
import { toast } from 'react-toastify';

const ReminderForm = () => {

    const { dispatch, state } = useContext(ReminderContext)

    const [reminderData, setReminderData] = useState({ title: '', description: '', time: '' });
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setReminderData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (state.userId) {
            const response = await createReminder(reminderData, state.userId);
            if (response?.id) {
                dispatch({ "type": "ADD_REMINDER", "payload": { ...reminderData, id: response?.id } })
                toast.success("Reminder Created Successfully");
            } else {
                toast.error("Something Went Wrong" + response);
            }
        } else {
            toast.error("User Not Subscribed")
        }
        setReminderData({ title: '', description: '', time: '' });
        setIsOpen(false);
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalButtonName='Create Reminder' heading='Enter Details'>
            <Form formFieldData={REMINDER_FORM} handleChange={handleChange}
                handleSubmit={handleSubmit} formData={reminderData} />
        </Modal>
    )
}

export default ReminderForm

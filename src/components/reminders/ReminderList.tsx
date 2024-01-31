import { useContext } from "react";
import Reminder from "./Reminder";
import { ReminderContext } from "../../context/reminder/ReminderContext";

const ReminderList: React.FC<{ today?: boolean }> = ({ today }) => {
    const { state } = useContext(ReminderContext);
    const { reminders } = state;

    const renderReminders = (reminderList: Reminder[]) => {
        return reminderList.map((data) => (
            <Reminder id={data?.id} time={data?.time} description={data?.description} title={data?.title} key={data.id} />
        ));
    };

    const filterTodayReminders = () => {
        return reminders.filter((data) => data.time.slice(0, 11) === new Date().toISOString().slice(0, 11));
    };

    const todayReminders = filterTodayReminders();

    return (
        <div className="flex flex-col items-center md:m-0 m-3">
            <div className="text-2xl font-medium text-primary">{today ? "Today's Reminder" : "Reminders"}</div>

            {reminders?.length > 0 ? (
                !today ? (
                    renderReminders(reminders)
                ) : (
                    todayReminders.length > 0 ? (
                        renderReminders(todayReminders)
                    ) : (
                        <h4 className="mt-2 text-green-800 md:text-xl text-center">No Today's Reminders</h4>
                    )
                )
            ) : (
                <h4 className="mt-2 text-green-800 md:text-xl text-center">{today ? "No Today's Reminders" : "No Reminders Yet"}</h4>
            )}
        </div>
    );
};

export default ReminderList;

import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/tasks/TaskList";
import ReminderList from "../components/reminders/ReminderList";



const Home = () => {

    //add webhook to remove reminder

    return (
        <div className="w-full pt-10">
            <div className="md:flex md:mx-auto">
                <div className="md:w-5/12  lg:px-12 md:px-4  border-r-2">
                    <Sidebar />
                </div>
                <div className="md:w-7/12 overflow-auto" style={{ height: `calc(100vh - 10em)` }}>
                    <Routes>
                        <Route path="/task" element={< TaskList />}></Route>
                        <Route path="/" element={< TaskList />}></Route>
                        <Route path="/reminder" element={< ReminderList />}></Route>
                        <Route path="/all" element={[< ReminderList />, <TaskList />]}></Route>
                        <Route path="/today" element={< ReminderList today={true} />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home;
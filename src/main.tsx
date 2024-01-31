import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReminderProvider } from './context/reminder/ReminderContext.tsx'
import { TaskProvider } from './context/task/TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TaskProvider>
    <ReminderProvider>
      <App />
    </ReminderProvider>
  </TaskProvider>
)

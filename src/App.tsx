import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import OneSignal from 'react-onesignal';
import { useContext, useEffect } from "react";
import { ReminderContext } from "./context/reminder/ReminderContext";

function App() {
  const { dispatch } = useContext(ReminderContext);

  useEffect(() => {
    async function runOnesignal() {
      await OneSignal.init({ appId: import.meta.env.VITE_ONESIGNAL_APP_ID, allowLocalhostAsSecureOrigin: true });
      getUser();
      OneSignal.User.PushSubscription.addEventListener("change", getUser);
    }
    runOnesignal();
    return () => {
      OneSignal.User.PushSubscription.removeEventListener("change", getUser);
    };
  }, [])

  const getUser = () => {
    if (OneSignal.Notifications.permission && OneSignal.User.PushSubscription.id) {
      dispatch({ type: "SET_USER_SUBSCRIPTION_ID", payload: OneSignal.User.PushSubscription.id })
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  )
}

export default App

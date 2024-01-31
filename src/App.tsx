import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import OneSignal from 'react-onesignal';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function runOnesignal() {
      await OneSignal.init({ appId: import.meta.env.VITE_ONESIGNAL_APP_ID, allowLocalhostAsSecureOrigin: true });
    }
    runOnesignal();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  )
}

export default App

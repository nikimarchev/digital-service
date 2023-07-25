import React, { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import PhoneRepair from "./components/PhoneRepair.tsx";
import ComputerRepair from './components/ComputerRepair.tsx';
import SoftwareRepair from './components/SoftwareRepair.tsx';
import CarDiagnostics from './components/CarDiagnostics.tsx';
import PhoneParts from './components/PhoneParts.tsx';
import LoginPage from './components/LoginPage.tsx'

export const AdminInfo = React.createContext();
export const AdminInfoDispatch = React.createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/phone-repair",
    element: <PhoneRepair />
  },
  {
    path: "/computer-repair",
    element: <ComputerRepair />
  },
  {
    path: "/software-repair",
    element: <SoftwareRepair />
  },{
    path: "/car-diagnostics-repair",
    element: <CarDiagnostics />
  },{
    path: "/phone-parts",
    element: <PhoneParts />
  },{
    path: "/login-page",
    element: <LoginPage />
  }
]);

const App = () => {
  const [isAdminLogged, setIsAdminLogged] = useState(false);

  return (
    <AdminInfo.Provider value={isAdminLogged}>
      <AdminInfoDispatch.Provider value={setIsAdminLogged}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </AdminInfoDispatch.Provider>
    </AdminInfo.Provider>
  );
}

export default App;

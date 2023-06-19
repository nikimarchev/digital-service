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
  }
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

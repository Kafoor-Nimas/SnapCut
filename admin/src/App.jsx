import { useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddBarber from "./pages/AddBarber";
import BarbersList from "./pages/BarbersList";
import Dashboard from "./pages/BarbersList";
import Appointments from "./pages/Appointments";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-barber" element={<AddBarber />} />
                <Route path="/barbers" element={<BarbersList />} />
                <Route path="/appointments" element={<Appointments />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

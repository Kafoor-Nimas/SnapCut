import { useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddBarber from "./pages/AddBarber";
import BarbersList from "./pages/BarbersList";
import Appointments from "./pages/Appointments";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

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
                <Route path="/" element={<Dashboard token={token} />} />
                <Route
                  path="/add-barber"
                  element={<AddBarber token={token} />}
                />
                <Route
                  path="/barbers"
                  element={<BarbersList token={token} />}
                />
                <Route
                  path="/appointments"
                  element={<Appointments token={token} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppConextProvider = (props) => {
  const currency = "LKR";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null);
  const [barbers, setBarbers] = useState([]);

  const navigate = useNavigate();

  const getBarbers = async () => {
    const response = await axios.get(backendUrl + "/api/barber/list");

    if (response.data.success) {
      setBarbers(response.data.barbers);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    getBarbers();
  }, []);

  const value = {
    token,
    setToken,
    userData,
    setUserData,
    barbers,
    backendUrl,
    currency,
    navigate,
    setBarbers,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppConextProvider;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = "LKR";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null);
  const [barbers, setBarbers] = useState([]);

  const navigate = useNavigate();

  const getBarbers = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/barber/list");

      if (response.data.success) {
        setBarbers(response.data.barbers);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/profile", {
        headers: { token },
      });

      if (response.data.success) {
        setUserData(response.data.user);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getBarbers();
  }, []);

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

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

export default AppContextProvider;

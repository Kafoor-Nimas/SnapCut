import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Appointments = ({ token }) => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/appointment/list-all",
        { headers: token },
      );

      if (response.data.success) {
        setAppointments(response.data.appointments);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  
  return <div>Appointments</div>;
};

export default Appointments;

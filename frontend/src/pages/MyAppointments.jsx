import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { token, backendUrl, currency } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/appointment/list", {
        headers: { token },
      });

      if (response.data.success) {
        setAppointments(response.data.userAppointment);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const respose = await axios.post(
        backendUrl + "/api/appointment/cancel",
        { appointmentId },
        { headers: { token } },
      );

      if (respose.data.success) {
        toast.success(respose.data.message);
        getAppointments();
      } else {
        toast.error(respose.data.message);
      }
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getAppointments();
    }
  }, []);
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment._id} className="flex gap-4 border-b py-4">
            {/* Barber image */}
            <img
              src={appointment.barberData.image}
              alt=""
              className="w-24 h-24 rounded-lg object-cover"
            />

            {/* Appointment details */}
            <div className="flex flex-col gap-1">
              <h2 className="font-bold">{appointment.barberData.name}</h2>
              <p className="text-gray-500 text-sm">
                {appointment.date} | {appointment.time}
              </p>
              <p className="text-[#865926]">
                {currency} {appointment.fees}
              </p>
              <p
                className={`text-sm font-medium
              ${appointment.status === "Pending" ? "text-yellow-500" : ""}
              ${appointment.status === "Confirmed" ? "text-green-500" : ""}
              ${appointment.status === "Cancelled" ? "text-red-500" : ""}
            `}
              >
                {appointment.status}
              </p>
            </div>

            {/* Cancel button */}
            {appointment.status !== "Cancelled" && (
              <button
                onClick={() => cancelAppointment(appointment._id)}
                className="ml-auto self-start bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm"
              >
                Cancel
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyAppointments;

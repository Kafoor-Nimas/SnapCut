import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Appointments = ({ token }) => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/appointment/list-all",
        { headers: { token } },
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

  useEffect(() => {
    getAppointments();
  }, [token]);

  const updateStatus = async (id, status) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/appointment/status",
        { appointmentId: id, status },
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        getAppointments();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium mb-4">All Appointments</h2>
      <table className="w-full border border-gray-200 rounded-md">
        <thead className="bg-gray-50 text-sm text-left">
          <tr>
            <th className="px-4 py-3">Barber</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Date & Time</th>
            <th className="px-4 py-3">Fees</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-600">
          {appointments.map((appointment, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-3">{appointment.barberData.name}</td>
              <td className="px-4 py-3">{appointment.userData.name}</td>
              <td className="px-4 py-3">
                {appointment.date} | {appointment.time}
              </td>
              <td className="px-4 py-3">{appointment.fees}</td>
              <td className="px-4 py-3">{appointment.status}</td>
              <td className="px-4 py-3 flex gap-2">
                <button
                  onClick={() => updateStatus(appointment._id, "Confirmed")}
                  className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                >
                  Confirm
                </button>
                <button
                  onClick={() => updateStatus(appointment._id, "Cancelled")}
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import axios from "axios";

const Dashboard = ({ token }) => {
  const [barbers, setBarbers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const getBarbers = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/barber/list", {
        headers: { token },
      });
      if (response.data.success) {
        setBarbers(response.data.barbers);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

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
    getBarbers();
    getAppointments();
  }, []);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="bg-white border rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-[#865926]">{barbers.length}</p>
          <p className="text-gray-500 mt-1">Total Barbers</p>
        </div>
        <div className="bg-white border rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-[#865926]">
            {appointments.length}
          </p>
          <p className="text-gray-500 mt-1">Total Appointments</p>
        </div>
        <div className="bg-white border rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-yellow-500">
            {appointments.filter((a) => a.status === "Pending").length}
          </p>
          <p className="text-gray-500 mt-1">Pending</p>
        </div>
        <div className="bg-white border rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-yellow-500">
            {appointments.filter((a) => a.status === "Cancelled").length}
          </p>
          <p className="text-gray-500 mt-1">Cancelled</p>
        </div>
      </div>

      {/* Latest Appointments */}
      <h2 className="text-lg font-bold mb-4">Latest Appointments</h2>
      {/* Last 5 appointments here */}
      <table className="w-full border border-gray-200 rounded-md">
        <thead className="bg-gray-50 text-sm text-left">
          <tr>
            <th className="px-4 py-3">Barber</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Date & Time</th>
            <th className="px-4 py-3">Fees</th>
            <th className="px-4 py-3">Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

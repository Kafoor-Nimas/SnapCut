import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Appointment = () => {
  const { barberId } = useParams();
  const { barbers, token, navigate, backendUrl, currency } =
    useContext(AppContext);
  const [barber, setBarber] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // find barber from barbers array using barberId
    const selectedBarber = barbers.find((barber) => barber._id === barberId);
    setBarber(selectedBarber);
  }, [barberId, barbers]);

  const bookAppointment = async () => {
    try {
      if (token) {
        const response = await axios.post(
          backendUrl + "/api/appointment/book",
          { date, time, barberId },
          { headers: { token } },
        );

        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/my-appointments");
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("User not authorized");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  if (!barber) return <div>Loading...</div>;
  return (
    <div className="flex flex-col sm:flex-row gap-8 p-10">
      {/* Left side barber info */}
      <div className="flex flex-col gap-3">
        <img
          src={barber.image}
          alt="barber"
          className="w-64 rounded-lg object-cover"
        />
        <h1 className="text-2xl font-bold">{barber.name}</h1>
        <p className="text-gray-500">{barber.services.join(", ")}</p>
        <p className="text-[#865926] font-bold">
          {currency} {barber.fees}
        </p>
      </div>

      {/* Righ side Date picker,Time slots,Book button */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Book Appointment</h2>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          name=""
          id=""
          className="border p-2 rounded-lg"
        />
        {/* Replace time input with slots */}
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setTime(slot)}
              className={`py-2 px-3 rounded-lg border text-sm
        ${
          time === slot
            ? "bg-[#865926] text-white border-[#865926]"
            : "border-gray-300 hover:border-[#865926]"
        }`}
            >
              {slot}
            </button>
          ))}
        </div>
        <button
          onClick={bookAppointment}
          className="bg-[#865926] text-white py-3 px-6 rounded-lg hover:bg-[#6b4520]"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;

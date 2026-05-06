import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const BarberCart = ({ barber }) => {
  const { navigate, currency } = useContext(AppContext);
  return (
    <div
      onClick={() => navigate(`/appointment/${barber._id}`)}
      className="flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-[#c8a063]"
    >
      <img
        src={barber.image}
        alt=""
        className="h-64 w-full object-cover object-top"
      />
      <div className="flex flex-col gap-1 p-3 bg-[#1f1509]">
        <h1 className="font-bold text-white truncate">{barber.name}</h1>
        <p className="text-sm text-gray-400 truncate">{barber.services.join(", ")}</p>
        <p className="text-[#c8a063]">
          {currency} {barber.fees}
        </p>
      </div>
    </div>
  );
};

export default BarberCart;

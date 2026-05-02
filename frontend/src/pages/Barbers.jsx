import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BarberCart from "../components/BarberCart";

const Barbers = () => {
  const { barbers } = useContext(AppContext);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Our Barbers</h1>
      <div className="grid grid-cols-5 gap-4">
        {barbers.map((barber) => (
          <BarberCart key={barber._id} barber={barber} />
        ))}
      </div>
    </div>
  );
};

export default Barbers;

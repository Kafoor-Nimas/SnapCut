import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import BarberCart from "../components/BarberCart";

const Home = () => {
  const { navigate, barbers } = useContext(AppContext);
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#171008] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-20 gap-8">
        {/* Left Side Text */}
        <div className="max-w-lg text-center md:text-left">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Skilled Craftsmen <br />
            <span className="text-[#c8a063]">Barbershop</span>
          </h1>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            A barber is a person whose occupation is mainly to cut, dress,
            groom, style and shave men's and boy's hair or beards.
          </p>
          <button
            onClick={() => navigate("/barbers")}
            className="mt-6 bg-[#865926] text-white px-6 py-3 rounded-lg hover:bg-[#6b4520]"
          >
            Book An Appointment
          </button>
        </div>

        {/* Right side -image */}
        <div className="flex gap-4">
          <img
            src={assets.banner2}
            alt=""
            className="h-80 rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Meet Our Barbers */}
      <div className="flex flex-col gap-6 my-6 px-4 md:px-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-[#c8a063]">
            Meet Our <span className="">Barbers</span>
          </h1>
          <button
            onClick={() => navigate("/barbers")}
            className="text-sm bg-white px-4 py-2 text-[#c8a063] border border-[#c8a063]"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {barbers.slice(0, 5).map((barber) => (
            <BarberCart key={barber._id} barber={barber} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

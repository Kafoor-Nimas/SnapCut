import { useContext } from "react";
import { assets } from "../assets/assets.js";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { token, setToken, userData, navigate } = useContext(AppContext);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#171008]">
      {/* Logo */}
      <img
        src={assets.logo_light}
        alt="logo"
        className="w-32 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Nav Links */}
      <div className="flex gap-6 items-center text-[#865926]">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/barbers"}
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Barbers
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Contact
        </NavLink>
      </div>

      {/* Login/Profile */}
      {token && userData ? (
        <div className="relative group">
          {/* 👇 Shows first letter of user's name */}
          <div className="w-10 h-10 rounded-full bg-[#865926] flex items-center justify-center cursor-pointer">
            <span className="text-white font-bold text-lg">
              {userData.name ? userData.name[0].toUpperCase() : "U"}
            </span>
          </div>
          <div className="hidden group-hover:block absolute right-0 bg-white shadow-lg rounded-lg p-3 z-10">
            <p
              onClick={() => navigate("/my-appointments")}
              className="cursor-pointer hover:text-[#865926] py-1"
            >
              My Appointments
            </p>
            <p
              onClick={logout}
              className="cursor-pointer hover:text-[#865926] py-1"
            >
              Logout
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="text-white bg-[#865926] py-2 px-4 rounded-lg hover:bg-[#6b4520]"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;

import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  const logout = () => {
    setToken("");
    localStorage.removeItem("adminToken");
  };
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#171008]">
      <img src={assets.logo} alt="" className="w-24" />
      <button
        className="bg-[#865926] text-white px-4 py-2 rounded-lg hover:bg-[#6b4520] text-sm"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

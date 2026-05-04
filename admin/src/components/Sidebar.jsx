import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-48 bg-gray-100 border-r flex flex-col gap-2 pt-6">
      {/* Nav links */}
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `px-4 py-2 text-sm font-medium ${isActive ? "bg-[#865926] text-white" : "text-gray-600 hover:bg-gray-200"}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to={"/add-barber"}
        className={({ isActive }) =>
          `px-4 py-2 text-sm font-medium ${isActive ? "bg-[#865926] text-white" : "text-gray-600 hover:bg-gray-200"}`
        }
      >
        AddBarber
      </NavLink>
      <NavLink
        to={"/barbers"}
        className={({ isActive }) =>
          `px-4 py-2 text-sm font-medium ${isActive ? "bg-[#865926] text-white" : "text-gray-600 hover:bg-gray-200"}`
        }
      >
        List Barbers
      </NavLink>
      <NavLink
        to={"/appointments"}
        className={({ isActive }) =>
          `px-4 py-2 text-sm font-medium ${isActive ? "bg-[#865926] text-white" : "text-gray-600 hover:bg-gray-200"}`
        }
      >
        Appointments
      </NavLink>
    </div>
  );
};

export default Sidebar;

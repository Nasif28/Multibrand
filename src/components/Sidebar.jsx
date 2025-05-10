import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import { Button } from "./ui/button";

const Sidebar = () => {
  const dispatch = useDispatch();

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <aside className="w-56 h-[calc(100vh-88px)] bg-gray-300 dark:bg-gray-700   hidden md:flex flex-col justify-between">
      {/* Top Section */}
      <div className="p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          Admin Panel
        </h2>
        <hr className="border-gray-400 dark:border-gray-700" />

        <nav className="space-y-2 mt-3">
          <NavLink to="/dashboard" className={linkClass}>
            📊 Dashboard
          </NavLink>
          <NavLink to="/users" className={linkClass}>
            👤 Users
          </NavLink>
        </nav>
      </div>

      {/* Bottom Logout */}
      <div className="p-4 ">
        <Button
          variant="destructive"
          className="w-full justify-start"
          onClick={() => dispatch(logout())}
        >
          🚪 Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

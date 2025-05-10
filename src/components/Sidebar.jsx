import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-700 hidden md:block">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Admin Panel
        </h2>
        <nav className="space-y-2">
          <NavLink to="/dashboard" className={linkClass}>
            📊 Dashboard
          </NavLink>
          <NavLink to="/users" className={linkClass}>
            👤 Users
          </NavLink>
        </nav>
        <div className="mt-10">
          <button
            onClick={() => dispatch(logout())}
            className="w-full px-4 py-2 text-left bg-red-500 text-white rounded hover:bg-red-600"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <button onClick={() => dispatch(logout())} className="text-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

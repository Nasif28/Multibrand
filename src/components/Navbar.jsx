import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="w-full bg-gray-300 dark:bg-gray-700  dark:border-gray-800">
      <div className="px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo.gif" alt="Logo" className="h-16 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

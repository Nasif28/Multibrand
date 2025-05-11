import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4  bg-gray-200 dark:bg-gray-800 ">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

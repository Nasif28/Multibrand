import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidePanel from "@/components/SidePanel";

const ProtectedLayout = () => {
  const token = useSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/login" />;

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
        <SidebarProvider>
        <SidePanel />

         <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
    </SidebarProvider>
      </div>
  );
};

export default ProtectedLayout;

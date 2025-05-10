import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const token = useSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;

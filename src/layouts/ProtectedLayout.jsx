import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Navigate, Outlet } from 'react-router';

const ProtectedLayout = () => {
  const token = useSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/login" />;

  return (
    <div className="flex min-h-screen dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;

import EmailDomainDonutChart from "@/components/charts/EmailDomainDonutChart";
import UserDataTable from "@/components/charts/UserDataTable";
import UsersByYearBarChart from "@/components/charts/UsersByYearBarChart";
import UserStatusPieChart from "@/components/charts/UserStatusPieChart";
import UserTrendLineChart from "@/components/charts/UserTrendLineChart";
import DeleteUserModal from "@/components/users/DeleteUserModal";
import UserFormModal from "@/components/users/UserFormModal";
import ViewUserModal from "@/components/users/ViewUserModal";
import { userBroadcastChannel } from "@/lib/broadcast";
import { useGetUsersQuery } from "@/redux/api";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { data: users = [], refetch, isLoading } = useGetUsersQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const handler = () => refetch();
    userBroadcastChannel.addEventListener("message", handler);
    return () => userBroadcastChannel.removeEventListener("message", handler);
  }, [refetch]);

  if (isLoading) return <p>Loading dashboard...</p>;

  return (
    <div>
      <span className="text-lg font-bold text-gray-800 dark:text-white">
        Dashboard
      </span>

      <div className="grid gap-3 md:grid-cols-2">
        <UserDataTable
          users={users}
          setSelectedUser={setSelectedUser}
          setModalType={setModalType}
        />
        <UsersByYearBarChart users={users} />
        <UserStatusPieChart users={users} />
        <EmailDomainDonutChart users={users} />
        <UserTrendLineChart users={users} />
      </div>

      {modalType === "edit" && (
        <UserFormModal user={selectedUser} onClose={() => setModalType(null)} />
      )}
      {modalType === "view" && (
        <ViewUserModal user={selectedUser} onClose={() => setModalType(null)} />
      )}
      {modalType === "delete" && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setModalType(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;

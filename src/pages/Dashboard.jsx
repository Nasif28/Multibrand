import EmailDomainDonutChart from "@/components/charts/EmailDomainDonutChart";
import UsersByYearBarChart from "@/components/charts/UsersByYearBarChart";
import UserStatusPieChart from "@/components/charts/UserStatusPieChart";
import UserTrendLineChart from "@/components/charts/UserTrendLineChart";
import { userBroadcastChannel } from "@/lib/broadcast";
import { useGetUsersQuery } from "@/redux/api";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { data: users = [], refetch, isLoading } = useGetUsersQuery();

  useEffect(() => {
    const handler = () => refetch();
    userBroadcastChannel.addEventListener("message", handler);
    return () => userBroadcastChannel.removeEventListener("message", handler);
  }, [refetch]);

  if (isLoading) return <p>Loading dashboard...</p>;

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <UsersByYearBarChart users={users} />
      <UserStatusPieChart users={users} />
      <EmailDomainDonutChart users={users} />
      <UserTrendLineChart users={users} />
    </div>
  );
};

export default Dashboard;

import EmailDomainDonutChart from "@/components/charts/EmailDomainDonutChart";
import UsersByYearBarChart from "@/components/charts/UsersByYearBarChart";
import UserStatusPieChart from "@/components/charts/UserStatusPieChart";
import UserTrendLineChart from "@/components/charts/UserTrendLineChart";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <UsersByYearBarChart />
      <UserStatusPieChart />
      <EmailDomainDonutChart />
      <UserTrendLineChart />
    </div>
  );
};

export default Dashboard;

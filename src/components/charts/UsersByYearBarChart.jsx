
import { useGetUsersQuery } from "@/redux/api";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UsersByYearBarChart = () => {
  const { data: users = [] } = useGetUsersQuery();

  const yearCount = users.reduce((acc, user) => {
    const year = new Date(user.dob).getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(yearCount).map(([year, count]) => ({
    year,
    count,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users by Birth Year</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsersByYearBarChart;

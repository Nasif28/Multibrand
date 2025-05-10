
import { useGetUsersQuery } from "@/redux/api";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#10b981", "#ef4444"];

const UserStatusPieChart = () => {
  const { data: users = [] } = useGetUsersQuery();

  const data = [
    { name: "Active", value: users.filter((u) => u.status === true).length },
    { name: "Inactive", value: users.filter((u) => u.status === false).length },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Status Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UserStatusPieChart;

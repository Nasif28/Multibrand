
import { useGetUsersQuery } from "@/redux/api";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#f59e0b", "#8b5cf6", "#f43f5e", "#10b981"];

const EmailDomainDonutChart = () => {
  const { data: users = [] } = useGetUsersQuery();

  const domainCounts = users.reduce((acc, user) => {
    const domain = user.email.split("@")[1];
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(domainCounts).map(([domain, count]) => ({
    name: domain,
    value: count,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Domain Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              label
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EmailDomainDonutChart;

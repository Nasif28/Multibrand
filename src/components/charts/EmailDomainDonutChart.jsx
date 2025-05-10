import { useGetUsersQuery } from "@/redux/api";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#f59e0b", "#8b5cf6", "#f43f5e", "#10b981"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const item = payload[0];
    return (
      <div className="bg-white dark:bg-gray-900 p-2 rounded border shadow text-sm">
        <p className="font-semibold">{item.name}</p>
        <p>{item.value} users</p>
      </div>
    );
  }
  return null;
};

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

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Domain Distribution</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Donut chart */}
          <div className="w-full md:w-2/3 relative">
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
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total
                </p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">
                  {total}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-0 md:pl-4">
            <ul className="space-y-2">
              {chartData.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  ></span>
                  <span>{item.name}</span>
                  <span className="ml-auto font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailDomainDonutChart;

import { useGetUsersQuery } from "@/redux/api";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#10b981", "#ef4444"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const item = payload[0];
    return (
      <div className="bg-white dark:bg-gray-900 p-2 rounded border shadow text-sm">
        <p className="font-semibold">
          {item.name}: {item.value}
        </p>
      </div>
    );
  }
  return null;
};

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
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Chart on the left */}
          <div className="w-full md:w-2/3">
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
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-0 md:pl-4">
            <ul className="space-y-2">
              {data.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i] }}
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

export default UserStatusPieChart;

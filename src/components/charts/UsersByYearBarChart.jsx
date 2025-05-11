import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white dark:bg-gray-900 p-3 rounded border shadow text-sm">
      <p className="font-semibold text-gray-800 dark:text-white">
        Year: {label}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Users: <strong>{payload[0].value}</strong>
      </p>
    </div>
  );
};

const UsersByYearBarChart = ({ users }) => {
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
            <YAxis
              allowDecimals={false}
              interval={0}
              domain={[0, "dataMax + 1"]}
            />

            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]}>
              <LabelList
                dataKey="count"
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsersByYearBarChart;

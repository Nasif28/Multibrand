import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const UserGrowthChart = () => {
  const chartData = [
    { month: 'Jan', users: 4 },
    { month: 'Feb', users: 7 },
    { month: 'Mar', users: 10 },
    { month: 'Apr', users: 6 },
    { month: 'May', users: 12 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UserGrowthChart;

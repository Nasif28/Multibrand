import { useGetUsersQuery } from '@/redux/api';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


const UsersByStatusChart = () => {
  const { data: users = [] } = useGetUsersQuery();

  const chartData = Object.entries(
    users.reduce((acc, user) => {
      acc[user.status] = (acc[user.status] || 0) + 1;
      return acc;
    }, {})
  ).map(([status, count]) => ({ status, count }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users by Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsersByStatusChart;

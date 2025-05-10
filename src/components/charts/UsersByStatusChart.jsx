import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Bar } from 'react-chartjs-2';
import { useGetUsersQuery } from '../../redux/api/userApi';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const UsersByStatusChart = () => {
  const { data: users = [] } = useGetUsersQuery();

  const countByStatus = users.reduce((acc, user) => {
    acc[user.status] = (acc[user.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(countByStatus),
    datasets: [
      {
        label: 'Users by Status',
        data: Object.values(countByStatus),
        backgroundColor: ['#3b82f6', '#ef4444'],
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users by Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={chartData} />
      </CardContent>
    </Card>
  );
};

export default UsersByStatusChart;

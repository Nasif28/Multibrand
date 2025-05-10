import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { Pie } from 'react-chartjs-2';
import { useGetUsersQuery } from '../../redux/api/userApi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusRatioPieChart = () => {
  const { data: users = [] } = useGetUsersQuery();

  const countByStatus = users.reduce((acc, user) => {
    acc[user.status] = (acc[user.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(countByStatus),
    datasets: [
      {
        data: Object.values(countByStatus),
        backgroundColor: ['#34d399', '#f87171'],
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <Pie data={chartData} />
      </CardContent>
    </Card>
  );
};

export default StatusRatioPieChart;

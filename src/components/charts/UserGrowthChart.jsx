import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const UserGrowthChart = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'New Users',
        data: [5, 10, 4, 8, 12], // You can later generate real data from user.dob or createdAt
        borderColor: '#10b981',
        tension: 0.4,
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default UserGrowthChart;

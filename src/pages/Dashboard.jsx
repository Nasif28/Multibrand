import StatusRatioPieChart from '@/components/charts/StatusRatioPieChart'
import UserGrowthChart from '@/components/charts/UserGrowthChart'
import UsersByStatusChart from '@/components/charts/UsersByStatusChart'
import React from 'react'

const Dashboard = () => {
  return (
  <div className="grid gap-6 md:grid-cols-2">
      <UsersByStatusChart />
      <UserGrowthChart />
      <StatusRatioPieChart />
    </div>
  )
}

export default Dashboard
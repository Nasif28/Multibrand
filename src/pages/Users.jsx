import UserTable from '@/components/users/UserTable'
import React from 'react'

const Users = () => {
  return (
      <div className="space-y-4">
      <h1 className="text-2xl font-semibold">User Management</h1>
      <UserTable />
    </div>
  )
}

export default Users
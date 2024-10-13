'use client'

import Link from 'next/link'
import { Users, UserPlus, BarChart } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Manage Employees"
          description="View and manage your employee roster"
          icon={Users}
          href="/EmployeeList"
        />
        <DashboardCard
          title="Create New Employee"
          description="Add a new employee to your organization"
          icon={UserPlus}
          href="/newEmployee"
        />
      </div>
    </div>
  )
}

const DashboardCard: React.FC<{ title: string; description: string; icon: React.ElementType; href: string }> = ({ title, description, icon: Icon, href }) => (
  <Link
    href={href}
    className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
  >
    <Icon className="mb-4 h-12 w-12 text-blue-500" />
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </Link>
)

export default Dashboard

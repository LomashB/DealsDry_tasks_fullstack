'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import '../styles/globals.css'
import { Bell, ChevronRight, LogOut, Menu, Users, BarChart, UserPlus } from 'lucide-react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [router])

  return (
    <html lang="en">

      <body className="bg-gray-100">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <aside
            className={`bg-blue-800 text-white transition-all duration-300 ease-in-out ${
              isSidebarOpen ? 'w-64' : 'w-20'
            }`}
            onMouseEnter={() => setIsSidebarOpen(true)}
            onMouseLeave={() => setIsSidebarOpen(false)}
          >
            <div className="flex h-16 items-center justify-center">
              {isSidebarOpen ? (
                <h2 className="text-xl font-bold">Deals Dry</h2>
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
            <nav className="mt-8 space-y-2 px-2">
              {[
                { name: 'Dashboard', icon: BarChart, href: '/' },
                { name: 'Employees', icon: Users, href: '/EmployeeList' },
                { name: 'Create Employee', icon: UserPlus, href: '/newEmployee' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-700 ${
                    isSidebarOpen ? '' : 'justify-center'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isSidebarOpen ? 'mr-3' : ''}`} />
                  {isSidebarOpen && item.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex flex-1 flex-col overflow-hidden">
            {/* Header */}
            <header className="flex h-16 items-center justify-between bg-white px-6 shadow">
              <h1 className="text-2xl font-semibold text-gray-800">Deals Dry Admin</h1>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800">
                  <Bell className="h-6 w-6" />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
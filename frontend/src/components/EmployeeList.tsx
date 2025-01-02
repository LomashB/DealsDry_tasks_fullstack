'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Edit, Trash2 } from 'lucide-react'

interface Employee {
  _id: string
  name: string
  email: string
  mobile: string
  designation: string
  course : string
  image : string
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:4000/api/employees', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setEmployees(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  const handleDelete = async (id: string) => {
    // Add confirmation before deletion
    if (!window.confirm('Are you sure you want to delete this employee?')) {
      return; // Exit if the user cancels
    }
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`http://localhost:4000/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee._id !== id))
    } catch (error) {
      console.error('Error deleting employee:', error)
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Employee List</h2>
        <Link
          href="newEmployee"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add New Employee
        </Link>
      </div>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Mobile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Designation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee._id}>
                  <td className="whitespace-nowrap px-6 py-4">{employee.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{employee.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">{employee.mobile}</td>
                  <td className="whitespace-nowrap px-6 py-4">{employee.designation}</td>
                  <td className="whitespace-nowrap px-6 py-4">{employee.course}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex space-x-2">
                      {/* <Link
                        href={`/employees/edit/${employee._id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit className="h-5 w-5" />
                      </Link> */}
                      <button
                        onClick={() => handleDelete(employee._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList
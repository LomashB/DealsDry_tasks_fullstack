'use client'
// src/app/employees/page.tsx
import CreateEmployee from '../../components/CreateEmployee';
import EmployeeList from '../../components/EmployeeList';
import AuthGuard from '../../components/AuthGuard';

const EmployeesPage = () => {
  return (
    <AuthGuard>
      <CreateEmployee />
    </AuthGuard>
  );
};

export default EmployeesPage;
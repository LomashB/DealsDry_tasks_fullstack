'use client'
// src/app/login/page.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      router.push('/');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center mt-7">
      <form onSubmit={handleSubmit} className="bg-blue-300 p-10 rounded-lg shadow-lg ">
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-darkBlue-600 "
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-darkBlue-600 "
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-400 rounded-lg  font-bold">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

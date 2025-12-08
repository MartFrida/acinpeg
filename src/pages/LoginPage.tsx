import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { useLogin } from '../hooks/useLogin'; // импортируем наш кастомный хук

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const handleLogin = () => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          // data уже типизировано как User & { token: string }
          setUser(data);
          navigate('/');
        },
        onError: (err: Error) => {
          console.error('Login error:', err.message);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white p-2 w-full rounded"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
        </button>

        {loginMutation.isError && (
          <div className="text-red-600 mt-2">
            Login failed: {loginMutation.error?.message}
          </div>
        )}
      </div>
    </div>
  );
}

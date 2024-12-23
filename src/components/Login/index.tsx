import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter(); // useRouter hook for navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Login submitted with:', { email, password });
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/'); 

  };

  return (
    <div className="flex justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        {/* Top Links */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 underline">
              Sign up
            </a>
          </p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Log In</h2>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-11 right-3 flex items-center text-gray-500"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"

            className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <span className="text-sm text-gray-500">OR Continue with</span>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex justify-center items-center">
            <span className="mr-2">Facebook</span>
          </button>
          <button className="w-full bg-red-500 text-white font-medium py-2 px-4 rounded-md flex justify-center items-center">
            <span className="mr-2">Google</span>
          </button>
          <button className="w-full bg-gray-900 text-white font-medium py-2 px-4 rounded-md flex justify-center items-center">
            <span className="mr-2">Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

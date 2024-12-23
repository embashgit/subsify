import { useEffect, useState } from 'react';

const SignupPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
useEffect(()=>{
    localStorage.setItem('isAuthenticated', 'false');
},[])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      // Submit form data here
      console.log("Form submitted");
    }
  };

  return (
    <div className=" flex justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        {/* Top Links */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 underline">
              Log in
            </a>
          </p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Create an account</h2>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Profile Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What should we call you?</label>
            <input
              type="text"
              placeholder="Enter your profile name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What’s your email?</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Create a password</label>
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

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Confirm password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-11 right-3 flex items-center text-gray-500"
            >
              {confirmPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Error Message for Mismatching Passwords */}
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}

          {/* Terms & Privacy */}
          <p className="text-xs text-gray-500 mt-1">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            By creating an account, you agree to the{' '}
            <a href="/terms" className="text-blue-500 underline">
              Terms of use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create an account
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

export default SignupPage;

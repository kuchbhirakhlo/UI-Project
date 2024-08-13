import { useState } from 'react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="flex justify-center p-6 items-center min-h-screen bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Form Container */}
      <div className=" p-8 rounded-xl border md:p-8 bg-white border-[#32de84] shadow-lg max-w-md w-full relative">
        {/* GIF above the form */}
        <div className="flex justify-center mb-4">
          <img src="/burgerif.gif" alt="Animated GIF" className="w-32 h-32" />
        </div>
        <h2 className="text-3xl font-bold ml-2 text-center text-black">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <label htmlFor="name" className="block text-black mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-[#32de84]  rounded-md bg-transparent text-textPrimary focus:outline-none focus:ring-2 focus:ring-[#51d0de]"
              />
            </div>
          )}
          <div className="relative">
            <label htmlFor="email" className="block text-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-[#32de84] rounded-md bg-transparent text-textPrimary focus:outline-none focus:ring-2 focus:ring-[#51d0de]"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-black mb-2">Password</label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 border border-[#32de84] rounded-md bg-transparent text-textPrimary focus:outline-none focus:ring-2 focus:ring-[#51d0de]"
            />
          </div>
          {!isLogin && (
            <div className="relative">
              <label htmlFor="confirm-password" className="block text-black mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                required
                className="w-full px-4 py-2 border border-[#32de84] rounded-md bg-transparent text-textPrimary focus:outline-none focus:ring-2 focus:ring-[#51d0de]"
              />
            </div>
          )}
          <button className="w-full py-2 rounded-md bg-[#32de84] text-background font-semibold hover:bg-accent-light transition-transform transform hover:scale-105">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#32de84] ml-1 hover:underline">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
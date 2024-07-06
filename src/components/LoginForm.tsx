import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  onError: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "dopice") {
      // Add your login success logic here
    } else {
      onError();
    }
  };

  return (
    <div className="flex w-full max-w-5xl mx-auto">
      <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 px-6 py-12 bg-white rounded-lg shadow flex flex-col justify-center items-center gap-8">
        <h2 className="text-neutral-900 text-3xl font-semibold font-['Noto Sans'] leading-9 sm:text-center">Log in to your account</h2>
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="john@example.com" 
              className="w-full px-3 py-2 bg-neutral-50 rounded border border-neutral-200 text-neutral-900 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="**********" 
                className="w-full px-3 py-2 bg-neutral-50 rounded border border-neutral-200 text-neutral-900 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <img 
                  src={isHovered ? "eye-close-line_active.svg" : "eye-close-line.svg"}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  alt="Toggle password visibility"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setShowPassword(false);
                  }}
                  onMouseDown={() => setShowPassword(true)}
                  onMouseUp={() => setShowPassword(false)}
                />
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 w-full ">
            <button 
              type="submit" 
              className="w-full max-w-[300px] py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm font-medium transition-colors duration-300">
              Submit
            </button>        
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}        
              theme="filled_black"
              width={300}
            />
          </div>
        </form>
        <p className="text-center text-sm">
          <span className="text-neutral-600">Don't have an account? </span>
          <Link to="/signup" className="text-blue-600 hover:underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-white rounded-md shadow">
        <img
          src="login_image.jfif"
          alt="Login Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  const inputClasses = "self-stretch px-3.5 py-2.5 bg-neutral-50 rounded border border-neutral-200 text-neutral-900 text-sm font-normal font-['Noto Sans'] leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent transition duration-200 ease-in-out"; 
  
  return (
    <div className="flex w-full max-w-5xl mx-auto h-screen items-center justify-center px-4 sm:px-0">
      <div className="w-96 flex-col justify-center items-center gap-6 inline-flex">
        <div className="w-84 lg:w-96 text-neutral-900 text-3xl font-semibold font-['Noto Sans'] leading-9">
          Create your account
        </div>
        <div className="h-80 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
            <div className="text-neutral-700 text-sm font-medium font-['Noto Sans'] leading-tight">
              Email
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className={inputClasses}
            />
          </div>
          <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
            <div className="text-neutral-700 text-sm font-medium font-['Noto Sans'] leading-tight">
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={inputClasses}
            />
          </div>
          <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
            {[
              "8 - 64 characters",
              "One uppercase letter",
              "One lowercase letter",
              "One number",
              "One special character (e.g., ! @ # $ % ^ & *)",
            ].map((requirement, index) => (
              <div
                key={index}
                className="self-stretch justify-start items-center gap-3 inline-flex"
              >
                <div className="w-5 h-5 relative">
                  <img
                    src="/checkbox-circle-fill.svg"
                    alt="Checkbox"
                    className="w-full h-full"
                  />
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                  <div className="self-stretch text-neutral-600 text-xs font-normal font-['Noto Sans'] leading-none">
                    {requirement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-32 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="p-1 rounded justify-start items-start gap-2 flex">
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded border border-neutral-300 cursor-pointer flex items-center justify-center ${
                    isChecked ? "bg-blue-500" : ""
                  }`}
                  onClick={handleCheckboxClick}
                >
                  {isChecked && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
                <div>
                  <span className="text-neutral-600 text-sm font-normal font-['Noto Sans'] leading-tight pl-3">
                    I agree with
                  </span>
                  <span className="text-indigo-700 text-sm font-normal font-['Noto Sans'] leading-tight">
                    {" "}
                    <a
                      href="https://www.verfacto.com/wp-content/uploads/2021/03/terms-of-service.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 text-sm font-normal font-['Noto Sans'] leading-tight hover:underline"
                    >
                      Terms of Service
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="self-stretch px-3.5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded shadow justify-center items-center gap-1 inline-flex">
            <div className="px-0.5 justify-center items-center flex">
              <div className="text-white text-sm font-medium font-['Noto Sans'] leading-tight transition-colors duration-300">
                Create account
              </div>
            </div>
          </button>
          <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <div>
              <span className="text-neutral-900 text-sm font-medium font-['Noto Sans'] leading-tight">
                Already have an account?{" "}
              </span>
              <span className="text-indigo-700 text-sm font-medium font-['Noto Sans'] leading-tight">
                <Link to="/login">Log in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-white rounded-md shadow">
        <img
          src="signup_image.jfif"
          alt="Sign Up Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignUp;

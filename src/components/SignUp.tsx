import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PasswordRequirements from "./PasswordRequirements";
import ErrorAgreeToTerms from "./ErrorAgreeToTerms";
import ErrorAccountAlreadyExists from "./ErrorAccountAlreadyExists";


interface SignUpProps {
  onError: (error: string) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onError }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTermsError, setShowTermsError] = useState(false);
  const [showAccountExistsError, setShowAccountExistsError] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  useEffect(() => {
    checkPasswordRequirements(password);
  }, [password]);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const checkPasswordRequirements = (password: string) => {
    setPasswordRequirements({
      length: password.length >= 8 && password.length <= 64,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    });
  };

  const checkIfAccountExists = async (email: string): Promise<boolean> => {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(email === "marek@fisera.sk");
      }, 1000);
    });
  };

  const handleCreateAccount = async () => {
    if (!isChecked) {
      setShowTermsError(true);
      return;
    }

    setShowTermsError(false);
    setShowAccountExistsError(false);

    try {
      const accountExists = await checkIfAccountExists(email);

      if (accountExists) {
        setShowAccountExistsError(true);
      } else {
        console.log("Creating account...");
        // Add your account creation logic here
      }
    } catch (error) {
      console.error("Error checking account existence:", error);
      onError("An error occurred while creating your account. Please try again.");
    }
  };

  const inputClasses =
    "self-stretch px-3.5 py-2.5 bg-neutral-50 rounded border border-neutral-200 text-neutral-900 text-sm font-normal font-['Noto Sans'] leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent transition duration-200 ease-in-out";

  return (
    <div className="flex w-full max-w-5xl mx-auto h-screen items-center justify-center px-4 sm:px-0">
      <div className="w-96 flex-col justify-center items-center gap-6 inline-flex">
        <h2 className="w-84 lg:w-96 text-neutral-900 text-3xl font-semibold font-['Noto Sans'] leading-9">
          Create your account
        </h2>
        <div className="h-80 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
            <label className="text-neutral-700 text-sm font-medium font-['Noto Sans'] leading-tight">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className={inputClasses}
            />
          </div>
          <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
            <label className="text-neutral-700 text-sm font-medium font-['Noto Sans'] leading-tight">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={inputClasses}
            />
          </div>
          <PasswordRequirements password={password} />
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
                <span className="text-neutral-600 text-sm font-normal font-['Noto Sans'] leading-tight pl-3">
                  I agree with
                  <a
                    href="https://www.verfacto.com/wp-content/uploads/2021/03/terms-of-service.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 text-sm font-normal font-['Noto Sans'] leading-tight hover:underline ml-1"
                  >
                    Terms of Service
                  </a>
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleCreateAccount}
            className="self-stretch px-3.5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded shadow justify-center items-center gap-1 inline-flex"
          >
            <span className="text-white text-sm font-medium font-['Noto Sans'] leading-tight transition-colors duration-300">
              Create account
            </span>
          </button>
          <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <p className="text-neutral-900 text-sm font-medium font-['Noto Sans'] leading-tight">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-700">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-white rounded-md shadow">
        <img
          src="signup_image.jfif"
          alt="Sign Up"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {showTermsError && <ErrorAgreeToTerms onClose={() => setShowTermsError(false)} />}
      {showAccountExistsError && <ErrorAccountAlreadyExists onClose={() => setShowAccountExistsError(false)} />}
    </div>
  );
};

export default SignUp;

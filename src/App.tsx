import React, { useState, useEffect, useRef } from 'react';
import LoginForm from './components/LoginForm';
import ErrorNotification from './components/ErrorNotification';


const App: React.FC = () => {
  const [showError, setShowError] = useState(false);
  const errorTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    };
  }, []);

  const handleShowError = () => {
    setShowError(true);
    if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    errorTimeoutRef.current = window.setTimeout(() => setShowError(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        <LoginForm onError={handleShowError} />
        <div className="hidden lg:block lg:w-1/2 bg-white rounded-md shadow max-w-md">
          <img 
            src="login_image.jfif" 
            alt="Login Image" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      {showError && <ErrorNotification />}
    </div>
  );
};



export default App;

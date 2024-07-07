import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes';
import ErrorNotification from "./components/ErrorNotification";

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
    errorTimeoutRef.current = window.setTimeout(
      () => setShowError(false),
      3000,
    );
  };

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center">
          <AppRoutes onError={handleShowError} />
        </div>
        {showError && <ErrorNotification />}
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';

interface RoutesProps {
  onError: () => void;
}

const AppRoutes: React.FC<RoutesProps> = ({ onError }) => (
  <Routes>
    <Route path="/login" element={<LoginForm onError={onError} />} />
    <Route path="/signup" element={<SignUp onError={onError} />} />
    <Route path="/" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default AppRoutes;
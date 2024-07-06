import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1020808879402-pm4rrr81517uur00qv78360clt5c37e9.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)

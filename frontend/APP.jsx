import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { getToken } from './utils/auth';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!getToken());

  return (
    <div>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

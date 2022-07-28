import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LogInForm from './Registration/LogInForm';
import SignUpForm from './Registration/SignUpForm';
import Navbar from './NavBar';
import Home from './Home';

export default function App() {
  const [authUser, setAuthUser] = useState(null);

  // пропсы

  return (
    <div className="container">
      <Navbar authUser={authUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInForm setAuthUser={setAuthUser} />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>

    </div>
  );
}

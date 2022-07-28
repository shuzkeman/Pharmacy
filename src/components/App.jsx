import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogInForm from './Registration/LogInForm';
import SignUpForm from './Registration/SignUpForm';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

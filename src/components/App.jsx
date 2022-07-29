import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LogInForm from './Registration/LogInForm';
import SignUpForm from './Registration/SignUpForm';
import Navbar from './NavBar';
import Home from './Home';
import Cart from './Cart';

export default function App({ usernameSession }) {
  const [authUser, setAuthUser] = useState(usernameSession);
  const logoutHandler = () => {
    setAuthUser(null);
    axios.get('/api/logout').then(() => null);
  };
  // пропсы

  return (
    <div className="container">
      <Navbar authUser={authUser} setAuthUser={setAuthUser} logoutHandler={logoutHandler} />
      <Routes>
        <Route path="/" element={<Home authUser={authUser} />} />
        <Route path="/login" element={<LogInForm setAuthUser={setAuthUser} />} />
        <Route path="/signup" element={<SignUpForm setAuthUser={setAuthUser}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import NavBarAuth from './NavBarAuth';
import NavBarNotAuth from './NavBarNotAuth';

export default function NavBar({ authUser }) {
  return (
    <nav className="navbar" style={{ backgroundColor: '#ecffed', height: '100px' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ fontSize: '34px', color: '#28930f' }}>
          <img src="https://www.pinclipart.com/picdir/big/540-5403205_swiss-pharmacy-logo-pharmacy-clipart.png" alt="" width="40" height="40" className="d-inline-block align-text-top" />
          СОЦАПТЕКА
        </Link>
        {authUser ? <NavBarAuth /> : <NavBarNotAuth />}
      </div>
    </nav>
  );
}

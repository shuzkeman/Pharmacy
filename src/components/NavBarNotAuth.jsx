import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarNotAuth() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/signup"><button className="btn btn-outline-success me-2" type="button">Регистрация</button></Link>
      </li>
      <li className="nav-item">
        <Link to="/login"><button className="btn btn-outline-success me-2" type="button">Вход</button></Link>
      </li>
    </ul>
  );
}

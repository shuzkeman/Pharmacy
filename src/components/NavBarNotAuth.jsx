import React from 'react';

export default function NavBarNotAuth() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <button className="btn btn-outline-success me-2" type="button">Регистрация</button>
      </li>
      <li className="nav-item">
        <button className="btn btn-outline-success me-2" type="button">Вход</button>
      </li>
    </ul>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarAuth({ setAuthUser, authUser, logoutHandler }) {
  return (
    <>
      <ul className="nav justify-content-end align-items-center">
        <li className="nav-item" style={{ color: '#134907' }}>
          Добро пожаловать,
          <a className="nav-link link-success fw-semibold" aria-current="page" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#" style={{ color: '#134907', display: 'inline', marginRight: '20px' }}>{authUser.name}</a>
        </li>
        <li className="nav-item">
          <Link to='/cart'> <button className="btn btn-outline-success me-2" type="button">Корзина</button></Link>
        </li>
        <li className="nav-item">
          <Link to='/'><button className="btn btn-outline-success me-2" type="button" onClick={logoutHandler}>Выход</button></Link>
        </li>
      </ul>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Заказы</h5>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">№ заказа</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Общая стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Парацетамол, Аспирин, Парацетамол, Аспирин, Парацетамол, Аспирин </td>
                    <td>100 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#449532' }}>Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import CartPosition from './CartPosition';

export default function Cart() {
  return (
    <div className="col">
      <div className="row w-75 mx-auto h-100 d-flex align-items-center justify-content-center" id="backet">
        <p className="h3">Корзина</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Наименование</th>
              <th scope="col">Цена</th>
              <th scope="col">Количество</th>
              <th scope="col">Удалить товар</th>
            </tr>
          </thead>
          <tbody>
            <CartPosition />
          </tbody>
        </table>
      </div>
    </div>
  );
}

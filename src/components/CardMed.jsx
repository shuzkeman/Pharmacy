import React from 'react';

export default function CardMed() {
  return (
    <div className="card" style={{ width: '18rem', margin: '20px' }}>
      <img src="https://raduga-ural.ru/image/cache/data/new/tovar1/188-767x767.jpg" className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">Парацетамол</h5>
        <p className="card-text">200₽</p>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#449532' }}>Положить в корзину</button>
      </div>
    </div>
  );
}

import React from 'react';

export default function CardMed({ med }) {
  return (
    <div className="card" style={{ width: '300px', margin: '10px' }}>
      <img src={`${med?.img}`} className="card-img-top" alt="img" style={{height: 'auto', width: '200px'}} />
      <div className="card-body">
        <h5 className="card-title">{med?.name}</h5>
        <p className="card-text">{med?.price}₽</p>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#449532' }}>Положить в корзину</button>
      </div>
    </div>
  );
}

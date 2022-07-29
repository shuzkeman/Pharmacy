import React, { useState, useEffect } from 'react';
import CardMed from './CardMed';
import axios from 'axios';

export default function Home() {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    axios.get('/api/cardmed')
      .then((res) => setMedicines(res.data));
  }, []);
  console.log(medicines);
  return (
    <div className="col">
      <div className="row d-flex p-1 d-flex justify-content-center">
      {medicines.map((el) => <CardMed key={el.id, el.name, el.price, el.img} med={el} />)}
      </div>
    </div>
  );
}

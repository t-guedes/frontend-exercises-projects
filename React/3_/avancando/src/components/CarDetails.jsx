import React from "react";

const CarDetails = ({ model, brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Modelo: {model}</li>
        <li>Marca: {brand}</li>
        <li>Kilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
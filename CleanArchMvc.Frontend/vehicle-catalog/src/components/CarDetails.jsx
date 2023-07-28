import React from "react";
import "../styles/carDetails.css"; 

const CarDetails = (props) => {
  return (
    <div className="car-details-card card mb-2 shadow">
      <h2 className="car-name">Nome do carro</h2>
      <img
        src="../components/favicon.ico"
        className="car-image card-img-top"
        alt="Carro"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between pt-2 border-top">
          <h5 className="car-model">Modelo do carro</h5>
          <h6 className="car-brand">Marca do carro</h6>
        </div>
        <h5 className="car-title">Preço</h5>
        <p className="car-description">
          Descrição do carro lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla venenatis lobortis fermentum. Mauris vel quam
          id justo fermentum.
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <button className="car-edit-button btn btn-outline-primary">
          Editar
        </button>
        <button className="car-delete-button btn btn-outline-danger">
          Deletar
        </button>
      </div>
    </div>
  );
};

export default CarDetails;

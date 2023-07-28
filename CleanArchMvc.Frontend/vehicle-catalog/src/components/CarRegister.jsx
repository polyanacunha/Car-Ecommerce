import React, { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import vehicleService from "../services/vehicleService";
import "../styles/carRegister.css";

const CarRegister = (props) => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(undefined);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const CreateNewCar = async () => {
    const token = localStorage.getItem("token");
    const expiresAt = new Date(localStorage.getItem("expiresAt")).getTime();
    setLogged(true);

    if (token != null && expiresAt >= Date.now()) {
      const vehicleData = {
        nome: name,
        marca: brand,
        modelo: model,
        valor: parseFloat(price),
        foto: image,
      };

      try {
        const response = await vehicleService.createNewVehicle(
          token,
          vehicleData
        );
        setLogged(true);
        alert("Veículo cadastrado com sucesso!");
      } catch (error) {
        navigate(`/carRegister`);
      }
    } else {
      navigate(`/login?redirectTo=carRegister`);
      setLogged(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleBackToList = () => {
    navigate(`/vehicleList`);
  };

  return (
    <div className="car-register-container">
      {/* {logged ?(
        <> */}
      <form className="car-register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Registrar novo carro</h2>

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            id="name"
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand" className="form-label">
            Marca
          </label>
          <input
            id="brand"
            type="text"
            className="form-input"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="model" className="form-label">
            Modelo
          </label>
          <input
            id="model"
            type="text"
            className="form-input"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Preço
          </label>
          <input
            id="price"
            type="text"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Foto
          </label>
          <input
            id="foto"
            type="text"
            className="form-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button
            className="form-button btn btn-primary"
            onClick={() => {
              CreateNewCar();
              handleBackToList();
            }}
          >
            Registrar
          </button>
          <button
            className="form-button btn btn-primary"
            onClick={() => handleBackToList()}
          >
            Voltar para a lista
          </button>
        </div>
      </form>
      {/* </>
      ) : null } */}
    </div>
  );
};

export default CarRegister;

import React, { useEffect, useState } from "react";
import vehicleService from "../services/vehicleService";
import "../styles/card.css";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

const VehicleList = ({username}) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();


  const [vehicles, setVehicles] = useState([]);
  const [vehicleId, setVehicleId] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const adminParameter = username;

  const handleEdit = (id) => {
    navigate(`/edit?redirectTo=edit&id=${id}`);
  };

  const handleDelete = (id) => {
    navigate(`/delete?id=${id}`);
  };
  const fetchVehicles = async () => {
    try {
      const data = await vehicleService.getVehicles();
      const sortedVehicles = data.sort((a, b) => a.valor - b.valor);
      setVehicles(sortedVehicles);
    } catch (error) {
      console.error("Erro ao obter os veículos:", error);
    }
  };

  useEffect(() => {
    const expiresAt = localStorage.getItem("expiresAt");
    if (new Date(expiresAt) >= Date.now()) {
      setIsAdmin(true);
    } 
    fetchVehicles()
  }, []);

  return (
    <>
      <h2 className="login-title">Lista de Veículos</h2>

      <div className="card-container">
        {vehicles.map((vehicle) => (
          <div className="card" key={vehicle.id}>
            <img src={vehicle.foto} alt={vehicle.nome} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{vehicle.nome}</h3>
              <p className="card-details">
                <span>Marca:</span> {vehicle.marca}
              </p>
              <p className="card-details">
                <span>Modelo:</span> {vehicle.modelo}
              </p>
              <p className="card-details">
                <span>Preço:</span> R$ {vehicle.valor}
              </p>
              {isAdmin && (
                <div className="card-buttons">
                  <Link to={`/edit?redirectTo=edit&id=${vehicle.id}`} className="button edit-button">
                    Editar
                  </Link> 
                  <Link to={`/delete?redirectTo=delete&id=${vehicle.id}`} className="button delete-button">
                    Deletar 
                   </Link> 
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VehicleList;

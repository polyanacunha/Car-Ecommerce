import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/edit.css";
import vehicleService from "../services/vehicleService";

const Edit = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(null);
  const [vehicle, setVehicle] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [foto, setFoto] = useState(null);
  let [searchParams] = useSearchParams();

  const syncVehicleWithId = async () => {
    const token = localStorage.getItem("token");
    const expiresAt = new Date(localStorage.getItem("expiresAt")).getTime();
    const vehicleId = searchParams.get("id");

    if (token != null && expiresAt >= Date.now()) {
      try {
        const vehicleData = await vehicleService.getVehicleById(
          vehicleId,
          token
        );
        setLogged(true);
        setVehicle(vehicleData);
        setName(vehicleData.nome);
        setBrand(vehicleData.marca);
        setModel(vehicleData.modelo);
        setPrice(vehicleData.valor);
        setFoto(vehicleData.foto);
      } catch (error) {
        console.error("Error fetching vehicle:", error);
        navigate(`/login?redirectTo=edit&id=${vehicleId}`);
      }
    } else {
      navigate(`/login?redirectTo=edit&id=${vehicleId}`);
      setLogged(false);
    }
  };
  useEffect(() => {
    return syncVehicleWithId();
  }, []);
  useEffect(() => {}, [vehicle]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleEdit = (id) => {
    navigate(`/vehicleList`);
    alert("salvo com sucesso");
  };

  return (
    <div className="edit-container">
      {logged ? (
        <>
          <h3 className="edit-title">Editar Carro</h3>
          <hr className="edit-divider" />
          <div className="row">
            <div className="col-md-4">
              <form className="edit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="control-label">Nome</label>
                  <input
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="control-label">Marca</label>
                  <input
                    className="form-control"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  <label className="control-label">Modelo</label>
                  <input
                    className="form-control"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                  <label className="control-label">Preço</label>
                  <input
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <span className="text-danger"></span>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Save"
                    className="edit-button btn btn-primary"
                    onClick={() => handleEdit()}
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Edit;
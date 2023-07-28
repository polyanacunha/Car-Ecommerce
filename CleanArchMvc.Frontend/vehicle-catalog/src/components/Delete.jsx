import React, { useEffect, useState } from "react";
import "../styles/delete.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import vehicleService from "../services/vehicleService";

const Delete = (props) => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(null);
  const [vehicle, setVehicle] = useState([]);
  let [searchParams] = useSearchParams();
  const DeleteVehicleById = async () => {
    const token = localStorage.getItem("token");
    const expiresAt = new Date(localStorage.getItem("expiresAt")).getTime();
    const vehicleId = searchParams.get("id");

    if (token != null && expiresAt >= Date.now()) {
      try {
        const vehicleData = await vehicleService.deleteVehicle(
          vehicleId,
          token
        );
        setLogged(true);
        setVehicle(vehicleData);
      } catch (error) {
        console.error("error deleting vehicle", error);
        navigate(`/login?redirectTo=delete&id=${vehicleId}`);
      }
    } else {
      navigate(`/login?redirectTo=delete&id=${vehicleId}`);
      setLogged(false);
    }
  };
  useEffect(() => {
    DeleteVehicleById();
  }, []);
  useEffect(() => {}, [vehicle]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleDeleted = (id) => {
    navigate(`/vehicleList`);
    alert("deletado com sucesso");
  };
  const handleBackToList = (id) => {
    navigate(`/vehicleList`);
  };
  return (
    <div className="delete-container">
      {logged ? (
        <>
          <h3 className="delete-title">Delete Product</h3>
          <h4 className="delete-message">
            Are you sure you want to delete this?
          </h4>
          <div>
            <hr className="delete-divider" />
            <form className="delete-form" onSubmit={handleSubmit}>
              <button
                type="submit"
                className="delete-button"
                onClick={() => handleDeleted()}
              >
                Delete
              </button>
              <button
                className="edit-button"
                onClick={() => handleBackToList()}
              >
                Back to List
              </button>
            </form>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Delete;

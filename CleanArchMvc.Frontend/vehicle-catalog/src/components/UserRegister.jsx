import React, { useEffect, useState } from "react";
import "../styles/userRegister.css"; 
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import userService from "../services/userService";


export default function UserRegister() {
  const navigate = useNavigate();
  const [id, setId] = useState(1000);
  const [userNameRegister, setUserNameRegister] = useState("");
  const [password, setPassword] = useState("");

    const CreateNewUser = async () => {
      const userData = {
        id: id,
        userNameRegister: userNameRegister,
        password: password,
      };
       try {
        const response = await userService.createNewUser(
          userData
        );
        setId((prevId) => prevId + 1);
       } catch(error){
        console.error("Erro na requisição de criar novo usuário:", error);
        navigate(`/userRegister`);
       }

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleBackToList = () => {
    navigate(`/vehicleList`);
  };
  return (
    <div className="user-register-container">
      <form className="user-register-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Register User</h1>
        <div className="form-group">
          <input
                htmlFor="id" 
                id="id"
                type="hidden"
                className="form-input"
                value={id}
                readOnly
              />
          <label htmlFor="userName" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-input"
            value={userNameRegister}
            onChange={(e) => setUserNameRegister(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input id="password"
           type="password" 
           className="form-input" 
           value={userNameRegister}
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="form-input"
           value={password}
           onChange={(e) => userNameRegister(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button className="form-button btn btn-primary"
          onClick={() => {
                  CreateNewUser();
                  handleBackToList();
                }}>Registrar</button>
          <button className="form-button btn btn-outline-secondary">
            Return
          </button>
        </div>
      </form>
    </div>
  );
}
}

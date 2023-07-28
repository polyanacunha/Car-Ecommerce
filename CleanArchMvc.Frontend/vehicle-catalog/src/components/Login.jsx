import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/login.css";
import authService from "../services/authService";

const Login = ({ updateUserName }) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  useEffect(() => {
    setRedirectTo(searchParams.get("redirectTo"));
  }, []);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (username, password) => {
    try {
      const { token, expiration } = await authService.login(username, password);
      localStorage.setItem("token", token);
      localStorage.setItem("expiresAt", expiration);
      const vehicleId = searchParams.get("id");
      redirectTo
        ? navigate(`/${redirectTo}${vehicleId != null ? "?id=" + vehicleId : ''}`)
        : navigate("/vehicleList");
    } catch (error) {
      alert("Usuário ou Senha incorretos");
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-input"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

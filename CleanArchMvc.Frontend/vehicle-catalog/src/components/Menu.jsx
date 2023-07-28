import React, {useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

import '../styles/menu.css';

export default function Menu() {
  const navigate = useNavigate();
  const[nav, setNav] = useState(false);
  const handleCarRegisterClick = (id) => {
    navigate(`/carRegister`);
  };

  const handleNav = () => {
    setNav(!nav)
  }
  function handleCadastroClick() {
    window.location.href = "/cadastre-se";
  }
  function handleLoginClick() {
    window.location.href = "/login";
  }
  function handleCardAdminClick() {
    window.location.href = "/card";
  }
  function handleCardUserClick() {
    window.location.href = "/cardUser";
  }
  const handleHome = () => {
    navigate(`/home`);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="menu-principal container-fluid">
        <h1 onClick={() => handleHome()}>Voltus</h1>
                
        <div className="menu-principal collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              onClick={handleCarRegisterClick}
              className="btn"
              type="submit"
            >
              Registre novo carro
            </li>
            <li
              onClick={handleCardUserClick}
              className="btn "
              type="submit"
            >
              Ver carros user
            </li>
          </ul>
          <form className=" formd -flex">
            <li
              onClick={handleLoginClick}
              className="btn "
              type="submit"
            > Login 
            </li>
          </form>
        </div>
      </div>
      <div onClick={handleNav}>
        {!nav ? <AiOutlineMenu  size={20}/> : <AiOutlineClose size={20}/>}
        
        <div/>
        <div className={`{ menu ${! nav ? 'closed' : 'open' }`}>
          <h1>VOLTUS</h1>
          <ul className="pt-24">
          <li onClick={handleCarRegisterClick} className="p-4" type="submit" >Registre novo carro</li>
          <li onClick={handleCardUserClick} className="p-4" type="submit">Ver carros </li>
          <li onClick={handleLoginClick} className="p-4" type="submit">Login</li>
            <li className="p-4"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

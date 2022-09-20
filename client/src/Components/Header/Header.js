import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Images/Logo_Camisa_Blanco.png';
import './Header.css';

const Header = () => {
  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} alt="Camisas" /> {/*Licença da imagem "alt"*/}
      </Link>
      <Link to="/categoria">
        categoria
      </Link>
    </nav >
  )
}

export default Header
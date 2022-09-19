import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../Images/Logo_Camisa_Blanco.png'

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
import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
//Precisamos importar o FontAwesome ou qualquer outro para inserir o ícone
import { NavItens } from "./NavItens";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <link to="/" className="navbar-logo">
          CWJG sua LojaOn-line
        </link>
        <ul>
            {NavItens.map(item =>{
                <li key ={item.id} className={item.NameD}></li>
            })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

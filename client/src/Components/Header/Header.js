import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
   } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
  return (
    <nav className="menu">
      <Link className="logo" to="/">
        <img src="Logo_Camisa_Blanco_m.png" alt="Camisas" /> {/*Licença da imagem "alt"*/}
      </Link>

      <ul className='list'>
        <li>
          <Link to="/elas">
            <p>Elas</p>
          </Link>
        </li>
        <Link to="/eles">
            <p>Eles</p>
          </Link>
        <li>
          <div id="CartShopping" value="produtosCart">
            <Button variant="dark" size="sm">
              <FontAwesomeIcon icon={faShoppingCart} /></Button>
          </div>
        </li>
      </ul>
    </nav >
  )
}

export default Header;
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSun,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
  return (
    <nav className="menu"> {/*"button-painel"*/}
      

        <Link className="logo" to="/">
          <img src="Logo_Camisa_Blanco.png" alt="Camisas" />
        </Link>

        <ul className='list'>
          <li>
            <Link to="/">
              <Button variant="dark">
                <FontAwesomeIcon icon={faHouse} /></Button>
            </Link>
          </li>
          <li>
            <Link to="/listaprodutos">
              <Button variant="dark" type='select'>Categoria</Button>
            </Link>
          </li>
          <li>
            <Link to="/paineldecontrole">
              <Button variant="dark">
                <FontAwesomeIcon icon={faSun} /></Button>
            </Link>
          </li>
          <li>
            <div id="CartShopping" value="produtosCart">
            <Button variant="dark">
              <FontAwesomeIcon icon={faShoppingCart} /></Button>
            </div>
          </li>
        </ul>

      
    </nav >
  )
}

export default Header;
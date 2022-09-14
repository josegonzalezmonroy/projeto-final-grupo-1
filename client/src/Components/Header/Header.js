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
    <nav className="menu">
        <div className="button-painel">

          <div>
          <Link to="/">
            <Button variant="dark">
              <FontAwesomeIcon icon={faHouse} />
            </Button>
          </Link>
          </div>

          <div>
          <Link to="/listaprodutos">
            <Button variant="dark" type='select'>Categoria</Button>
          </Link>
          </div>

          <div>
          <Link to="/paineldecontrole">
            <Button variant="dark">
              <FontAwesomeIcon icon={faSun} />
            </Button>
          </Link>
          </div>

          <div id="CartShopping" value="produtosCart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

        </div>
      </nav>
  )
 }

export default Header;
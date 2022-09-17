import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import {
    faTruckFast,
    faCreditCard,
    faSun 
} from "@fortawesome/free-solid-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
    <footer className='footer'>

        <ul className='promo'>
            <li id="icon">
                <FontAwesomeIcon icon={faTruckFast} />
            </li>
            <li>
                <span>Frete Grátis nas compras acima de R$ 399</span>
            </li>
            <li id="icon">
                <FontAwesomeIcon icon={faCreditCard} />
            </li>
            <li>
                <span>6X sem juros no cartão</span>
            </li>

            <li id="icon-faSun">
          <Link to="/paineldecontrole">
            <Button variant="" size="sm">
              <FontAwesomeIcon icon={faSun} /></Button>
          </Link>
          </li>
        </ul>

        <Link className="logo" to="/">
            <img src="Logo_Camisa_Blanco_p.png" alt="Camisas" />
        </Link>
        <br></br>
        <p>
            &copy; 2022
        </p>

    </footer >)
}

export default Footer
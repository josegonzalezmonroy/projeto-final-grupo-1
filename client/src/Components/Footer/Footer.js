import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faCreditCard, faGear } from "@fortawesome/free-solid-svg-icons";
import logoFooter from '../Images/Logo_Camisa_Blanco_p.png'
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
                <li>
                    <Link to="/paineldecontrole">
                        <FontAwesomeIcon icon={faGear} />
                    </Link>
                </li>
            </ul>

            <Link to="/">
                <img src={logoFooter} alt="Camisas" />
            </Link>
            <br></br>
            <p className='copy'>
                &copy; 2022
            </p>

        </footer >)
}

export default Footer
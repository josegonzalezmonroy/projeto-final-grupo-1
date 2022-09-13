import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruckFast,
    faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import './Footer.css';

const Footer = () => {
    return (<footer className='footer'>

        <ul className='promo'>
            <li>
                <FontAwesomeIcon icon={faTruckFast} />
            </li>
            <li>
                <span>Frete Grátis nas compras acima de R$ 399</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faCreditCard} />
            </li>
            <li>
                <span>6X sem juros no cartão</span>
            </li>
        </ul>

        <p>
            <span>CAMISAS</span> &copy; 2022
        </p>

    </footer >)
}

export default Footer
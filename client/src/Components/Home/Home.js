import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import videoShirt from '../../assets/Clothing.mp4';
import './Home.css'

const Home = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoShirt} autoPlay loop muted />
            <div className='content'>
                <h1>Seja muito <span> Bem-vind@</span></h1>
                <h2>Comece uma <em>Nova Aventura entre Camisas</em> agora mesmo!</h2>
                <Link to="/listaprodutos">
                    <Button variant="light" size="sm" type='select'>Vamos Lá!</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home
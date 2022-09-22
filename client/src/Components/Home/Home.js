import React from 'react';
import { Link } from 'react-router-dom';
import videoShirt from '../../assets/Clothing.mp4';
import './Home.css'

const Home = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoShirt} autoPlay loop muted />
            <div className='content'>
                <h1 className='titulo' >Seja muito <span> Bem-vind@</span></h1>
                <h2 className='aventura'>Comece uma <em>Nova Aventura entre Camisas</em> agora mesmo!</h2>
                <Link className="vamos" to="/listaprodutos">
                   Vamos Lá!
                </Link>
            </div>
        </div>
    )
}

export default Home
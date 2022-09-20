import React from 'react';
import { Link } from "react-router-dom";
import ela from '../../Images/Categoria/Ela.jpg';
import ele from '../../Images/Categoria/Ele.jpg';
import './Categoria.css';


const Categoria = () => {
    return (
        
        <div className="container__box">
            <Link className='box' to="/elas">
                <img src={ela} alt="ela" />
            </Link>
          
            <Link className='box' to="/eles">
                <img src={ele} alt="ele" />
            </Link>
        </div>
        
    )
}

export default Categoria

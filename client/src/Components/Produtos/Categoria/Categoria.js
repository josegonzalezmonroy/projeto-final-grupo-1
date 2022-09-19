import React from 'react';
import { Link } from "react-router-dom";
import ela from '../../Images/Categoria/Ela.jpg';
import ele from '../../Images/Categoria/Ele.jpg';
import './Categoria.css';


const Categoria = () => {
    return (
        <div className="cat">
            <Link to="/elas">
                <img src={ela} alt="ela" />
            </Link>
            <Link to="/eles">
                <img src={ele} alt="ele" />
            </Link>
        </div>
    )
}

export default Categoria

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import ButtonIcon from "../Button/buttons";
const Header=({title}) =>(
    
<header>
    <h1 className='font-weigt-bold'>{title?title:""}</h1>
    <div className = "button-add">
        <ButtonIcon icon="shopping-cart" />
    </div>
</header>
);


export default Header;
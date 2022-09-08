import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';

const Header=({title}) =>(
    
<header>
    <h1 className='font-weigt-bold'>{title?title:""}</h1>
</header>
);


export default Header;
import { Icon } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ButtonIcon(props) {
    return(
        <button onClick={props.onClick} type={props.type} className="buttom" >
            <AddShoppingCartIcon>{props.icon}</AddShoppingCartIcon>
        </button>
    )
}
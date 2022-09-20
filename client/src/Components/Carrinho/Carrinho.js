import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Button } from "react-bootstrap";
import "./Carrinho.css";
import { Link } from "react-router-dom";

export default function Carinho() {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <>
      <nav className="menu">
        <div className="produtcar">
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </nav>

      <div className="botao-remov">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
          }}
        >
          Apagar do carinho
         
        </Button>

        <Link to="/Pagamento">
          <div className="Pagamento">
            <Button size="sm" variant="dark">
              Compre agora
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
}

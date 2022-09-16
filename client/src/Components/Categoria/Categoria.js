import React from "react";
import "./Categoria.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categoria = () => {
  return (
    <div>
      <h1>Categoria</h1>
      <div className="Categoria">
        <div className="ButtonElas">
          <Link to="/produtoelas">
            <Button variant="dark">Para Elas</Button>
          </Link>
        </div>
        <div className="ButtonEles">
          <Link to="/ProdutoEles">
            <Button variant="dark">Para Eles</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categoria;

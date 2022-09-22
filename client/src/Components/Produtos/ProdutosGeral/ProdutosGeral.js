import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./ProdutosGeral.css";

export default function ProdutosGeral() {
  const [produtos, setProdutos] = useState([]);

  const host = 'http://localhost:3001/'

  useEffect(() => {
    fetch(host)
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  });

  return (
    <div>
      <h3 className="butique">Butique</h3>
      <div className="cards vejaProdutos">
        {produtos.map((produto) => {
          return (
            <div className="osCards" key={produto._id}>
              <Card className="Card">
                <Card.Img
                  variant="top"
                  src={host + produto.patch} />
                <Card.Body>
                  <Card.Title className="cart">{produto.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    R$ {produto.preco}
                  </Card.Subtitle>
                  <Link className="detalhes" to={`/detalhes/${produto._id}`}>
                    Ver Detalhes
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}

      </div>
    </div>
  );
}

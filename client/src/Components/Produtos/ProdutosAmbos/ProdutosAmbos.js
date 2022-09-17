import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./ProdutosAmbos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const link = window.location.pathname;
  const categoria = link.substring(1, link.length)

  const host = 'http://localhost:3001/'
  const rota = 'categoria/'

  useEffect(() => {
    fetch(host+rota+categoria)
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  });

  return (
    <div>
      <h2>{`Produtos para ${categoria}`}</h2>

      <div className="cards">
        {produtos.map((produto) => {
          return (
            <div className="card-item" key={produto._id}>
              <Card className="Card">
                <Card.Img
                  variant="top"
                  src={host + produto.patch} />
                <Card.Body>
                  <Card.Title>{produto.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    R$ {produto.preco}
                  </Card.Subtitle>
                  <Link to={`/detalhes/${produto._id}`}>
                    <div className="produtoelas">
                      <Button
                        size="sm"
                        variant="dark">Ver Detalhes
                      </Button>
                    </div>
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

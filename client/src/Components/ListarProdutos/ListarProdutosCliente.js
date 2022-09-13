import React from "react";
import { useState, useEffect, createContext } from "react";
import { Button, Card } from "react-bootstrap";
import "./ListarProdutos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Rating, Box } from "@mui/material";

export default function ListarProdutosCliente() {
  const [produtos, setProdutos, produtosCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  }, []);

  const [ratingValue, setRatingValue] = React.useState(0);

  return (
    <div>
      <h2 className="font-weight-bold text-center">Lista de Produtos</h2>
      <div className="cards">
        {produtos.map((produto) => {
          return (
            <div className="card-item" key={produto._id}>
              <Card style={{ width: "12.75rem" }}>
                <Card.Img
                  variant="top"
                  src="https://22825.cdn.simplo7.net/static/22825/sku/camisas-estampadas-camisa-estampada-mundo-paralelo--p-1595723319359.jpg"
                />
                <br></br>
                <div style={{ display: "block", padding: 30 }}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name="Rating Label"
                      value={ratingValue}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                      }}
                    />
                  </Box>
                </div>
                <Card.Body>
                  <Card.Title>{produto.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    R$ {produto.preco}
                  </Card.Subtitle>
                  <Card.Text>{produto.descricao}</Card.Text>

                  <Button variant="dark">
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

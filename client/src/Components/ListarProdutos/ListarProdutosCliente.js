import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "./ListarProdutos.css";
import { Rating, Box, ButtonGroup, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function ListarProdutosCliente() {
  const [produtos, setProdutos] = useState([]);
  const [ratingValue, setRatingValue] = React.useState(0); //configurando as estrelinhas da alição dos clientes
  //Carinho de compras
  const [itemCount, setItemCount] = React.useState(1);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  }, []);

  return (
    <div>
      <div className="row">
        <h2 className="font-weight-bold text-center">Lista de Produtos</h2>
        <div
          style={{
            display: "flex",
            padding: 30,
            marginLeft: 800,
            marginTop: -65,
          }}
        >
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
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
                {/*Estrelas de avaliação */}
                <div style={{ display: "block", padding: 10 }}>
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="Rating Label"
                      value={ratingValue}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                      }}
                    />
                  </Box>
                </div>
                {/*Nome, preço e descrição dos produtos */}
                <Card.Body>
                  <Card.Title>{produto.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    R$ {produto.preco}
                  </Card.Subtitle>
                  <Card.Text>{produto.descricao}</Card.Text>
                  <p>
                    <strong>
                      <i>Frete grátis</i>
                    </strong>
                  </p>

                  {/*Botões de adicionar ou remover Carinho de compras*/}
                  <div
                    style={{
                      display: "block",
                      padding: 1,
                      alignItems: "center",
                      marginLeft: -5,
                    }}
                  >
                    <div>
                      <ButtonGroup>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="xx-small" />
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            setItemCount(itemCount + 1);
                          }}
                        >
                          <AddIcon fontSize="xx-small" />
                        </Button>
                        <Button variant="dark">Comprar</Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

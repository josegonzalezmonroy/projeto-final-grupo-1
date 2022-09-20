import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating, Box, ButtonGroup, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Detalhes.css";

export default function Detalhes() {
  const [produtos, setProdutos] = useState([]);
  const [ratingValue, setRatingValue] = React.useState(0); //configurando as estrelinhas da avaliação dos clientes
  //Carinho de compras
  const [itemCount, setItemCount] = React.useState(1);

  const host = "http://localhost:3001/";

  useEffect(() => {
    fetch(host + id)
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  });

  const urlId = window.location.pathname;
  const id = urlId.substring(10, urlId.length); //Para pegar um elemento e seus detalhes

  return (
    <>
      <nav className="menu">
        <div className="produtcar">
          <Link to="/carrinho">
            <Badge color="secondary" badgeContent={itemCount}>
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
      </nav>

      <div className="vazio">
        <div className="align-title">
          <h2 className="subt">Detalhes do produto</h2>
        </div>
        <div className="cards">
          {produtos.map((produto) => {
            return (
              <div key={produto._id} className="central">
                <div className="card-item">
                  <div className="img-card">
                    <Card.Img
                      className="card-image"
                      variant="top"
                      src={host + produto.patch}
                    />
                  </div>
                </div>
                {/*Nome, preço e descrição dos produtos */}
                <div className="card-body">
                  <Card.Body>
                    {/*Estrelas de avaliação */}
                    <div className="estrelas">
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

                    <div className="card-nome">
                      <Card.Title>{produto.nome}</Card.Title>
                    </div>

                    <div className="card-preco">
                      <Card.Subtitle>R$ {produto.preco}</Card.Subtitle>
                    </div>
                    <div className="card-texto">
                      <Card.Text>{produto.descricao}</Card.Text>
                    </div>
                    <div className="card-cor">{produto.cor}</div>
                    <div className="card-tamanho">{produto.tamanho}</div>

                    {/*Botões de adicionar Carinho de compras*/}
                    <div
                      style={{
                        display: "block",
                        padding: 1,
                        alignItems: "center",
                        marginLeft: -5,
                      }}
                    >
                      <div className="botoes">
                        <ButtonGroup className="grupo-botoes">
                          <div className="botao-mais">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                setItemCount(itemCount + 1);
                              }}
                            >
                              Adicionar ao carrinho
                            </Button>
                          </div>
                          <Link to="/Pagamento">
                            <div className="Pagamento">
                              <Button size="sm" variant="dark">
                                Comprar
                              </Button>
                            </div>
                          </Link>
                        </ButtonGroup>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

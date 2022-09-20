import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
//import "./ListarProdutos.css"; bla bla bla
import { Rating, Box, ButtonGroup, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import "./Detalhes.css";
//ola
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
    <div className="vazio">
      <div className="align-title">
        <h2 className="font-weight-bold text-center">Detalhes do produto</h2>
        <div
          style={{
            //display: "flex",
            //padding: 30,
            //marginLeft: 800,
            marginTop: 12,
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
            
            <div key={produto._id} className="central">
              <div className="card-item">
                <div className="img-card">
                  <Card.Img className="card-image" variant="top" src={host + produto.patch} />
                </div>
                </div>
                {/*Nome, preço e descrição dos produtos */}
                <div className="card-body">
                  <Card.Body >
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
                                      
                    
                    <div  className="card-nome">
                      <Card.Title>
                        {produto.nome}
                      </Card.Title>
                    </div>
                    
                    <div className="card-preco">
                      <Card.Subtitle >
                        R$ {produto.preco}
                      </Card.Subtitle>
                    </div>
                    <div className="card-texto">
                      <Card.Text>
                        {produto.descricao}
                      </Card.Text>
                    </div>
                    <div className="card-cor">
                      {produto.cor}
                    </div>
                    <div className="card-tamanho">
                      {produto.tamanho}
                    </div>
                    <p className="frete">
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
                      <div className="botoes">
                        <ButtonGroup className="grupo-botoes">
                          <div className="botao-menos">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                setItemCount(Math.max(itemCount - 1, 0));
                              }}
                            >
                              <RemoveIcon fontSize="xx-small" />
                              </Button>
                          </div>
                          <div className="botao-mais">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                setItemCount(itemCount + 1);
                              }}
                            >
                            <AddIcon fontSize="xx-small" />
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
  );
}
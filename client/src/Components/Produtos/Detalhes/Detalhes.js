import { useState, useEffect, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating, Box, ButtonGroup, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useParams } from "react-router-dom";
import "./Detalhes.css";
import { CarrinhoContext } from "../../../Contexts/CarrinhoContext";

export default function Detalhes() {

  const { adicionarProduto } = useContext(CarrinhoContext)
  const { id } = useParams()
  const [produtos, setProdutos] = useState([]);
  const [ratingValue, setRatingValue] = useState(0); //configurando as estrelinhas da avaliação dos clientes
  const [itemCount, setItemCount] = useState(0);//Carinho de compras
  const host = "http://localhost:3001/";
  const [adicionadoAoCarrinho, setAdicionadoAoCarrinho] = useState(false)

  useEffect(() => {
    fetch(host + id)
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  }, [id]);

  const adicionarAoCarrinho = (produto) => {
    setItemCount(itemCount + 1);
    adicionarProduto(produto, 1)
    setAdicionadoAoCarrinho(true)
  }
  console.log(adicionadoAoCarrinho)
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
          <h3 className="butique">Detalhes do produto</h3>
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
                          onChange={(newValue) => {
                            setRatingValue(newValue);
                          }}
                        />
                      </Box>
                    </div>

                    <div className="center">
                      <div className="linha"></div>
                      <div className="card-nome">
                        <Card.Title className="card-title">
                          {produto.nome}
                        </Card.Title>
                      </div>
                      <div className="linha"></div>
                      <div className="card-preco">
                        <Card.Subtitle >
                          R$ {produto.preco}
                        </Card.Subtitle>
                      </div>
                      <div className="linha"></div>
                      <div className="card-texto">
                        <Card.Text className="card-text">
                          {produto.descricao}
                        </Card.Text>
                      </div>
                      <div className="linha"></div>
                      <div className="card-cor">
                        Cor: {produto.cor}
                      </div>
                      <div className="linha"></div>
                      <div className="card-tamanho">
                        Tamanho: {produto.tamanho}
                      </div>
                      <div className="linha"></div>
                     
                    </div>
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
                          <div className="botao-mais">
                            {!adicionadoAoCarrinho ?
                              <Button
                                className="botao"
                                variant="dark"
                                size="sm"
                                onClick={() => adicionarAoCarrinho(produto)}
                              >
                                Adicionar ao carrinho
                              </Button> :
                              <Button
                                className="botao"
                                variant="secondary"
                                size="sm"
                              >
                                Adicionado ao carrinho
                              </Button>
                            }
                          </div>
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
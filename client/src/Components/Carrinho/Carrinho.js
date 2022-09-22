import { useState, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Button, Card, Modal } from "react-bootstrap";
import "./Carrinho.css";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../../Contexts/CarrinhoContext";

export default function Carrinho() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { carrinho, adicionarProduto, removerProduto, limparCarrinho } =
    useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState(1);

  const host = "http://localhost:3001/";

  const produtosCarrinho = carrinho.sort((a, b) => {
    //funcao para organizar os produtos do carrinho pelo id
    return a._id.localeCompare(b._id);
  });

  const diminuirQuantidade = (produto) => {
    setQuantidade(quantidade - 1);
    adicionarProduto(produto, quantidade - 1);
  };

  const aumentarQuantidade = (produto) => {
    setQuantidade(quantidade + 1);
    adicionarProduto(produto, quantidade + 1);
  };

  return (
    <>
      <nav className="menu">
        <div className="produtcar">
          <Badge color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </div>
      </nav>
      <div className="carrinho">
        <div className="produtos">
          {produtosCarrinho.map((produto) => {
            return (
              <div key={produto._id}>
                <Card className="card-carrinho">
                  <Link to={`/detalhes/${produto._id}`}>
                    <Card.Img
                      className="imagem-carrinho"
                      variant="top"
                      src={host + produto.patch}
                    />
                  </Link>
                  <Card.Body className="corpo-carrinho">
                    <Card.Title className="cart titulo-carrinho">
                      {produto.nome}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted preco-carrinho">
                      R$ {produto.preco}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted quantidade-carrinho">
                      Quantidade: {produto.quantidade}
                    </Card.Subtitle>
                    <div className="items-carrinho">
                      <Button
                        size="sm"
                        variant="dark"
                        onClick={() => {
                          diminuirQuantidade(produto);
                        }}
                      >
                        -
                      </Button>

                      <Button
                        size="sm"
                        variant="dark"
                        onClick={() => {
                          aumentarQuantidade(produto);
                        }}
                      >
                        +
                      </Button>

                      <div className="Pagamento">
                        <Link to="/pagamento">
                          <Button size="sm" variant="dark">
                            Compre agora
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <Button
                      className="btn-rem"
                      size="sm"
                      variant="dark"
                      onClick={() => removerProduto(produto._id)}
                    >
                      Remover
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="botao-remov">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            handleShow();
          }}
        >
          Esvaziar carrinho
        </Button>

        {/*} <Link to="/pagamento">
                          <Button size="sm" variant="dark">
                            Compre agora
                          </Button>
        </Link> */}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja excluir todos os items do carrinho?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
<<<<<<< HEAD
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              limparCarrinho();
            }}
          >
            Confirmar
          </Button>
=======
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="dark" onClick={()=>{
          handleClose()
          limparCarrinho()}}>
          Confirmar
        </Button>
>>>>>>> 70537e1d5e89d9119174a6a73fd5be63f003aff4
        </Modal.Footer>
      </Modal>
    </>
  );
}

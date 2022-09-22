import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./ProdutosGeral.css";

export default function ProdutosGeral() {
  const [produtos, setProdutos] = useState([]);
  const [buscarProdutos, setBuscarProdutos] = useState("")

  const host = 'http://localhost:3001/'

  useEffect(() => {
    fetch(host)
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  }, []);

  const produtosOrganizados = produtos.sort((a, b) => {//variavel para organizar os produtos por ordem alfabetica
    return a.nome.localeCompare(b.nome)
  }
  )

  const produtosFiltrados = produtosOrganizados.filter(//filtrar os produtos pela busca
    (itens) => itens.nome.toLowerCase().includes(buscarProdutos.toLowerCase()))

  return (
    <div>
      <h3 className="butique">Butique</h3>
      <label className="lupa"><FontAwesomeIcon icon={faMagnifyingGlass} />
      <input className="quadro" type='text' placeholder="Procurar" value={buscarProdutos} onChange={(e) => {
        setBuscarProdutos(e.target.value)
      }} /></label><br />
      
      <div className="cards vejaProdutos">
        {produtosFiltrados.map((produto) => {
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

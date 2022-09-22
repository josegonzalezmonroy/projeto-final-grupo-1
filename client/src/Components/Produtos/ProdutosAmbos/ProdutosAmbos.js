import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import "./ProdutosAmbos.css";

export default function Produtos() {
  
  const{categoria}=useParams()
  const [produtos, setProdutos] = useState([]);
  const [buscarProdutos, setBuscarProdutos] = useState("")


  const host = 'http://localhost:3001/'
  const rota = 'categoria/'

  useEffect(() => {
    fetch(host + rota + categoria)
      .then((response) => response.json())
      .then((listaProdutos) => setProdutos(listaProdutos));
  }, [categoria]);

  const produtosOrganizados = produtos.sort((a, b) => {//variavel para organizar os produtos por ordem alfabetica
    return a.nome.localeCompare(b.nome)
  }
  )

  const produtosFiltrados = produtosOrganizados.filter(//filtrar os produtos pela busca
    (itens) => itens.nome.toLowerCase().includes(buscarProdutos.toLowerCase()))

  return (
    <div>
      <label>Buscar <input type='text' placeholder="Digite o nome do produto" value={buscarProdutos} onChange={(e) => {
        setBuscarProdutos(e.target.value)
      }} /></label><br />
      <h3 className="butique">{`Butique  ${categoria}`}</h3>
      <div className="cards elesElas">
        {produtosFiltrados.map((produto) => {
          return (
            <div className="osCards" key={produto._id}>
              <Card className="Card">
                <Card.Img
                  variant="top"
                  src={host + produto.patch} />
                <Card.Body>
                  <Card.Title className="tituloCard">{produto.nome}</Card.Title>
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

import React from "react";
import "./App.css";
//import Inicio from "./Pages/Cliente/Templeites/indexUI";//definido mas nunca usado
//import Rotas from "./Routes";
import Header from "./Components/Header/Index";
import CriarProduto from "./Components/CriarProduto/CriarProduto";
import ListarProdutos from "./Components/ListarProdutos/ListarProdutos";

export default function App() {
  return (
    <div className="container">
      < Header title="CGJW Loja de Produtos" />
      <br></br>
      {/*<Inicio />*/}
      {/*<Rotas />*/}
      {/*<ProdutosBox />*/}
      <div className="row">
        <div className="col-md-6">
          <h2 className="font-weight-bold text-center">Cadastrar Produtos</h2>
          <CriarProduto />
        </div>
        <div className="col-md-6">
          <h2 className="font-weight-bold text-center">Lista de Produtos</h2>
          <ListarProdutos />
        </div>
      </div>
    </div>
  );
}


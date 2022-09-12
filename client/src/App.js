import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Components/Header/Index";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosCliente from "./Components/ListarProdutos/ListarProdutosCliente";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
//import Cart from "./Components/Context/Cart";
//import CartProvider from "./Context/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSun,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <div className="button-painel">
          <Link to="/">
            <Button variant="light">
              <FontAwesomeIcon icon={faHouse} />
            </Button>
          </Link>
          <Link to="/listaprodutos">
            <Button variant="light">Categoria</Button>
          </Link>
          <Link to="/paineldecontrole">
            <Button variant="light">
              <FontAwesomeIcon icon={faSun} />
            </Button>
          </Link>

          <div className="CartShopping" value="produtosCart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </nav>
      <Header title="CGJW Loja de Produtos" />

      <Routes>
        <Route path="/listaprodutos" element={<ListarProdutosCliente />} />
        <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
        <Route
          path="/paineldecontrole/cadastrarproduto"
          element={<CadastrarProduto />}
        />
        <Route path="/:id" element={<EditarProduto />} />
        {/*} <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

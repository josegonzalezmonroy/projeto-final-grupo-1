import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosCliente from "./Components/ListarProdutos/ListarProdutosCliente";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
//import Cart from "./Components/Context/Cart";
//import CartProvider from "./Context/Cart";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      
      <Header/>

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

      <Footer/>
      
    </BrowserRouter>
  );
}

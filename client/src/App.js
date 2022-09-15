import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosCliente from "./Components/ListarProdutos/ListarProdutosCliente";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
//import Cart from "./Components/Context/Cart";
//import CartProvider from "./Context/Cart";
import Pagamento from "./Components/ListarProdutos/Pagamentos/Pagamento";
import Categoria from "./Components/Categoria/Categoria"
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listaprodutos" element={<ListarProdutosCliente />} />
        <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
        <Route
          path="/paineldecontrole/cadastrarproduto"
          element={<CadastrarProduto />}
        />
        <Route path="/:id" element={<EditarProduto />} />
       <Route path="/Pagamento" element={<Pagamento />} /> 
       <Route path="/categoria" element={<Categoria/>} />
      </Routes>

      <Footer/>
      
    </BrowserRouter>
  );
}

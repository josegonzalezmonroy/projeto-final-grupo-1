import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
import Pagamento from "./Components/PainelDeControle/Pagamentos/Pagamento";
import Detalhes from "./Components/Produtos/Detalhes/Detalhes";
import ProdutosAmbos from "./Components/Produtos/ProdutosAmbos/ProdutosAmbos";
import ProdutosGeral from "./Components/Produtos/ProdutosGeral/ProdutosGeral";
import Categoria from "./Components/Produtos/Categoria/Categoria";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaprodutos" element={<ProdutosGeral />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/eles" element={<ProdutosAmbos />} />
        <Route path="/elas" element={<ProdutosAmbos />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
        <Route path="/paineldecontrole/cadastrarproduto" element={<CadastrarProduto />} />
        <Route path="/:id" element={<EditarProduto />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

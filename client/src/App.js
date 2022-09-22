import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
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
import Carrinho from "./Components/Carrinho/Carrinho";
import CarrinhoProvider from "./Contexts/CarrinhoContext";

export default function App() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listaprodutos" element={<ProdutosGeral />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/categoria" element={<Categoria />} />
          <Route path="/categoria/:categoria" element={<ProdutosAmbos />} />
          <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
          <Route path="/paineldecontrole/cadastrarproduto" element={<CadastrarProduto />} />
          <Route path="/:id" element={<EditarProduto />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

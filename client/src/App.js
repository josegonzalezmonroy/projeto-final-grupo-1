import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
import Pagamento from "./Components/ListarProdutos/Pagamentos/Pagamento";
import Categoria from "./Components/Categoria/Categoria";
import ProdutoElas from "./Components/Categoria/ProdutoElas/ProdutoElas";
import ProdutoEles from "./Components/Categoria/ProdutoEles/ProdutoEles";
import DetalhesElas from "./Components/Categoria/Detalhes/DetalhesElas";
import DetalhesEles from "./Components/Categoria/Detalhes/DetalhesEles";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaprodutos" element={<ProdutoElas />} />
        <Route path="/detalhes/:id" element={<DetalhesElas />} />
        

        <Route path="/produtoelas" element={<ProdutoElas />} />
        <Route path="/produtoeles" element={<ProdutoEles />} />
        <Route path="/detalheseles" element={<DetalhesEles />} />
        <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
        <Route
          path="/paineldecontrole/cadastrarproduto"
          element={<CadastrarProduto />}
        />
        <Route path="/:id" element={<EditarProduto />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

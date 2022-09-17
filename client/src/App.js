import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
import Pagamento from "./Components/PainelDeControle/Pagamentos/Pagamento";
import ProdutoElas from "./Components/Produtos/ProdutoElas/ProdutoElas";
import ProdutoEles from "./Components/Produtos/ProdutoEles/ProdutoEles";
import Detalhes from "./Components/Produtos/Detalhes/Detalhes";
import Produtos from "./Components/Produtos/Produtos Geral/Produtos";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaprodutos" element={<Produtos />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/eles" element={<ProdutoEles />} />
        <Route path="/elas" element={<ProdutoElas />} />

        <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
        <Route
          path="/paineldecontrole/cadastrarproduto"
          element={<CadastrarProduto />}
        />
        <Route path="/:id" element={<EditarProduto />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

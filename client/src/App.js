import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from "./Components/Header/Index";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosCliente from "./Components/ListarProdutos/ListarProdutosCliente";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutos/ListarProdutosPainel";
import { Button } from "react-bootstrap"

import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/"><Button variant="primary">Home</Button></Link>
                <Link to="/paineldecontrole"><Button variant="primary">Painel de controle</Button></Link>
            </nav>
            < Header title="CGJW Loja de Produtos" />

            <Routes>
                <Route path="/" element={<ListarProdutosCliente />} />
                <Route path="/paineldecontrole" element={<ListarProdutosPainel />} />
                <Route path="/paineldecontrole/cadastrarproduto" element={<CadastrarProduto />} />
            </Routes>
        </BrowserRouter>
    );
}

import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button } from "react-bootstrap"
import Header from "./Components/Header/Index";
import CadastrarProduto from "./Components/PainelDeControle/CadastrarProduto/CadastrarProduto";
import ListarProdutosCliente from "./Components/ListarProdutos/ListarProdutosCliente";
import ListarProdutosPainel from "./Components/PainelDeControle/ListarProdutosPainel/ListarProdutosPainel";
import EditarProduto from "./Components/PainelDeControle/EditarProduto/EditarProduto";
import ButtonIcon from "./Components/buttons/button";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <nav class="menu">
                <div class="button-painel">
                    <Link to="/"><Button variant="light">Home</Button></Link>
                    <Link to="/listaprodutos"><Button variant="light">Categoria</Button></Link>           
                    <Link to="/paineldecontrole"><Button variant="light">Painel de controle</Button></Link>
                </div>
                <div className="button-add">
                    <ButtonIcon icon="shopping-cart" />
                </div>
            </nav>
            < Header title="CGJW Loja de Produtos" />

            <Routes>
                <Route path="/listaprodutos" element={<ListarProdutosCliente />} />
                <Route path="/paineldecontrole" element={<ListarProdutosPainel />}/>
                <Route path="/paineldecontrole/cadastrarproduto" element={<CadastrarProduto />} />
                <Route path="/:id" element={<EditarProduto/>} />
            </Routes>
        </BrowserRouter>
    );
}

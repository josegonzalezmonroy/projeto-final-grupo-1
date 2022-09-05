import React from "react";
import { BrowserRouter, Switch,  Route } from 'react-dom';

//Painel
import Paineldecontrole from "./Pages/Autenticao/Paineldecontrole";

//importei produtos
import Produtos from './Pages/Autenticao/Produtos';
import CadastrarProdutos from "./Pages/Autenticao/Produtos/Cadastro";
import EditarProdutos from './Pages/Autenticao/Produtos/Editar';

//importei Usuário
import Usuarios from './Pages/Autenticao/Usuarios';
import CadastrarUsuarios from "./Pages/Autenticao/Usuarios/CadUs";
import EditarUsuarios from "./Pages/Autenticao/Usuarios/EditUs";

//Importei Cliente
import DetalhesProdutos from "./Pages/Cliente/Detalhprod";
import Home from "./Pages/Cliente/indexCl";
import login from './pages/Autenticao/login';

//Fiz a importação de todas as Rotas da autenticação da nossa loja.




export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
             {/*Rotas de Cliente*/}
            <Route path="/" exact component ={Home}/>
            <Route path="/Produtos/:idProdutos" exact component={DetalhesProdutos}/>


            {/*Rotas de Autenticação*/}

            <Route path="/Autenticao" exact component ={Paineldecontrole}/>
            <Route path="/Autenticao/login" exact component ={login}/>
            <Route path="/Autenticao/Produtos" exact component ={Produtos}/>
            <Route path="/Autenticao/Produtos/Cadastro" exact component ={CadastrarProdutos}/>
            <Route path="/Autenticao/Produtos/Editar/:idUsuario" exact component ={EditarProdutos}/>

            {/*Rotas de Usuários*/}
            <Route path="/Autenticao/Usuarios" exact component ={Usuarios}/>
            <Route path="/Autenticao/Usuarios/Cadastrar" exact component ={CadastrarUsuarios}/>
            <Route path="/Autenticao/Usuarios/Editar/:idUsuarios" exact component ={EditarUsuarios}/>

        </Switch>

        </BrowserRouter>
    )
}
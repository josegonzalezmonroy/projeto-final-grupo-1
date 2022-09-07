import React, {Component} from "react";
import "./App.css";
//import Inicio from "./Pages/Cliente/Templeites/indexUI";//definido mas nunca usado
//import Rotas from "./Routes";
import Header from "./Components/Header/Index";
import ProdutosBox from "./Components/Produtos/produt";


class App extends Component {
  render(){
  return (
    <div className="container">
      < Header title= "CGJW Loja de Produtos"/>
      <br></br>
      {/*<Inicio />*/}
      {/*<Rotas />*/}
      <ProdutosBox />
         

      </div>
    
  );
}
}

export default App;

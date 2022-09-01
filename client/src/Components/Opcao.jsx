import React, { useState } from "react";
import { produtosOpcao } from "./NavItems";
import { Link } from "react-router-dom";
import "./Opcao.css";

function Opcao() {
    const [opcao, setOpcao] = useState(false);
  
    return (
      <>
        <ul
          className={opcao? "produtos-submenu clicked" : "produtos-submenu"}
          onClick={() => setOpcao(!opcao)}
        >
          {produtosOpcao.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.NameD}
                  onClick={() => setOpcao(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
  export default Opcao;
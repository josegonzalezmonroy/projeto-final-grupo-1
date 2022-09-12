{/*import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [produtos, setProdutos] = useState([]);



  function addProdutosCart(id) {
    const copyProdutos = [...produtos];

    const item = copyProdutos.find((produtos) => produtos.id === id);

    if (!item) {
      copyProdutos.push({ id: id, qtd: 1 });
    } else {
      item.qtd = item.qtd + 1;
    }

    setProdutos(copyProdutos);
  }

//apagar produtos no carinho

  function removeProdutosCart(id) {
    const copyProdutos = [...produtos];

    const item = copyProdutos.find((product) => product.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProdutos(copyProdutos);
    } else {
      const arrayFiltered = copyProdutos.filter(
        (produtos) => produtos.id !== id
      );
      setProdutos(arrayFiltered);
    }
  }
//Para limpara o carinho
  function clearCart() {
    setProdutos([]);
  }

  return (
    <CartContext.Provider
      value={{ produtos, addProdutosCart, removeProdutosCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}  */}
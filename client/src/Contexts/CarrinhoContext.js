import { createContext, useState } from 'react'

export const CarrinhoContext = createContext([])

export default function CarrinhoProvider({ children }) {

    const [carrinho, setCarrinho] = useState([])

    const adicionarProduto = (item, quantidade) => {
        const novoCarrinho = carrinho.filter(
            prod => prod._id !== item._id
        )
        novoCarrinho.push({ ...item, quantidade })
        setCarrinho(novoCarrinho)
    }

    console.log('Carrinho: ', carrinho)
    const limparCarrinho = () => setCarrinho([])//funcao para limpar o carrinho

    const estaNoCarrinho = (id) =>
        carrinho.find(
            produto => produto.id === id)
            ? true : false

    const removerProduto = (id) => {
        setCarrinho(carrinho.filter(
            produto => produto._id !== id
        ))
    }

    const funcoesCarrinho = {
        adicionarProduto,
        limparCarrinho,
        estaNoCarrinho,
        removerProduto, 
        carrinho
    }
    return (
        <CarrinhoContext.Provider value={funcoesCarrinho}>
            {children}
        </CarrinhoContext.Provider>
    )

}

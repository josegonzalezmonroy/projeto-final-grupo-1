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

    const limparCarrinho = () => setCarrinho([])//funcao para limpar o carrinho

    const removerProduto = (id) => {
        setCarrinho(carrinho.filter(
            produto => produto._id !== id
        ))
    }

    const valorTotal = () => {
        return carrinho.reduce(
            (anterior, actual) => anterior + actual.quantidade * actual.preco, 0
        )
    }

    const funcoesCarrinho = {
        adicionarProduto,
        limparCarrinho,
        removerProduto,
        valorTotal,
        carrinho
    }
    return (
        <CarrinhoContext.Provider value={funcoesCarrinho}>
            {children}
        </CarrinhoContext.Provider>
    )

}

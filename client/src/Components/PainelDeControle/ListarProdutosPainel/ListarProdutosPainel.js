import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import './ListarProdutos.css'
import { Link } from 'react-router-dom'

export default function ListarProdutosPainel() {

    const [produtos, setProdutos] = useState([])
    const host = 'http://localhost:3001/'

    useEffect(() => {
        atualizarData()
    }, [])

    const atualizarData = async () => {
        await fetch(host)
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    }

    const excluirProduto = async (id) => {

        fetch(host + id, {
            method: 'DELETE'
        }).then(setConfirmar(false))
            .then(atualizarData)
    }

    const [confirmar, setConfirmar] = useState(false)
    const [idProduto, setIdProduto] = useState()
    const [nome, setNome] = useState()
    const [imagem, setImagem] = useState()
    const [preco, setPreco] = useState()
    const [buscarProdutos, setBuscarProdutos] = useState("")

    const produtosOrganizados = produtos.sort((a, b) => {//variavel para organizar os produtos por ordem alfabetica
        return a.nome.localeCompare(b.nome)
    }
    )

    const produtosFiltrados = produtosOrganizados.filter(//filtrar os produtos pela busca
        (itens) => itens.nome.toLowerCase().includes(buscarProdutos.toLowerCase()))

    return (
        <div className="painel">
                <label>Buscar <input type='text' placeholder="Digite o nome do produto" value={buscarProdutos} onChange={(e) => {
                    setBuscarProdutos(e.target.value)
                }} /></label><br />
            <Link className="cadastro" to="/paineldecontrole/cadastrarproduto">
                Cadastrar produto
            </Link>
            <div className="cards cardsItem">
                {!confirmar ?
                    (produtosFiltrados.map((produto) => {
                        return (
                            <div className="kart" key={produto._id}>
                                <Card className="Card">
                                    <Card.Img variant="top" src={host + produto.patch}
                                    />
                                    <Card.Body>
                                        <Card.Title className="titleCart">{produto.nome}</Card.Title>
                                        <Card.Subtitle className="mb-3 mt-3 text-muted">R$ {produto.preco}</Card.Subtitle>
                                        <Card.Text>{produto.descricao}</Card.Text>
                                        <div className="alignButton">
                                            <Link to={`/${produto._id}`}>
                                                <Button className="spaceButton" variant="dark" size="sm">Editar</Button>
                                            </Link>
                                            <Button className="spaceButton" variant="secondary" size="sm" onClick={() => {
                                                setConfirmar(true)
                                                setIdProduto(produto._id)
                                                setNome(produto.nome)
                                                setImagem(host + produto.patch)
                                                setPreco(produto.preco)
                                            }}>Excluir</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                    )) :
                    <div className="confirmar">
                        <div className="conf">
                            <p><strong>Tem certeza que deseja excluir este produto?</strong></p>
                        </div>
                        <Card className="Card">
                            <Card.Img variant="top" src={imagem} />
                            <Card.Body>
                                <Card.Title>{nome}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">R$ {preco}</Card.Subtitle>

                                <div className="bot_ex">
                                    <Button variant="secondary" size="sm" onClick={() => excluirProduto(idProduto)}>Excluir</Button>
                                    <Button variant="secondary" size="sm" onClick={() => setConfirmar(false)}>Cancelar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                }
            </div>
        </div>
    )
}
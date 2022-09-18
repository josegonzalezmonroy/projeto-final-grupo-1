import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import './ListarProdutos.css'
import { Link } from 'react-router-dom'

export default function ListarProdutosPainel() {

    const [produtos, setProdutos] = useState([])
    const host = 'http://localhost:3001/'

    useEffect(() => {
        fetch(host)
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    })

    const excluirProduto = async (id) => {

        fetch(host + id, {
            method: 'DELETE'
        }).then(setConfirmar(false))
    }

    const [confirmar, setConfirmar] = useState(false)
    const [idProduto, setIdProduto] = useState()
    const [nome, setNome] = useState()
    const [imagem, setImagem] = useState()
    const [preco, setPreco] = useState()

    return (
        <div className="painel">
            <Link to="/paineldecontrole/cadastrarproduto">
                <div className="cadastro">
                    <Button variant="dark">
                        Cadastrar produto
                    </Button>
                </div>
            </Link>
            <div className="cards">
                {!confirmar ?
                    (produtos.map((produto) => {
                        return (
                            <div className="card-item" key={produto._id}>
                                <Card className="Card">
                                    <Card.Img variant="top" src={host + produto.patch}
                                    />
                                    <Card.Body>
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">R$ {produto.preco}</Card.Subtitle>
                                        <Card.Text>{produto.descricao}</Card.Text>
                                        <Link to={`/${produto._id}`}>
                                            <Button variant="dark" size="sm">Editar</Button>
                                        </Link>
                                        <Button variant="secondary" size="sm" onClick={() => {
                                            setConfirmar(true)
                                            setIdProduto(produto._id)
                                            setNome(produto.nome)
                                            setImagem(host + produto.patch)
                                            setPreco(produto.preco)
                                        }}>Excluir</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                    )) :
                    <div className="confirmar">
                        <h1>Tem certeza que deseja excluir este produto?</h1>
                        <Card className="Card">
                            <Card.Img variant="top" src={imagem} />
                            <Card.Body>
                                <Card.Title>{nome}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">R$ {preco}</Card.Subtitle>

                                <Button variant="secondary" size="sm" onClick={() => excluirProduto(idProduto)}>Excluir</Button>
                                <Button variant="secondary" size="sm" onClick={() => setConfirmar(false)}>Cancelar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                }
            </div>
        </div>
    )
}
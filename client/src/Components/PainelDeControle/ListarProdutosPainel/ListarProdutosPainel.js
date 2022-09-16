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

    const apagarProduto = async (urlId) => {

        fetch(host + urlId, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <Link to="/paineldecontrole/cadastrarproduto">
                <div className="cadastro">
                    <Button variant="dark">
                        Cadastrar produto
                    </Button>
                </div>
            </Link>

            <div className="cards">
                {produtos.map((produto) => {
                    return (
                        <div className="card-item" key={produto._id}>
                            <Card style={{ width: '12.75rem' }}>
                                <Card.Img variant="top" src={host + produto.patch}
                                />
                                <Card.Body>
                                    <Card.Title>{produto.nome}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">R$ {produto.preco}</Card.Subtitle>
                                    <Card.Text>{produto.descricao}</Card.Text>
                                    <Link to={`/${produto._id}`}>
                                        <Button variant="dark" size="sm">Editar</Button>
                                    </Link>
                                    <Button variant="secondary" size="sm" onClick={() => apagarProduto(produto._id)}>Apagar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}
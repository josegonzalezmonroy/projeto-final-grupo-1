import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import './ListarProdutos.css'
import { Link } from 'react-router-dom'


export default function ListarProdutosPainel() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    }, [])



    function ajustarTexto(text, max = 75) {
        if (text.length < max) {
            return text
        }
        return text.slice(0, max) + '[...]'
    }

    return (
        <div>
            <Link to="/paineldecontrole/cadastrarproduto">
                <Button variant="primary">
                    Cadastrar produto
                </Button>
            </Link>

            <h2 className="font-weight-bold text-center">Painel de controle</h2>
            <div className="cards">
                {produtos.map((produto) => {
                    return (
                        <div className="card-item" key={produto._id}>
                            <Card style={{ width: '12.75rem' }}>
                                <Card.Img variant="top" src="https://22825.cdn.simplo7.net/static/22825/sku/camisas-estampadas-camisa-estampada-mundo-paralelo--p-1595723319359.jpg" />
                                <Card.Body>
                                    <Card.Title>{produto.nome}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">R$ {produto.preco}</Card.Subtitle>
                                    <Card.Text>{ajustarTexto(produto.descricao)}</Card.Text>
                                    <Button variant="primary">Editar</Button>
                                    <Button variant="primary">Apagar</Button>
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
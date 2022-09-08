import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import './ListarProdutos.css'

export default function ListarProdutos() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    }, [])


    return (
        <div className="cards">
            {produtos.map((produto) => {
                return (
                    <div className="card-item" key={produto._id}>
                        <Card style={{ width: '12.75rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{produto.nome}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">R$ {produto.preco}</Card.Subtitle>
                                <Card.Text>{produto.descricao}</Card.Text>
                                <Button variant="primary">Ver detalhes</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
            )
            }
        </div>
    )
}
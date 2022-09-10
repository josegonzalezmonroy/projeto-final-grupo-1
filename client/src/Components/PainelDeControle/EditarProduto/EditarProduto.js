import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EditarProduto() {

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()

    const [produtos, setProdutos] = useState([])
    
    const urlId = window.location.pathname 

    useEffect(() => {
        fetch(`http://localhost:3001${urlId}`)
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    })

    const editar = async () => {
        const contatoModificado = {
            nome, preco, descricao, categoria
        }

        await fetch(`http://localhost:3001${urlId}`, {
            method: 'PATCH',
            body: JSON.stringify(contatoModificado),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }

    return (
        <div>
            <h2 className="font-weight-bold text-center">Editar Produto</h2>
            {produtos.map((produto) => {
                return(
            <Form key={produto._id}>
                <Form.Group className="mb-3"
                    id="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do produto..."
                        defaultValue={produto.nome} onChange={e => setNome(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="price">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control type="number" placeholder="Digite o preço..."
                        defaultValue={produto.preco} onChange={e => setPreco(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="description">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Descreva o produto..."
                        defaultValue={produto.descricao} onChange={e => setDescricao(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="category">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" placeholder="Descreva a categoria do produto..."
                        defaultValue={produto.categoria} onChange={e => setCategoria(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Link to='/paineldecontrole'>
                    <Button variant="primary" type="submit" onClick={editar}>Editar</Button>
                </Link>
            </Form>
            )})}
        </div>
    )
}
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CadastrarProduto.css'

export default function CadastrarProduto() {

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()

    const reqPost = async () => {

        const novoProduto = {
            nome,
            preco,
            descricao,
            categoria
        }
        await fetch('http://localhost:3001/create/', {
            method: 'POST',
            body: JSON.stringify(novoProduto),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
    }

    return (
        <div>
            <h2 className="font-weight-bold text-center">Cadastrar um produto</h2>
            <Form className="formulario">
                <Form.Group className="mb-3"
                    id="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do produto..."
                        defaultValue={nome} onChange={e => setNome(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="price">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control type="number" placeholder="Digite o preço do produto..."
                        defaultValue={preco} onChange={e => setPreco(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="description">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Descreva o produto..."
                        defaultValue={descricao} onChange={e => setDescricao(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="category">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                        aria-label="Default select example">
                        <option>Selecione uma categoria</option>
                        <option value="ela">Elas</option>
                        <option value="ele">Eles</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Inserir uma imagem</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Link to='/paineldecontrole'>
                    <Button variant="primary" type="submit" onClick={reqPost}>Cadastrar</Button>
                </Link>
            </Form>
        </div>
    )
}
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { AddShoppingCartIcon } from "@mui/icons-material/AddShoppingCart";


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
                <h2 className="font-weight-bold text-center">Cadastrar Produto</h2>
                <Form>
                    <Form.Group className="mb-3" id="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome do produto..."
                            defaultValue={nome} onChange={e => setNome(e.target.value)} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" id="price">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type="number" placeholder="Digite o preço..."
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
                        <Form.Control type="text" placeholder="Descreva a categoria do produto..."
                            defaultValue={categoria} onChange={e => setCategoria(e.target.value)} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Link to='/paineldecontrole'>
                        <Button variant="primary" type="submit" onClick={reqPost}>Cadastrar</Button>
                    </Link>
                </Form>
        </div>
    )
}
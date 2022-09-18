import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EditarProduto.css"

export default function EditarProduto() {

    const [produtos, setProdutos] = useState([])
    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()
    const [imagem, setImagem] = useState()
    const [inputImg, setInputImg] = useState(true)

    const host = 'http://localhost:3001/'
    const pathname = window.location.pathname
    const id = pathname.substring(1, pathname.length)

    useEffect(() => {
        fetch(host + id)
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    })

    const editar = () => {
        inputImg ? editarSem() : editarCom()
    }

    const editarCom = async () => {

        const form = new FormData()
        form.append('nome', nome)
        form.append('preco', preco)
        form.append('descricao', descricao)
        form.append('categoria', categoria)
        form.append('image', imagem)

        await fetch(`http://localhost:3001/${id}`, {
            method: 'PATCH',
            body: form
        }).then(console.log(form))
    }

    const editarSem = async () => {
        const produtoModificado = {
            nome, preco, descricao, categoria
        }

        await fetch(`http://localhost:3001/editarsem/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(produtoModificado),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }


    return (
        <div>
            <h2 className="font-weight-bold text-center">Editar Produto</h2>
            {produtos.map((produto) => {
                return (
                    <div className="formularioComImagem" key={produto._id}>
                        <div>
                            {inputImg ?
                                <div>
                                    <h6>Clique na imagem para alterá-la</h6>,
                                    <img onClick={() => setInputImg(!inputImg)} className="imagemProduto" alt="imagem do produto" src={host + produto.patch} />
                                </div>
                                : <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Inserir uma imagem</Form.Label>
                                    <Form.Control type="file" name="image"
                                        onChange={e => {
                                            setImagem(e.target.files[0])
                                            console.log(imagem)
                                        }} />
                                </Form.Group>}
                        </div>

                        <div className="formulario">
                            <Form >
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

                                <Form.Group className="mb-3">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Select
                                        defaultValue={produto.categoria}
                                        name="categoria"
                                        onChange={e => setCategoria(e.target.value)}
                                        aria-label="Default select example">
                                        <option>Selecione uma categoria</option>
                                        <option value="elas">Elas</option>
                                        <option value="eles">Eles</option>
                                    </Form.Select>
                                </Form.Group>
                                <div className="bot_Cad">
                                    <Link to='/paineldecontrole'>
                                        <Button variant="dark" size="sm" type="submit" onClick={editar}>Editar</Button>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </div>)
            })}
        </div>
    )
}
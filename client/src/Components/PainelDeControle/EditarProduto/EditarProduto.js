import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./EditarProduto.css"

export default function EditarProduto() {

    const { id } = useParams()
    const [produtos, setProdutos] = useState([])
    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()
    const [cor, setCor] = useState()
    const [tamanho, setTamanho] = useState()
    const [imagem, setImagem] = useState()
    const [inputImg, setInputImg] = useState(true)

    const host = 'http://localhost:3001/'

    useEffect(() => {
        fetch(host + id)
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    }, [id])

    const editar = () => {
        inputImg ? editarSem() : editarCom()
    }

    const editarCom = async () => {

        const form = new FormData()
        imagem && form.append('image', imagem)
        nome && form.append('nome', nome)
        preco && form.append('preco', preco)
        descricao && form.append('descricao', descricao)
        categoria && form.append('categoria', categoria)
        cor && form.append('cor', cor)
        tamanho && form.append('tamanho', tamanho)

        await fetch(`http://localhost:3001/${id}`, {
            method: 'PATCH',
            body: form
        }).then(console.log(form))
    }

    const editarSem = async () => {
        const produtoModificado = {
            nome, preco, descricao, categoria, cor, tamanho
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
                                    <h6><strong>Clique na imagem para alterá-la!</strong></h6>,
                                    <img onClick={() => setInputImg(!inputImg)} className="imagemProduto" alt="imagem do produto" src={host + produto.patch} />
                                </div>
                                : <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label className="label">Inserir uma imagem</Form.Label>
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
                                    <Form.Label className="label">Nome</Form.Label>
                                    <Form.Control className="input" type="text" placeholder="Digite o nome do produto..."
                                        defaultValue={produto.nome} onChange={e => setNome(e.target.value)} />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" id="price">
                                    <Form.Label className="label">Preço</Form.Label>
                                    <Form.Control className="input" type="number" placeholder="Digite o preço do produto..."
                                        defaultValue={produto.preco} onChange={e => setPreco(e.target.value)} />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" id="description">
                                    <Form.Label className="label">Descrição</Form.Label>
                                    <Form.Control className="input" type="text" placeholder="Descreva o produto..."
                                        defaultValue={produto.descricao} onChange={e => setDescricao(e.target.value)} />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" id="color">
                                    <Form.Label className="label">Cor</Form.Label>
                                    <Form.Control className="input" type="text" placeholder="Digite a cor do produto..."
                                        defaultValue={produto.cor} onChange={e => setCor(e.target.value)} />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" id="size">
                                    <Form.Label className="label">Tamanho</Form.Label>
                                    <Form.Control className="input" type="text" placeholder="Digite o tamanho do produto..."
                                        defaultValue={produto.tamanho} onChange={e => setTamanho(e.target.value)} />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Categoria</Form.Label>
                                    <Form.Select className="inputC"
                                        defaultValue={produto.categoria}
                                        name="categoria"
                                        onChange={e => setCategoria(e.target.value)}
                                        aria-label="Default select example">
                                        <option>Selecione uma categoria</option>
                                        <option value="elas">Elas</option>
                                        <option value="eles">Eles</option>
                                    </Form.Select>
                                </Form.Group>
                                <div ClassName="botao" >
                                    <Link to='/paineldecontrole'>
                                        <Button ClassName="botao" variant="dark" size="sm" type="submit" onClick={editar}>Editar</Button>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </div>)
            })}
        </div>
    )
}
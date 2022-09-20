import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CadastrarProduto.css'

export default function CadastrarProduto() {

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()
    const [cor, setCor] = useState()
    const [tamanho, setTamanho] = useState()
    const [imagem, setImagem] = useState()

    const reqPost = async () => {

        const form = new FormData()
        form.append('nome', nome)
        form.append('preco', preco)
        form.append('descricao', descricao)
        form.append('categoria', categoria)
        form.append('cor', cor)
        form.append('tamanho', tamanho)
        form.append('image', imagem)

        await fetch('http://localhost:3001/create/', {
            method: 'POST',
            body: form
        }).then(console.log(form))
    }

    return (
        <div>
            <h2 className="font-weight-bold text-center">Cadastrar Produto</h2>
            <Form className="formulario" id="formularioCadastro">
                
                <Form.Group className="mb-3"
                    id="name">
                    <Form.Label className="label">Nome</Form.Label>
                    <Form.Control className="input" type="text" name="nome" placeholder="Digite o nome do produto..."
                        defaultValue={nome} onChange={e => setNome(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
               

                <Form.Group className="mb-3" name="preco">
                    <Form.Label className="label">Preço</Form.Label>
                    <Form.Control className="input"  type="number" name="preco" placeholder="Digite o preço do produto..."
                        onChange={e => setPreco(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Descrição</Form.Label>
                    <Form.Control className="input"  type="text" name="descricao" placeholder="Descreva o produto..."
                        onChange={e => setDescricao(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Cor</Form.Label>
                    <Form.Control className="input"  type="text" name="cor" placeholder="Digite a cor do produto..."
                        onChange={e => setCor(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Tamanho</Form.Label>
                    <Form.Control className="input"  type="text" name="tamanho" placeholder="Digite o tamanho do produto..."
                        onChange={e => setTamanho(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Categoria</Form.Label>
                    <Form.Select  className="inputC"
                        value={categoria}
                        name="categoria"
                        onChange={e => setCategoria(e.target.value)}
                        aria-label="Default select example">
                        <option>Selecione uma categoria</option>
                        <option value="elas">Elas</option>
                        <option value="eles">Eles</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group  controlId="formFile" className="mb-3">
                    <Form.Label className="label">Inserir uma imagem</Form.Label>
                    <Form.Control type="file" name="image"
                        onChange={e => {
                            setImagem(e.target.files[0])
                            console.log(imagem)
                        }} />
                </Form.Group>
                <div className="bot_Cad">
                    <Link to='/paineldecontrole'>
                        <Button variant="dark" size="sm" type="submit" onClick={reqPost}>Cadastrar</Button>
                    </Link>
                </div>
               
            </Form>
        </div>
    )
}
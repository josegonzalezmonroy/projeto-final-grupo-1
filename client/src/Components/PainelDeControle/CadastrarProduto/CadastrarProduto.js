import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CadastrarProduto.css'

export default function CadastrarProduto() {

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [descricao, setDescricao] = useState()
    const [cor, setCor] = useState()
    const [tamanho, setTamanho] = useState()
    const [categoria, setCategoria] = useState()
    const [imagem, setImagem] = useState()

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const reqPost = async (e) => {
        e.preventDefault()

        if (!validate()) return;

        const form = new FormData()
        form.append('nome', nome)
        form.append('preco', preco)
        form.append('descricao', descricao)
        form.append('cor', cor)
        form.append('tamanho', tamanho)
        form.append('categoria', categoria)
        form.append('image', imagem)

        await fetch('http://localhost:3001/create/', {
            method: 'POST',
            body: form
        }).then(console.log(form))

        const saveDataForm = true;

        if (saveDataForm) {
            setStatus({
                type: 'success',
                mensagem: "Produto cadastrado com sucesso!"
            });
            setNome({ nome: '' });
            setPreco({ preco: '' });
            setDescricao({ descricao: '' });
            setCategoria({ categoria: '' });
            setCor({ cor: '' });
            setTamanho({ tamanho: '' });
            setImagem({ imagem: '' });

        } else {
            setStatus({
                type: 'error',
                mensagem: "Erro: Produto não cadastrado com sucesso!"
            });
        }
    }

    function validate() {
        if (!nome) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!' });
        if (!preco) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo preço!' });
        if (!descricao) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo descrição!' });
        if (descricao.length < 15) return setStatus({ type: 'error', mensagem: 'Erro: A descrição precisa ter pelo menos quince caracteres!' });
        if (!cor) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo cor!' });
        if (!tamanho) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo tamanho!' });
        if (!categoria) return setStatus({ type: 'error', mensagem: 'Erro: Necessário escolher uma categoria!' });
        if (!imagem) return setStatus({ type: 'error', mensagem: 'Erro: Necessário subir uma imagem!' });

        return true;
    }

    return (
        <div>
            <h2 className="font-weight-bold text-center">Cadastrar Produto</h2>

            <Form className="formulario" id="formularioCadastro">

                <Form.Group className="mb-3"
                    id="name">
                    <Form.Label className="label">Nome</Form.Label>
                    <Form.Control className="input"
                        type="text"
                        name="nome"
                        placeholder="Digite o nome do produto..."
                        defaultValue={nome} onChange={e => setNome(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" name="preco">
                    <Form.Label className="label">Preço</Form.Label>
                    <Form.Control className="input"
                        type="number"
                        name="preco"
                        placeholder="Digite o preço do produto..."
                        onChange={e => setPreco(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Descrição</Form.Label>
                    <Form.Control className="input"
                        type="text"
                        name="descricao"
                        placeholder="Descreva o produto..."
                        onChange={e => setDescricao(e.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Cor</Form.Label>
                    <Form.Select className="inputC"
                        value={cor}
                        name="cor"
                        onChange={e => setCor(e.target.value)}
                        aria-label="Default select example">
                        <option>Selecione uma cor</option>
                        <option value="branca">Branco</option>
                        <option value="preta">Preto</option>
                        <option value="caramelo">Caramelo</option>
                        <option value="laranja">Laranja</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Tamanho</Form.Label>
                    <Form.Select className="inputC"
                        value={tamanho}
                        name="tamanho"
                        onChange={e => setTamanho(e.target.value)}
                        aria-label="Default select example">
                        <option>Selecione um Tamanho</option>
                        <option value="PP">PP</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XGG">XGG</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Categoria</Form.Label>
                    <Form.Select className="inputC"
                        value={categoria}
                        name="categoria"
                        onChange={e => setCategoria(e.target.value)}
                        aria-label="Default select example">
                        <option>Selecione uma categoria</option>
                        <option value="elas">Elas</option>
                        <option value="eles">Eles</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="label">Inserir uma imagem</Form.Label>
                    <Form.Control type="file" name="image"
                        onChange={e => {
                            setImagem(e.target.files[0])
                            console.log(imagem)
                        }}
                    />
                </Form.Group>

                {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

                <div className="bot_Cad">
                    <Link to='/paineldecontrole'>
                        <Button
                            variant="dark"
                            size="sm"
                            type="submit"
                            onClick={reqPost}>Cadastrar
                        </Button>
                    </Link>
                </div>

            </Form>
        </div>
    )
}
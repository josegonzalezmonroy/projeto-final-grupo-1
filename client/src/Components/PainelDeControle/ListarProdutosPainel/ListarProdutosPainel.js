import { useState, useEffect } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import './ListarProdutos.css'

export default function ListarProdutosPainel() {

    const [produtos, setProdutos] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [idProduto, setIdProduto] = useState()
    const [buscarProdutos, setBuscarProdutos] = useState("")
    const host = 'http://localhost:3001/'

    useEffect(() => {
        atualizarData()
    }, [])

    const atualizarData = async () => {
        await fetch(host)
            .then(response => response.json())
            .then(listaProdutos => setProdutos(listaProdutos))
    }

    const excluirProduto = async (id) => {

        await fetch(host + id, {
            method: 'DELETE'
        }).then(atualizarData)
    }

    const produtosOrganizados = produtos.sort((a, b) => {//variavel para organizar os produtos por ordem alfabetica
        return a.nome.localeCompare(b.nome)
    }
    )

    const produtosFiltrados = produtosOrganizados.filter(//filtrar os produtos pela busca
        (itens) => itens.nome.toLowerCase().includes(buscarProdutos.toLowerCase()))

    return (
        <div className="painel">
            <Link className="cadastro" to="/paineldecontrole/cadastrarproduto">
                Cadastrar produto
            </Link>
            <label className="lupa"><FontAwesomeIcon icon={faMagnifyingGlass} />
                <input className="cuadro" type='text' placeholder="Procurar" value={buscarProdutos} onChange={(e) => {
                    setBuscarProdutos(e.target.value)
                }} /></label><br />
            <div className="cards cardsItem">

                {produtosFiltrados.map((produto) => {
                    return (
                        <div className="kart" key={produto._id}>
                            <Card className="Card">
                                <Card.Img variant="top" src={host + produto.patch}
                                />
                                <Card.Body>
                                    <Card.Title className="titleCart">{produto.nome}</Card.Title>
                                    <Card.Subtitle className="mb-3 mt-3 text-muted">R$ {produto.preco}</Card.Subtitle>
                                    <Card.Text>{produto.descricao}</Card.Text>
                                    <div className="alignButton">
                                        <Link to={`/${produto._id}`}>
                                            <Button className="botao" variant="dark" size="sm">Editar</Button>
                                        </Link>
                                        <Button className="botao" variant="secondary" size="sm" onClick={() => {
                                            setIdProduto(produto._id)
                                            handleShow()
                                        }}>Excluir</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <p><strong>Tem certeza que deseja excluir o produto?</strong></p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button  variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="dark" onClick={() => {
                            handleClose()
                            excluirProduto(idProduto)
                        }}>Confirmar</Button>
                    </Modal.Footer>
                </Modal>


            </div >
        </div>
    )
}

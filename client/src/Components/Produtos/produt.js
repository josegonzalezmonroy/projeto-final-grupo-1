import React, { Component } from "react";
import {
  Table,
  Button,
  } from "react-bootstrap";
import Form from "react-bootstrap/Form";
//Importei o bootstrap no formulário

class FormProdutos extends Component {
  state = {
    model: {
      id: 0,
      nome: "",
      descrição: "",
      preço: 0,
      categoria: ""
    }
  }

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  }

  create = () => {
    let data = {
      id: parseInt(this.state.model.id),
      nome: parseInt(this.state.model.nome),
      descrição: this.state.model.descrição,
      preço: parseFloat(this.state.model.preço),
      categoria: parseInt(this.state.model.categoria)
    }
    this.props.produtosCreate(data);
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" 
        Id="nome">
          <Form.Label for="nome">Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do produto..." />
          <Form.Text
            className="text-muted"
            value={this.state.model.nome}
            onChange={(e) => this.setValues(e, "nome")}
          ></Form.Text>
        </Form.Group>
       

        <Form.Group className="mb-3" 
        Id="descrição">
          <Form.Label for="descrição">Descrição</Form.Label>
          <Form.Control type="text" placeholder="Descreva o produto..." />
          <Form.Text
            className="text-muted"
            value={this.state.model.descrição}
            onChange={(e) => this.setValues(e, "descriçao")}
          ></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" 
        Id="preço">
          <Form.Label for="preço">Preço</Form.Label>
          <Form.Control type="text" placeholder="Digite o preço..." />
          <Form.Text
            className="text-muted"
            value={this.state.model.preço}
            onChange={(e) => this.setValues(e, "preço")}
          ></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" 
        Id="categoria">
          <Form.Label for="categoria">Categoria</Form.Label>
          <Form.Control type="text" placeholder="Descreva a categoria do produto..." />
          <Form.Text
            className="text-muted"
            value={this.state.model.categoria}
            onChange={(e) => this.setValues(e, "categoria")}
          ></Form.Text>
        </Form.Group>
            
           
        <Button variant="primary" type="submit" onClick={this.create}> Cadastrar </Button>  

        
      </Form>
    );
  }
}

class ListProdutos extends Component {
  render() {
    const { produtos } = this.props;
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produtos) => (
            <tr key={produtos.id}>
              <td>[produtos.nome]</td>
              <td>[produtos.descrição]</td>
              <td>[produtos.preço]</td>
              <td>[produtos.categoria]</td>
              <td>
                <Button color="purple" size="sm">
                  Editar
                </Button>
                <button color="ruddy" size="sm">
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default class ProdutosBox extends Component {
  Url = "http://localhost:3000/produtos";

  state = {
    produtos: [],
  }

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((produtos) => this.setState({ produtos }))
      .catch(e => console.log(e));
  }

  create = (produtos) => {
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(produtos),
      headers: new Headers({
        "Content-type": "application/json",
      })
    };

    fetch(this.Url, requestInfo)
      .then(response => response.json())
      .then(newProdutos => {
       let { produtos } = this.state;
        produtos.push(newProdutos);
       this.setState({ produtos });
      })
      .catch(e => console.log(e));
  }

  delete = (id) => {
    fetch(`${this.Url}/${id}`, {method: 'DELETE'})
    .then(response =>response.json())
    .then(rows => console.log(rows))
     .catch(e => console.log(e));
    }
      
    
  

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2 className="font-weight-bold text-center">Cadastrar Produtos</h2>
          <FormProdutos produtosCreate={this.create} />
        </div>
        <div className="col-md-6">
          <h2 className="font-weight-bold text-center">Lista de Produtos</h2>
          <ListProdutos produtos={this.state.produtos} />
        </div>
      </div>
    );
  }
}

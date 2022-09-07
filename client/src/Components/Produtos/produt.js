import React, { Component } from "react";
import { FormGroup, Table, Button, FormLabel, InputGroup } from "react-bootstrap";
//import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
//import FormGroup from "react-bootstrap/FormGroup";

class FormProdutos extends Component {
  state = {
    model: {
      id: 0,
      nome: "",
      descrição: "",
      preço: 0,
      quantidade: "",
      categoria: "",
    },
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
    
  };

  create = () => {
    
    let data = {
      id: parseInt(this.state.model.id),
      nome: parseInt(this.state.model.nome),
      descrição:this.state.model.descrição,
      preço: parseFloat(this.state.model.preço),
      quantidade: parseInt(this.state.model.quantidade),
      categoria: parseInt(this.state.model.categoria),
    };
    this.props.produtosCreate(data);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <FormLabel for="name">Nome</FormLabel>
          <InputGroup.Text
            id="name"
            type="text"
            value={this.state.model.nome}
            onChange={(e) => this.setValues(e, "name")}
          ></InputGroup.Text>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <div className="col-md-6">
              <FormLabel for="description">Descrição</FormLabel>
              <InputGroup.Text
                id="description"
                type="text"
                value={this.state.model.descrição}
                onChange={(e) => this.setValues(e, "description")}
              ></InputGroup.Text>
            </div>
            <div className="col-md-6">
              <FormLabel for="quantity">Quantidade</FormLabel>
              <InputGroup.Text
                id="quantity"
                type="text"
                value={this.state.model.quantidade}
                onChange={(e) => this.setValues(e, "quantity")}
              ></InputGroup.Text>
            </div>
            <div className="mb-3">
              <FormLabel for="price">Preço</FormLabel>
              <InputGroup.Text
                id="price"
                type="text"
                value={this.state.model.preço}
                placeholder="R$"
                onChange={(e) => this.setValues(e, "price")}
              ></InputGroup.Text>
            </div>
            <div className="mb-3">
              <FormLabel for="category">Categoria</FormLabel>
              <InputGroup.Text
                id="category"
                type="text"
                value={this.state.model.categoria}
                onChange={(e) => this.setValues(e, "category")}
              ></InputGroup.Text>
            </div>
          </div>
        </FormGroup>

        <Button onClick={this.create}>Cadastrar</Button>
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
            <th>Quantidade</th>
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
              <td>[produtos.quantidade]</td>
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
  };

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((produtos) => this.setState({ produtos }))
      .catch((e) => console.log(e));
  }

  create = (produtos) => {
   const requestInfo ={
    method: 'POST',
    body: JSON.stringify(produtos),
    headers: new Headers({
      'Content-type': 'application/json'
    })
   };

fetch(this.Url, requestInfo)
.then(response => response.json())
.then(newProdutos =>{
  const{ Produtos } = this.state;
  produtos.push(newProdutos);
  // Continuar
}
)
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

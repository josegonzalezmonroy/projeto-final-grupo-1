
import React from "react";
import './Pagamento.css'
import Form from 'react-bootstrap/Form';
//import React, { useState } from "react";


export default function Pagamento() {
  return (
    <>
      <h1>Escolha a sua forma de pagamento!</h1>
      <div className="form_pagamento">
        <div className="pagam">
          <Form.Check
            type="switch"
            id="form"
            label="Boleto"
          />
          <Form.Check
            type="switch"
            label="Pix"
            id="form"
          />

          <Form.Check
            type="switch"
            label="Cartão de crédito"
            id="form"
          />
          <Form.Check
            type="switch"
            label="Débido"
            id="form"
          />

        </div>
      </div>


    </>
  )
}
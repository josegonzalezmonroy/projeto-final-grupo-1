
import React from "react";
import './Pagamento.css'
import Form from 'react-bootstrap/Form';
//import { useSForm } from "react-hook-form";
import { Button } from "react-bootstrap";



export default function Pagamento() {

  return (
    <>
      <h1>Escolha a sua forma de pagamento!</h1>
      <div className="form_pagamento">
        <div className="pagam">
          <Form.Check
            type="checkbox"
            id="form"
            label= "Boleto"
            />
          <Form.Check
            type="checkbox"
            label="Pix"
            id="form"
          />

          <Form.Check
            type="checkbox"
            label="Cartão de crédito"
            id="form"
          />
          <Form.Check
            type="checkbox"
            label="Débido"
            id="form"
          />


  <div className="Button">
          <Button type="submit" variant="dark" value="submit">Pague</Button>
</div>
        </div>

       {/*} <div class="form-check">
    <Form.Control type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </Form.Control>
  </div>
  <div class="form-check mb-3">
    <Form.Control type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label></Form.Control>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>*/}
      </div>


    </>
  )
}
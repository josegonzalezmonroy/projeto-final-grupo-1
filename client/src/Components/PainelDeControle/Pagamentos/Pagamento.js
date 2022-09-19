
import React from "react";
import './Pagamento.css'
//import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";



export default function Pagamento() {
  //hendle events
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //handle submit
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <>
      <h1>Escolha a sua forma de pagamento!</h1>
      <div className="form_pagamento">
        <div className="pagam">
<React.Fragment>
  <section>
   <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label><strong>Boleto</strong></label>
        <input type='radio'
        value='boleto'
        {...register("pagamType", { required: 'Tipo de pagamento válido'})} 
        />
        
        </div>
      <div>
      <label><strong>Pix</strong></label>
        <input type='radio'
        value='pix'
        {...register("pagamType", { required: 'Tipo de pagamento válido'})}
        />
      </div>
      <div>
      <label><strong>Crédito</strong></label>
        <input type='radio'
        value='credito'
        {...register("pagamType", { required: 'Tipo de pagamento válido'})}
        />

      </div>
      <div>
      <label><strong>Débito</strong></label>
        <input type='radio'
        value='debito'
         {...register("pagamType", { required: 'Tipo de pagamento válido'})}
        />
        
      </div>
    </form>
  </section>
</React.Fragment>

{/* Só quando o botão for um link
<div>
{errors.pagamType && <span>{errors.pagamType.message}</span>}
  </div>*/}


  <div className="Button">
          <Button type="submit" variant="dark" value="submit">Pague aqui</Button>
          
</div>
        </div>
  </div> 


    </>
  )
} 
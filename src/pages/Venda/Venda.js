import React, {useState, useEffect} from 'react';
import { Button, Form, Table } from 'semantic-ui-react';
import ClienteSelector from './ClienteSelector';
import {VendaTabela} from './VendaTabela';

const Venda = () => {
  const [clienteId, setClieteId] = useState(-1);
  const [itensVendidos, setItensVendidos] = useState([]);
  
  function handleSubmit(event) {
    event.preventDefault();
    
  }
  

  return (
    <Form onSubmit={handleSubmit}>
      <ClienteSelector />
      <VendaTabela />
      <Button primary submit>Realizar Venda</Button>
    </Form>
  );
}

export default Venda;
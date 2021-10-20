import React, { useState, useEffect } from 'react';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const Venda = () => { 
  const [vendas, setVendas] = useState([]);
  
  const headerRow = ['Cliente', 'Valor', 'Data de Expedição', 'Opções'];
	const renderBodyRow = ({id, valor, cliente, dataCadastro}, index) => ({
		key: id,
		cells: [
			`${cliente.cpf} - ${cliente.nome} ${cliente.sobrenome}` || '',
            `R$: ${valor.toFixed(2)}` || '',
            dataCadastro || '',
			<td><Button color="green" href={`/vendas/${id}`}>Detalhes</Button></td>
		],
	})

  useEffect(() => {
      axios.get('http://localhost:8080/vendas/')
      .then(response => {
          setVendas(response.data.content)
          console.log(response.data.content)
        }); 
      
  }, []);

  return (
    <React.Fragment>
      <ListagemHeader icon='shopping cart' content='Vendas' />
      <ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={vendas}/>
    </React.Fragment>
  );

}

export default Venda;
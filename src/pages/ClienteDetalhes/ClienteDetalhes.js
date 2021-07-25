import React, {useState, useEffect} from 'react';
import {Table} from 'semantic-ui-react';

import apiClientes from '../../service/individuals/apiClientes';

const ClienteDetalhes = (props) => {
  const [cliente, setCliente] = useState({});

  useEffect(async () => {
    apiClientes.getSingle(props.match.params.id)
      .then(response => setCliente(response));
  },[])

  const render = () => {
    if(cliente.contato !== undefined && cliente.endereco !== undefined) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value]
      });
      const tableData = [
        {field:"ID:" ,value:cliente.id},
        {field:"Nome", value:cliente.nome},
        {field:"Sobrenome", value:cliente.sobrenome},
        {field:"CPF", value:cliente.cpf},
        {field:"E-mail", value:cliente.contato.email},
        {field:"Telefone Fixo", value:cliente.contato.telefoneFixo},
        {field:"Telefone Celular", value:cliente.contato.telefoneCelular},
        {field:"CEP", value:cliente.endereco.cep},
        {field:"Localidade", value:cliente.endereco.localidade},
        {field:"Bairro", value:cliente.endereco.bairro},
        {field:"Número", value:cliente.endereco.numero},
        {field:"Logradouro", value:cliente.endereco.logradouro},
        {field:"Complemento", value:cliente.endereco.complemento}
      ];
      return(
        <React.Fragment>
          <Table 
            celled
            headerRow={headerRow}
            renderBodyRow={renderBodyRow}
            tableData={tableData}
          />
          </React.Fragment>
      )
    } else {
      return <></>
    }
  }

  return render();
}

export default ClienteDetalhes;
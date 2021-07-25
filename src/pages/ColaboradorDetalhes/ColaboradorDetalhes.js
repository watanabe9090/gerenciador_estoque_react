import React, {useState, useEffect} from 'react';
import {Table} from 'semantic-ui-react';

import apiColaboradores from '../../service/individuals/apiColaboradores';

const ColaboradorDetalhe = (props) => {
  const [colaborador, setColaborador] = useState({});

  useEffect(async () => {
    apiColaboradores.getSingle(props.match.params.id)
      .then(response => setColaborador(response));
  },[])

  const render = () => {
    if(colaborador.contato !== undefined && colaborador.endereco !== undefined) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value]
      });
      const tableData = [
        {field:"ID:" ,value:colaborador.id},
        {field:"Nome", value:colaborador.nome},
        {field:"Sobrenome", value:colaborador.sobrenome},
        {field:"CPF", value:colaborador.cpf},
        {field:"E-mail", value:colaborador.contato.email},
        {field:"Telefone Fixo", value:colaborador.contato.telefoneFixo},
        {field:"Telefone Celular", value:colaborador.contato.telefoneCelular},
        {field:"Data de Nascimento", value:colaborador.dataNascimento},
        {field:"CEP", value:colaborador.endereco.cep},
        {field:"Localidade", value:colaborador.endereco.localidade},
        {field:"Bairro", value:colaborador.endereco.bairro},
        {field:"Número", value:colaborador.endereco.numero},
        {field:"Logradouro", value:colaborador.endereco.logradouro},
        {field:"Complemento", value:colaborador.endereco.complemento}
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

export default ColaboradorDetalhe;
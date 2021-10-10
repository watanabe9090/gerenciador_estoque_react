import React, {useState, useEffect} from 'react';
import {Table} from 'semantic-ui-react';

import apiFornecedor from '../../service/individuals/apiFornecedores';

const FornecedorDetalhes = (props) => {
  const [fornecedor, setFornecedor] = useState({});

  useEffect(async () => {
    apiFornecedor.getSingle(props.match.params.id)
      .then(response => setFornecedor(response));
  },[])

  const render = () => {
    if(fornecedor.contato !== undefined && fornecedor.endereco !== undefined) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value ]
      });
      const tableData = [
        {field:"ID:" ,value:fornecedor.id || ''},
        {field:"Nome Fantasia", value:fornecedor.nomeFantasia || ''},
        {field:"Razão Social", value:fornecedor.razaoSocial || ''},
        {field:"CNPJ", value:fornecedor.cnpj || ''},
        {field:"E-mail", value:fornecedor.contato.email || ''},
        {field:"Telefone Fixo", value:fornecedor.contato.telefoneFixo || ''},
        {field:"Telefone Celular", value:fornecedor.contato.telefoneCelular || ''},
        {field:"CEP", value:fornecedor.endereco.cep || ''},
        {field:"Localidade", value:fornecedor.endereco.localidade || ''},
        {field:"Bairro", value:fornecedor.endereco.bairro || ''},
        {field:"Número", value:fornecedor.endereco.numero || ''},
        {field:"Logradouro", value:fornecedor.endereco.logradouro || ''},
        {field:"Complemento", value:fornecedor.endereco.complemento || ''}
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

export default FornecedorDetalhes
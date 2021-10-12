import React, {useState, useEffect} from 'react';
import {Table} from 'semantic-ui-react';

import apiLocais from '../../service/individuals/apiLocais';

const LocalDetalhes = (props) => {
  const [local, setLocal] = useState({});
  
  useEffect(async () => {
    apiLocais.getSingle(props.match.params.id)
      .then(response => setLocal(response));
  }, []);
  const render = () => {
    if(local.endereco !== undefined) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value ]
      });
      const tableData = [
        {field:"ID:" ,value:local.id || ''},
        {field:"Nome", value:local.nome|| ''},
        {field:"CEP", value:local.endereco.cep|| ''},
        {field:"Localidade", value:local.endereco.localidade|| ''},
        {field:"Bairro", value:local.endereco.bairro|| ''},
        {field:"Número", value:local.endereco.numero|| ''},
        {field:"Logradouro", value:local.endereco.logradouro|| ''},
        {field:"Complemento", value:local.endereco.complemento|| ''}
      ];
      return (
        <React.Fragment>
          <Table 
            celled
            headerRow={headerRow}
            renderBodyRow={renderBodyRow}
            tableData={tableData}
          />
        </React.Fragment>
      );
    } else {
      return <></>
    }
  }
  return render();
}

export default LocalDetalhes;
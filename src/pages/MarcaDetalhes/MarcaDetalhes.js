import React, { useState, useEffect } from 'react';
import {Table} from 'semantic-ui-react';
import apiMarcas from '../../service/individuals/apiMarcas';

const MarcaDetalhes = (props) => {
  const [marca, setMarca] = useState({});

  useEffect(() => {
  apiMarcas.getSingle(props.match.params.id)
    .then(response => setMarca(response))
  }, [])

  const render = () => {
    if(marca.fornecedor !== undefined) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value ]
      });
      const tableData = [
        {field:"ID:" ,value:marca.id},
        {field:"Nome", value:marca.nome},
        {field:"Fornecedor", value:marca.fornecedor.nomeFantasia}
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
    } else return <></>
    
  }

  return render();
}

export default MarcaDetalhes;
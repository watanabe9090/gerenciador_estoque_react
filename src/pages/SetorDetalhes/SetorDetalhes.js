import React, { useState, useEffect } from 'react';
import {Table} from 'semantic-ui-react';
import apiSetores from '../../service/individuals/apiSetores';

const SetorDetalhes = (props) => {
  const [setor, setSetor] = useState({});

  useEffect(() => {
  apiSetores.getSingle(props.match.params.id)
    .then(response => setSetor(response))
  }, [])

  const render = () => {
    if(setor.local !== undefined) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value ]
      });
      const tableData = [
        {field:"ID:" ,value:setor.id},
        {field:"Nome", value:setor.nome},
        {field:"Local", value:setor.local.nome}
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

export default SetorDetalhes;
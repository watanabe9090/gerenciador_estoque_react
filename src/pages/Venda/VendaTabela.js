import React, {useState} from 'react';
import { Button, Table } from 'semantic-ui-react';

const VendaTabela = () => {
  const header = ['Nome', 'Quantidade', 'Valor Unitário', 'Valor Total'];
  const [tableData, setTableData] = useState([]);
  const renderBody = ({nome, quantidade, precoUnitario, id}, i) => ({
    key: id,
    cells: [
      nome,
      quantidade,
      precoUnitario,
      precoUnitario*quantidade 
    ]
  });

  return (
    <React.Fragment>
      <Button>Adicionar Mercadoria</Button>
      <Table
        celled
        headerRow={header}
        renderBodyRow={renderBody}
        tableData={tableData}
      />
    </React.Fragment>
  );
}

export {VendaTabela};
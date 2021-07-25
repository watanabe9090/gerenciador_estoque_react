import React from 'react';
import {Table} from 'semantic-ui-react';

const ListagemBody = (props) => {
  return (
    <React.Fragment>
      <Table 
        celled
        color='black'
        textAlign='center'
        headerRow={props.header} 
        renderBodyRow={props.renderBodyRow}
        tableData={props.tableData}
      />
    </React.Fragment>
  );
}

export default ListagemBody;
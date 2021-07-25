import React from 'react';
import {Button, Popup} from 'semantic-ui-react';

const Opcoes = (props) => {
  return (
    <td>
      <Popup 
        content='Alterar Dados' 
        trigger={<Button inverted color='blue' icon='pencil' href={props.path + '/' + props.id} />} 
      />
      <Popup 
        content='Detalhes' 
        trigger={<Button inverted color='green' icon='magnify' href={props.path + '/detalhes/' + props.id} />} 
      />
    </td>
  );
}

export default Opcoes;
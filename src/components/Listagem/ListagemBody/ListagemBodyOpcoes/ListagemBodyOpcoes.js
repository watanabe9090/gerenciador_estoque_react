import React, {useState} from 'react';
import {Button, Popup, Modal, Header, Icon} from 'semantic-ui-react';

const Opcoes = (props) => {
  const [open, setOpen] = useState(false);

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
      <Popup 
        content='Inativar Registro' 
        trigger={<Button inverted color='red' icon='delete' onClick={() => setOpen(true)}/>} 
      />
      
      <Modal 
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Header icon>
          <Icon name='archive' />
          Deseja Realmente Inativar esse registro?
        </Header>
        <Modal.Content>
          <p>
            Após a inativação de um registro, ele não ficará mais visível nas listagens e consultas,
            entretanto poderá ser visto ainda quando alguma outra entidade tiver relação com este
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button 
            inverted
            content='Não'
            color='red' 
            icon='remove'
            onClick={() => setOpen(false)}
          />
          <Button 
            inverted
            content='Sim'
            color='green'
            icon='checkmark'
            onClick={() => setOpen(false)}
          />
        </Modal.Actions>
      </Modal>
    </td>
  );
}

export default Opcoes;
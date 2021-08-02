import React, { useState, useEffect } from 'react'
import { Form, Icon, Header, Divider } from 'semantic-ui-react';

import { InputInfoEmail, InputInfoTelefoneFixo, InputInfoTelefoneCelular } from './ContatoInputsInfo';
const Contato = (props) => {
  const [contato, setContato] = useState( props.reference || {});

  const handleInputs = (event) => {
    const{ name, value } = event.target;
    setContato({...contato, [name]:value});
  }

  useEffect(() => {
    props.reference.email = contato.email;
    props.reference.telefoneCelular = contato.telefoneCelular;
    props.reference.telefoneFixo = contato.telefoneFixo;
  }, [contato]);
  
  return (
    <Form>
    <Header as='h3'>
      <Icon name='phone square' />
      <Header.Content>Informações de Contato</Header.Content>
    </Header>
    <Divider />
    <Form.Group>
      <Form.Input 
      width='6'
      name='email'
      label={InputInfoEmail}
      placeholder='Ex: joanadark@hotmail.com'
      value={contato.email}
      onChange={handleInputs} 
      />
    <Form.Input 
      width='5'
      name='telefoneFixo'
      label={InputInfoTelefoneFixo} 
      placeholder='Ex: 4999-0022'
      value={contato.telefoneFixo}
      onChange={handleInputs} 
    />
    <Form.Input 
      width='5'
      name='telefoneCelular'
      label={InputInfoTelefoneCelular} 
      placeholder='Ex: 94422-9090'
      value={contato.telefoneCelular}
      onChange={handleInputs} 
    />
    </Form.Group>
    </Form>
    )
  };
  
  export default Contato;
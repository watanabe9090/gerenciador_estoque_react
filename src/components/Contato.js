import React, { useState, useEffect } from 'react'
import { Form, Icon, Header, Divider } from 'semantic-ui-react';

const Contato = (props) => {
    // props.reference.<value> serve para iniciar com o valor presente, para que o useEffect possa mudar a ferencia em seguida
    const [email, setEmail] = useState(props.reference.email || '');
    const [telefoneCelular, setTelefoneCelular] = useState(props.reference.telefoneCelular || '');
    const [telefoneFixo, setTelefoneFixo] = useState(props.reference.telefoneFixo || '');

    useEffect(() => {
        props.reference.email = email;
        props.reference.telefoneCelular = telefoneCelular;
        props.reference.telefoneFixo = telefoneFixo;
    });

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
                    fluid 
                    label='E-mail' 
                    placeholder='Ex: joanadark@hotmail.com'
                    value={email}
                    onChange={event => setEmail(event.target.value)} 
                />
                <Form.Input 
                    width='5'
                    fluid 
                    label='Telefone Fixo' 
                    placeholder='Ex: 4999-0022'
                    value={telefoneFixo}
                    onChange={event => setTelefoneFixo(event.target.value)} 
                />
                <Form.Input 
                    width='5'
                    fluid 
                    label='Telefone Celular' 
                    placeholder='Ex: 94422-9090'
                    value={telefoneCelular}
                    onChange={event => setTelefoneCelular(event.target.value)} 
                />
            </Form.Group>
        </Form>
    )
};

export default Contato;
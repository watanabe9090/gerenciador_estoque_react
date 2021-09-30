import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router';
import { Form } from 'semantic-ui-react';


import genderOptions from '../../util/genderOptions';
import apiCliente from '../../service/individuals/apiClientes';

import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import {InputInfoNome, InputInfoSobrenome, InputInfoCpf, InputInfoSexo} from '../../domain_files/Cliente/ClienteInputInfo';
import NotFound from '../../components/NotFound/NotFound';

const ClienteAlteracao = (props) => {
  const history = useHistory();
  const [cliente, setCliente] = useState({});
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    apiCliente.getSingle(props.match.params.id)
      .then(response => setCliente(response))
  }, []);

  const handleInputs = (event) => {
    const {name, value} = event.target;
    setCliente({...cliente, [name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cliente)
    apiCliente.put({...cliente})
      .then(response => console.log(response));
    history.push('/clientes/redirect');
  }

  const render = () => {
    if(cliente.contato) {
    return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
			<FormularioHeader
        icon='address book'
        header='Cadastro de Clientes'
        subheader='Adição de novos Clientes ao Sistema'
		  />
      <Form.Group widths='equal'>
			<Form.Input 
				name='nome'
				label={InputInfoNome} 
				placeholder='Hana'
				value={cliente.nome}
				onChange={handleInputs} 
			/>
      <Form.Input 
				name='sobrenome'
				label={InputInfoSobrenome}
				placeholder='Pereira'
				value={cliente.sobrenome}
				onChange={handleInputs} 
			/>

      <Form.Select
        name='sexo'selection
        label={InputInfoSexo}
        options={genderOptions}
        onChange={(event, data) => setCliente({...cliente, sexo:data.value})}
        defaultValue={cliente.sexo}
      />

      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Input 
        name='cpf'
        label={InputInfoCpf}
        placeholder='1231231232'
        value={cliente.cpf}
        onChange={handleInputs} 
      />
      </Form.Group>
      <Endereco reference={cliente.endereco} />
			<Contato reference={cliente.contato}/> 
			<Form.Button primary>Atualizar</Form.Button>
      </Form>
    </React.Fragment>
    )} else {
    return (
    <React.Fragment>
      <NotFound />
    </React.Fragment>
    )}
  }

  return render();
}

export default ClienteAlteracao;
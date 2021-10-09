import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router';
import { Form } from 'semantic-ui-react';


import genderOptions from '../../util/genderOptions';
import apiClientes from '../../service/individuals/apiClientes';

import validate from '../../validations/Formularios/Cliente/clienteValidation';

import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import {InputInfoNome, InputInfoSobrenome, InputInfoCpf, InputInfoSexo} from '../../domain_files/Cliente/ClienteInputInfo';
import NotFound from '../../components/NotFound/NotFound';

const ClienteAlteracao = (props) => {
  const history = useHistory();
  const [cliente, setCliente] = useState({});
  const [errors, setErrors] = useState({
		nome: null,
		sobrenome: null,
		cpf: null,
	});
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    apiClientes.getSingle(props.match.params.id)
      .then(response => setCliente(response))
  }, []);

  useEffect(() => {
		if(errors.ok) {
			apiClientes.put({...cliente})
				.then(response => console.log(response));
			history.push('/clientes/redirect');
		}
	}, [errors]);

  const handleInputs = (event) => {
    const {name, value} = event.target;
    setCliente({...cliente, [name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
		setErrors(validate(cliente));
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
				value={cliente.nome}
        error={errors.nome}
				onChange={handleInputs} 
			/>
      <Form.Input 
				name='sobrenome'
				label={InputInfoSobrenome}
				value={cliente.sobrenome}
        error={errors.sobrenome}
				onChange={handleInputs} 
			/>

      <Form.Select
        name='sexo'selection
        label={InputInfoSexo}
        options={genderOptions}
        onChange={(event, data) => setCliente({...cliente, sexo:data.value})}
        defaultValue={cliente.sexo}
      />
      <Form.Input 
        name='cpf'
        label={InputInfoCpf}
        value={cliente.cpf}
        error={errors.cpf}
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
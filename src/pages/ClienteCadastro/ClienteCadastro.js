import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import apiClientes from '../../service/individuals/apiClientes';

import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';

import {InputInfoNome, InputInfoSobrenome, InputInfoCpf, InputInfoSexo} from '../../domain_files/Cliente/ClienteInputInfo';
import validate from '../../validations/Formularios/Cliente/clienteValidation';
import genderOptions from '../../util/genderOptions';

const CadastroCliente = () => {
	const history = useHistory();
	const [errors, setErrors] = useState({
		nome: null,
		sobrenome: null,
		cpf: null,
	});
	const [cliente, setCliente] = useState({
		nome: '',
		sobrenome: '',
		cpf: '',
		sexo: genderOptions[0].value,
		endereco:{}, 
		contato:{}
	});

	useEffect(() => {
		console.log(errors);
		if(errors.ok) {
			apiClientes.post({...cliente})
				.then(response => console.log(response));
			history.push('/clientes/redirect');
		}
	}, [errors])
	const handleInputs = (event) => {
		const {name, value} = event.target;
		setCliente({...cliente, [name]: value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(validate(cliente));
	}

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
			placeholder='Alberto'
			label={InputInfoNome} 
			value={cliente.nome}
			error={errors.nome}
			onChange={handleInputs}
		/>
		<Form.Input 
			name='sobrenome' 
			placeholder='Pereira' 
			label={InputInfoSobrenome} 
			value={cliente.sobrenome}
			error={errors.sobrenome}
			onChange={handleInputs}
		/>
		<Form.Select
			name='sexo'
			selection
			label={InputInfoSexo}
			options={genderOptions}
			onChange={(event, data) => setCliente({...cliente, sexo:data.value})}
			defaultValue={genderOptions[0].value}
		/>
		<Form.Input 
			name='cpf'
			placeholder='Alberto'
			label={InputInfoCpf} 
			value={cliente.cpf}
			error={errors.cpf}
			onChange={handleInputs} 
		/>
		</Form.Group>
		<Form.Group widths='equal'>
		
		</Form.Group>
		<Endereco reference={cliente.endereco} />
		<Contato reference={cliente.contato}/>
		<Form.Button primary submit>Cadastrar</Form.Button>
	</Form>
	</React.Fragment>
	)
};

export default CadastroCliente;
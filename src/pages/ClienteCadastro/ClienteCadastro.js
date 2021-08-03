import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import apiClientes from '../../service/individuals/apiClientes';

import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';

import {InputInfoNome, InputInfoSobrenome, InputInfoCpf, InputInfoSexo} from '../../domain_files/Cliente/ClienteInputInfo';

import genderOptions from '../../util/genderOptions';

const CadastroCliente = () => {
	const history = useHistory();
	const [cliente, setCliente] = useState({
		nome: '',
		sobrenome: '',
		cpf: '',
		sexo: genderOptions[0].value,
		endereco:{}, 
		contato:{}
	});

	const handleInputs = (event) => {
		const {name, value} = event.target;
		setCliente({...cliente, [name]: value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		apiClientes.post({...cliente})
			.then(response => console.log(response));
		history.push('/clientes');
	}

	return (
	<React.Fragment>
	<Form>
		<FormularioHeader
			icon='address book'
			header='Cadastro de Clientes'
			subheader='Adição de novos Clientes ao Sistema'
		/>
		<Form.Group widths='equal'>
		<Form.Input 
			name='nome'
			label={InputInfoNome} 
			placeholder='Alberto'
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
			name='sexo'
			selection
			label={InputInfoSexo}
			options={genderOptions}
			onChange={(event, data) => setCliente({...cliente, sexo:data.value})}
			defaultValue={genderOptions[0].value}
		/>
		</Form.Group>
		<Form.Group widths='equal'>
		<Form.Input 
			name='cpf'
			label={InputInfoCpf} 
			placeholder='Alberto'
			value={cliente.cpf}
			onChange={handleInputs} 
		/>
		</Form.Group>
		<Endereco reference={cliente.endereco} />
		<Contato reference={cliente.contato}/>
		<Form.Button primary onClick={handleSubmit}>Cadastrar</Form.Button>
	</Form>
	</React.Fragment>
	)
};

export default CadastroCliente;
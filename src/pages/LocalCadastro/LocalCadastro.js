import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

import apiLocais from '../../service/individuals/apiLocais';

import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import Endereco from '../../components/Endereco';

const LocalCadastro = () => {
	const history = useHistory();
	const [local, setLocal] = useState({
		endereco:{}
	});

	const handleInputs = (event) => {
		const {name, value} = event.target;
		setLocal({...local, [name]: value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		apiLocais.post({...local})
			.then(response => console.log(response));
		history.push('/locais');
	}

	return (
		<React.Fragment>
			<Form>
				<FormularioHeader 
					icon='map marker'
					header='Cadastro de Locais'
					subheader='Adição de novos Locais ao Sistema'
				/>
				<Form.Input 
					name='nome'
					label='Nome'
					value={local.nome}
					onChange={handleInputs}
				/>
				<Endereco reference={local.endereco} />
				<Form.Button primary onClick={handleSubmit}>Cadastrar</Form.Button>
			</Form>
		</React.Fragment>
	);
};

export default LocalCadastro;
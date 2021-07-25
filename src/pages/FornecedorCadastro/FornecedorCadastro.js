import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Form, Label} from 'semantic-ui-react';
import Endereco from '../../components/Endereco';
import Contato from '../../components/Contato';

import apiFornecedores from '../../service/individuals/apiFornecedores';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';


const FornecedorCadastro = () => {
	const history = useHistory();
	const [fornecedor, setFornecedor] = useState({
		endereco:{}, 
		contato:{}
	});


	const handleInputs = (event) => {
		const {name, value} = event.target;
		setFornecedor({...fornecedor, [name]: value});
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		apiFornecedores.post({...fornecedor})
			.then(response => console.log(response));
		history.push('/fornecedores');
	}

	return(
		<React.Fragment>
		<Form>
			<FormularioHeader 
				icon='handshake outline' 
				header='Cadastro de Fornecedores' 
				subheader='Adição de novos Fornecedores ao Sistema'
			/>
			<Form.Group widths='equal'>
			<Form.Input 
				name='nomeFantasia'
				label='Nome Fantasia' 
				placeholder='Hana Flores'
				value={fornecedor.nomeFantasia}
				onChange={handleInputs}
				error={null}
			/>
			<Form.Input 
				name='razaoSocial'
				label='Razão Social' 
				placeholder='Hana Pereira'
				value={fornecedor.razaoSocial}
				onChange={handleInputs}
				error={null}
				/>
			<Form.Input 
				name='cnpj'
				label='CNPJ' 
				placeholder='Hana Pereira'
				value={fornecedor.cnpj}
				onChange={handleInputs}
				error={"Nome Inválido"}
				/>
			</Form.Group>
			<Endereco reference={fornecedor.endereco} />
			<Contato reference={fornecedor.contato}/>
			<Form.Button primary onClick={handleSubmit}>Cadastrar</Form.Button>
		</Form>
		</React.Fragment>
	);
}
export default FornecedorCadastro;
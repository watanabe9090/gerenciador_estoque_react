import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Form, Label} from 'semantic-ui-react';
import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';

import apiFornecedores from '../../service/individuals/apiFornecedores';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import { InputInfoNomeFantasia, InputInfoRazaoSocial, InputInfoCnpj } from '../../domain_files/Fornecedor/FornecedorInputInfo';


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
				label={InputInfoNomeFantasia} 
				placeholder='Hana Flores'
				value={fornecedor.nomeFantasia}
				onChange={handleInputs}
				error={null}
			/>
			<Form.Input 
				name='razaoSocial'
				label={InputInfoRazaoSocial} 
				placeholder='Hana Pereira'
				value={fornecedor.razaoSocial}
				onChange={handleInputs}
				error={null}
				/>
			<Form.Input 
				name='cnpj'
				label={InputInfoCnpj}
				placeholder='Hana Pereira'
				value={fornecedor.cnpj}
				onChange={handleInputs}
				error={null}
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
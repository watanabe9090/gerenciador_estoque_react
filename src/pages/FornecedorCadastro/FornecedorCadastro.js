import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Form, Label} from 'semantic-ui-react';
import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';

import apiFornecedores from '../../service/individuals/apiFornecedores';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import { InputInfoNomeFantasia, InputInfoRazaoSocial, InputInfoCnpj } from '../../domain_files/Fornecedor/FornecedorInputInfo';
import { validate } from '../../validations/Formularios/Fornecedor/fornecedorValidations';


const FornecedorCadastro = () => {
	const history = useHistory();
	const [errors, setErrors] = useState({
		cnpj: null,
		nomeFantasia: null,
		razaoSocial: null,
	});
	const [fornecedor, setFornecedor] = useState({
		cnpj: '',
		nomeFantasia: '',
		razaoSocial: '',
		endereco:{}, 
		contato:{}
	});

	const handleInputs = (event) => {
		const {name, value} = event.target;
		setFornecedor({...fornecedor, [name]: value});
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(validate(fornecedor));
	}

	useEffect(() => {
		console.log(errors);
		if(errors.ok == true) {
			apiFornecedores.post({...fornecedor})
				.then(response => console.log(response));
			history.push('/fornecedores');
		}
	}, [errors])

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
				placeholder='Hana Flores'
				label={InputInfoNomeFantasia} 
				value={fornecedor.nomeFantasia}
				error={errors.nomeFantasia}
				onChange={handleInputs}
			/>
			<Form.Input 
				name='razaoSocial'
				placeholder='Hana Pereira'
				label={InputInfoRazaoSocial} 
				value={fornecedor.razaoSocial}
				error={errors.razaoSocial}
				onChange={handleInputs}
				/>
			<Form.Input 
				name='cnpj'
				placeholder='Hana Pereira'
				label={InputInfoCnpj}
				value={fornecedor.cnpj}
				error={errors.cnpj}
				onChange={handleInputs}
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
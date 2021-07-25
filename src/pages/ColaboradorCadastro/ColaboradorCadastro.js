import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import Endereco from '../../components/Endereco';
import Contato from '../../components/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';

import genderOptions from '../../util/genderOptions';
import apiColaboradores from '../../service/individuals/apiColaboradores';

const CadastroColaborador = () => {
	const history = useHistory();
	const [colaborador, setColaborador] = useState({
		sexo: genderOptions[0].value,
		endereco:{}, 
		contato:{}
	});

	const handleInputs = (event) => {
		const {name, value} = event.target;
		setColaborador({...colaborador, [name]: value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		apiColaboradores.post({...colaborador})
			.then(response => console.log(response));
		history.push('/colaboradores');
	}

	return (
	<React.Fragment>
	<Form>
		<FormularioHeader
			icon='id badge'
			header='Cadastro de Colaboradores'
			subheader='Adição de novos Colaboradores ao Sistema'
		/>
		<Form.Group widths='equal'>
		<Form.Input 
			name='nome'
			label='Nome' 
			placeholder='Alberto'
			value={colaborador.nome}
			onChange={handleInputs} 
		/>
		<Form.Input 
			name='sobrenome' 
			label='Sobrenome' 
			placeholder='Pereira' 
			value={colaborador.sobrenome}
			onChange={handleInputs}
		/>
		<Form.Select
			name='sexo'
			selection
			label='Sexo'
			options={genderOptions}
			onChange={(event, data) => setColaborador({...colaborador, sexo:data.value})}
			defaultValue={genderOptions[0].value}
		/>
		</Form.Group>
		<Form.Group widths='equal'>
		<Form.Input 
			name='cpf'
			label='CPF' 
			placeholder='Alberto'
			value={colaborador.cpf}
			onChange={handleInputs} 
		/>
    <Form.Input
      name='dataNascimento'
      label="Data de Nascimento"
      value={colaborador.dataNascimento}
      onChange={handleInputs}
    >
      <input type='date'></input>
    </Form.Input>
		</Form.Group>
		<Endereco reference={colaborador.endereco} />
		<Contato reference={colaborador.contato}/>
		<Form.Button primary onClick={handleSubmit}>Cadastrar</Form.Button>
	</Form>
	</React.Fragment>
	)
};

export default CadastroColaborador;
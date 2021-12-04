import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';

import genderOptions from '../../util/genderOptions';
import apiColaboradores from '../../service/individuals/apiColaboradores';
import  {
  InputInfoNome,
  InputInfoSobrenome,
  InputInfoSexo,
  InputInfoCpf,
  InputInfoDataNascimento
} from '../../domain_files/Colaborador/ColaboradorInputInfo';

const CadastroColaborador = () => {
	const history = useHistory();
	const [colaborador, setColaborador] = useState({
		nome: '',
		sobrenome: '',
		cpf: '',
		dataNascimento: '',
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
		console.log(colaborador)
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
			label={InputInfoNome} 
			placeholder='Alberto'
			value={colaborador.nome}
			onChange={handleInputs} 
		/>
		<Form.Input 
			name='sobrenome' 
			label={InputInfoSobrenome} 
			placeholder='Pereira' 
			value={colaborador.sobrenome}
			onChange={handleInputs}
		/>
		<Form.Select
			name='sexo'
			selection
			label={InputInfoSexo}
			options={genderOptions}
			onChange={(event, data) => setColaborador({...colaborador, sexo:data.value})}
			defaultValue={genderOptions[0].value}
		/>
		</Form.Group>
		<Form.Group widths='equal'>
		<Form.Input 
			name='cpf'
			label={InputInfoCpf}
			placeholder='Alberto'
			value={colaborador.cpf}
			onChange={handleInputs} 
		/>
    <Form.Input
      name='dataNascimento'
      label={InputInfoDataNascimento}
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
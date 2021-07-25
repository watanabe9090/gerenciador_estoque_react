import React, { useState, useEffect } from 'react'
import { Form, Header, Icon, Divider } from 'semantic-ui-react'; 
import Axios from 'axios';


const Endereco = (props) => {
	const [bairro, setBairro] = useState(props.reference.bairro || '');
	const [cep, setCep] = useState(props.reference.cep || '');
	const [complemento, SetComplemento] = useState(props.reference.complemento || '');
	const [logradouro, setLogradouro] = useState(props.reference.logradouro || '');
	const [localidade, setLocalidade] = useState(props.reference.localidade || '');
	const [numero, setNumero] = useState(props.reference.numero || '');
	
	useEffect(() => {
		props.reference.cep = cep;
		props.reference.logradouro = logradouro;
		props.reference.bairro = bairro;
		props.reference.localidade = localidade;
		props.reference.complemento = complemento;
		props.reference.numero = numero;
	});
	
	const getCepData = (input) => {
		console.log(props.reference);
		if(input.length === 8){
			Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
			.then(response => {
				setCep(response.data.cep);
				setLogradouro(response.data.logradouro);
				setBairro(response.data.bairro);
				setLocalidade(response.data.localidade);
			})
			.catch(err => {
				console.log(err);
			});
		}
	}
	
	
	return (
		<Form>
			<Header as='h3'>
				<Icon name='thumbtack' />
				<Header.Content>Informações sobre Localização</Header.Content>
			</Header>
			<Divider />
			<Form.Group>
				<Form.Input 
					width='3'
					fluid 
					label='CEP' 
					placeholder='Ex: 06700158'
					value={cep}
					onBlur={event => getCepData(event.target.value)}
					onChange={event => setCep(event.target.value)} 
					/>
				<Form.Input 
					width='13'
					fluid 
					label='Logradouro' 
					placeholder='Alberto'
					value={logradouro}
					onChange={event => setLogradouro(event.target.value)} 
				/>
		</Form.Group>
		<Form.Group widths='equal'>
		<Form.Input 
		fluid 
		label='Bairro' 
		placeholder=''
		value={bairro}
		onChange={event => setBairro(event.target.value)} 
		/>
		<Form.Input 
		fluid 
		label='Localidade' 
		placeholder=''
		value={localidade}
		onChange={event => setLocalidade(event.target.value)} 
		/>
		</Form.Group>
		<Form.Group >
		<Form.Input
		width='12' 
		fluid 
		label='Complemento' 
		placeholder='Ex: Segundo andar'
		value={complemento}
		onChange={event => SetComplemento(event.target.value)} 
		/>
		<Form.Input
		width='4' 
		fluid 
		label='Número' 
		placeholder='902'
		value={numero}
		onChange={event => setNumero(event.target.value)} 
		/>
		</Form.Group>
		</Form>
		)
	};
	
	export default Endereco;
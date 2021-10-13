import React, { useState, useEffect } from 'react'
import { Form, Header, Icon, Divider } from 'semantic-ui-react'; 
import axios from 'axios';

import { InputInfoCep, InputInfoLogradouro, InputInfoBairro, InputInfoLocalidade, InputInfoNumero, InputInfoComplemento } from './EnderecoInputInfo';

const Endereco = (props) => {
	const [bairro, setBairro] = useState(props.reference.bairro || '');
	const [cep, setCep] = useState(props.reference.cep || '');
	const [complemento, setComplemento] = useState(props.reference.complemento || '');
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
	}, [bairro, cep, complemento, logradouro, localidade, numero]);
	
  const getCepData = (input) => {
    console.log(input)
		if(input.length === 8){
			axios.get(`https://viacep.com.br/ws/${cep}/json/`)
			.then(response => {
				//setCep(response.data.cep);
				setLogradouro(response.data.logradouro);
				setBairro(response.data.bairro);
				setLocalidade(response.data.localidade);
        console.log(response)
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
        name='cep'
        label={InputInfoCep} 
        placeholder='Ex: 06700158'
        value={cep}
        onBlur={event => getCepData(event.target.value)}
        onChange={event => setCep(event.target.value)} 
        />
      <Form.Input 
        width='13'
        name='logradouro'
        label={InputInfoLogradouro}
        placeholder='Avenida Antônio Mathias de Camargo'
        value={logradouro}
        onChange={event => setLogradouro(event.target.value)} 
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Input 
        name='bairro'
        label={InputInfoBairro}
        placeholder='Ex: Centro'
        value={bairro}
        onChange={event => setBairro(event.target.value)} 
      />
      <Form.Input 
        name='localidade'
        label={InputInfoLocalidade}
        placeholder='Ex: Osasco'
        value={localidade}
        onChange={event => setLocalidade(event.target.value)} 
      />
      </Form.Group>
      <Form.Group >
      <Form.Input
        name='complemento'
        width='12' 
        label={InputInfoComplemento} 
        placeholder='Ex: Segundo andar'
        value={complemento}
        onChange={event => setComplemento(event.target.value)} 
      />
      <Form.Input
        name='numero'
        width='4'  
        label={InputInfoNumero} 
        placeholder='Ex: 902'
        value={numero}
        onChange={event => setNumero(event.target.value)} 
      />
      </Form.Group>
		</Form>
		)
	};
	
	export default Endereco;
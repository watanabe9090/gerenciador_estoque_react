import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import genderOptions from '../../util/genderOptions';
import apiCliente from '../../service/individuals/apiClientes';

import Endereco from '../../components/Endereco';
import Contato from '../../components/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';


const ClienteAlteracao = (props) => {
  const history = useHistory();
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    apiCliente.getSingle(props.match.params.id)
      .then(response => setCliente(response));
  }, []);

  const handleInputs = (event) => {
    const {name, value} = event.target;
    setCliente({...cliente, [name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cliente)
    apiCliente.put({...cliente})
      .then(response => console.log(response));
    history.push('/clientes');
  }

  const renderSexo = () => {
    if(cliente.sexo !== undefined) {
      return<Form.Select
        name='sexo'
        selection
        label='Sexo'
        options={genderOptions}
        onChange={(event, data) => setCliente({...cliente, sexo:data.value})}
        defaultValue={cliente.sexo}
      />
    }
  } 

  const renderContato= () => {
    if(cliente.contato !== undefined) {
      return <Contato reference={cliente.contato}/>
    }
  }

  const renderEndereco = () => {
    if(cliente.endereco !== undefined) {
      return <Endereco reference={cliente.endereco} />
    }
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
				label='Nome' 
				placeholder='Hana'
				value={cliente.nome}
				onChange={handleInputs} 
			/>
      <Form.Input 
				name='sobrenome'
				label='Sobrenome' 
				placeholder='Pereira'
				value={cliente.sobrenome}
				onChange={handleInputs} 
			/>

      {renderSexo()}

      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Input 
        name='cpf'
        label='CPF' 
        placeholder='1231231232'
        value={cliente.cpf}
        onChange={handleInputs} 
      />
      </Form.Group>
      {renderEndereco()}
			{renderContato()}
			<Form.Button primary onClick={handleSubmit}>Atualizar</Form.Button>
      </Form>
    </React.Fragment>
  );
}

export default ClienteAlteracao;
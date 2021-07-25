import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import genderOptions from '../../util/genderOptions';
import apiColaboradores from '../../service/individuals/apiColaboradores';

import Endereco from '../../components/Endereco';
import Contato from '../../components/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';


const ColaboradorAlteracao = (props) => {
  const history = useHistory();
  const [colaborador, setColaborador] = useState({});

  useEffect(() => {
    apiColaboradores.getSingle(props.match.params.id)
      .then(response => setColaborador(response));
  }, []);

  const handleInputs = (event) => {
    const {name, value} = event.target;
    setColaborador({...colaborador, [name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(colaborador)
    apiColaboradores.put({...colaborador})
      .then(response => console.log(response));
    history.push('/colaboradores');
  }

  const renderSexo = () => {
    if(colaborador.sexo !== undefined) {
      return<Form.Select
        name='sexo'
        selection
        label='Sexo'
        options={genderOptions}
        onChange={(event, data) => setColaborador({...colaborador, sexo:data.value})}
        defaultValue={colaborador.sexo}
      />
    }
  } 

  const renderContato= () => {
    if(colaborador.contato !== undefined) {
      return <Contato reference={colaborador.contato}/>
    }
  }

  const renderEndereco = () => {
    if(colaborador.endereco !== undefined) {
      return <Endereco reference={colaborador.endereco} />
    }
  }

  return (
    <React.Fragment>
      <Form>
			<FormularioHeader
        icon='id badge'
        header='Cadastro de colaboradores'
        subheader='Adição de novos colaboradores ao Sistema'
		  />
      <Form.Group widths='equal'>
			<Form.Input 
				name='nome'
				label='Nome' 
				placeholder='Hana'
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

      {renderSexo()}

      </Form.Group>
      <Form.Group>
      <Form.Input 
        name='cpf'
        label='CPF' 
        placeholder='1231231232'
        value={colaborador.cpf}
        onChange={handleInputs} 
        width='10'
      />
      </Form.Group>
      {renderEndereco()}
			{renderContato()}
			<Form.Button primary onClick={handleSubmit}>Atualizar</Form.Button>
      </Form>
    </React.Fragment>
  );
}

export default ColaboradorAlteracao;
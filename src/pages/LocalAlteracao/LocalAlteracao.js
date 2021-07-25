import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import apiLocais from '../../service/individuals/apiLocais';

import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import Endereco from '../../components/Endereco';

const LocalAlteracao = (props) => {
  const history = useHistory();
  const [local, setLocal] = useState({});
  useEffect(() => {
    apiLocais.getSingle(props.match.params.id)
      .then(response => setLocal(response));
  }, []);

  const handleInputs = (event) => {
    const {name, value} = event.target;
    setLocal({...local, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiLocais.put({...local})
      .then(response => console.log(response));
    history.push('/locais');
  }

  const renderEndereco = () => {
    if(local.endereco !== undefined) {
      return <Endereco reference={local.endereco} />
    }
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
				placeholder='Reservatório A'
				value={local.nome}
				onChange={handleInputs} 
			/>
      {renderEndereco()}
			<Form.Button primary onClick={handleSubmit}>Atualizar</Form.Button>
    </Form>
    </React.Fragment>
  );
}

export default LocalAlteracao;
import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react';
import { useHistory } from 'react-router';

import apiSetores from '../../service/individuals/apiSetores';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import { InputInfoNome } from '../../domain_files/Setor/SetorInputInfo';

const SetorAlteracao = (props) => {
  const history = useHistory();
  const [setor, setSetor] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    apiSetores.put({...setor})
      .then(response => console.log(response));
    history.push('/setores');
  }

  useEffect(() => {
    apiSetores.getSingle(props.match.params.id)
      .then(response => setSetor(response));
  }, []);

  const nomeInputRender = () => {
    return (
    <>
      <Form.Input 
        name='nome'
        label={InputInfoNome}
        value={setor.nome}
        onChange={event => setSetor({...setor, nome: event.target.value})}
      />
      <Form.Button primary onClick={handleSubmit}>Atualizar Setor</Form.Button>
    </>
    );
  }

  return (
    <React.Fragment>
      <Form>
      <FormularioHeader 
        icon='briefcase'
        header='Adicionar Setores'
        subheader='Adicionar Setores ao Local'
      />
      {setor.nome && nomeInputRender()}
    </Form>
    </React.Fragment>
  );
};

export default SetorAlteracao;
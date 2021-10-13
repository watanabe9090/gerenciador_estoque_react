import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react';
import { useHistory } from 'react-router';

import apiMarcas from '../../service/individuals/apiMarcas';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import { InputInfoNome } from '../../domain_files/Marca/MarcaInputInfo';

const MarcaAlteracao = (props) => {
  const history = useHistory();
  const [marca, setMarca] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    apiMarcas.put({...marca})
      .then(response => console.log(response));
    history.push('/marcas');
  }

  useEffect(() => {
    apiMarcas.getSingle(props.match.params.id)
      .then(response => setMarca(response));
  }, []);

  const nomeInputRender = () => {
    return (
    <>
      <Form.Input 
        name='nome'
        label={InputInfoNome}
        value={marca.nome}
        onChange={event => setMarca({...marca, nome: event.target.value})}
      />
      <Form.Button primary onClick={handleSubmit}>Atualizar Marca</Form.Button>
    </>
    );
  }

  return (
    <React.Fragment>
      <Form>
      <FormularioHeader 
        icon='briefcase'
        header='Adicionar Marcas'
        subheader='Adicionar Marcas ao Fornecedor'
      />
      {marca.nome && nomeInputRender()}
    </Form>
    </React.Fragment>
  );
};

export default MarcaAlteracao;
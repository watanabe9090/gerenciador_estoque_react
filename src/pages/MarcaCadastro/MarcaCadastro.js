import React, { useState, useEffect } from 'react'
import { Form, Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import apiFornecedores from '../../service/individuals/apiFornecedores';
import apiMarcas from '../../service/individuals/apiMarcas';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';
import { InputInfoFornecedor, InputInfoNome } from '../../domain_files/Marca/MarcaInputInfo';

const MarcaCadastro = () => {
  const history = useHistory();
  const [fornecedores, setFornecedores] = useState([]);
  const [fornecedorMarcas, setFornecedorMarcas] = useState([]);
  const [marca, setMarca] = useState({fornecedorId:1});

  const handleSubmit = (event) => {
    event.preventDefault();
    apiMarcas.post({...marca})
      .then(response => console.log(response));
    history.push('/marcas');
  }

  const buscarMarcas = () => {
    apiMarcas.getByParam("fornecedorId", marca.fornecedorId)
      .then(response => setFornecedorMarcas(response));
  }

  useEffect(() => {
    apiFornecedores.getAll()
      .then(response => {
        const data = response.content.map(fornecedor => ({value: fornecedor.id, text:fornecedor.nomeFantasia}))
        setFornecedores(data);
    });
  }, []);


  return (
    <React.Fragment>
      <Form>
      <FormularioHeader 
        icon='briefcase'
        header='Adicionar Marcas'
        subheader='Adicionar Marcas ao Fornecedor'
      />
      <Form.Field>
        <label>Fornecedores</label>
        <Dropdown 
          placeholder='Selecione um fornecedor'
          search
          selection
          options={fornecedores}
          onChange={(event, data) => {
            setMarca({...marca, fornecedorId:data.value});
            buscarMarcas();
          }}
        />
      </Form.Field>
      <Form.Input 
        name='nome'
        label={InputInfoNome}
        value={marca.nome}
        disabled={false}
        onChange={event => setMarca({...marca, nome:event.target.value})}
      />
    <Form.Button primary onClick={handleSubmit}>Cadastrar Marcas</Form.Button>
    </Form>
    </React.Fragment>
  );
};

export default MarcaCadastro;
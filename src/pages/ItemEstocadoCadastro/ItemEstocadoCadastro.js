import React, { useState, useEffect, useReducer } from 'react'
import {Dropdown, Form, Input} from 'semantic-ui-react';

import FormHeader from '../../components/FormHeader/FormHeader';

import apiFornecedores from '../../service/individuals/apiFornecedores';
import apiMarcas from '../../service/individuals/apiMarcas';
import apiLocais from '../../service/individuals/apiLocais';
import apiSetores from '../../service/individuals/apiSetores';
import apiItensEstocados from '../../service/individuals/apiItensEstocados';

import { InputInfoNome, InputInfoCodigo, InputInfoFornecedor, InputInfoMarca,
InputInfoLocal, InputInfoSetor, InputInfoUnidade, InputInfoDataFabricacao, InputInfoDataVencimento,
InputInfoPrecoCompra, InputInfoPrecoVenda, InputInfoDescricao, InputInfoDescricaoReduzida } from '../../domain_files/ItemEstocado/ItemEstocadoInputInfo';

import { validacao } from '../../validations/Formularios/ItemEstocado/itemEstocadoValidations';
import Mensagem from '../../components/Mensagem/Mensagem';


const ItemEstocadoCadastro = () => {
  const [fornecedores, setFornecedores] = useState();
  const [currentFornecedor, setCurrentFornecedor] = useState(-1);
  const [locais, setLocais] = useState([]);
  const [currentLocal, setCurrentLocal] = useState(-1);
  const [marcas, setMarcas] = useState([]);
  const [setores, setSetores] = useState([]);

  const [form, setForm] = useState({})
  
  useEffect(() => {
    buscarFornecedores();
    buscarLocais();
  }, []);

  useEffect(() => {
    if(currentFornecedor !== -1) 
      buscarMarcas();
  }, [currentFornecedor]);

  useEffect(() => {
    if(currentLocal !== -1)
      buscarSetores();
  }, [currentLocal]);


  const buscarFornecedores = () => {
    apiFornecedores.getAll()
    .then(response => {
      const data = response.content.map(fornecedor => (
        {value: fornecedor.id, text:fornecedor.nomeFantasia}
      ));
      setFornecedores(data);
    })
  }

  const buscarMarcas = () => {
    apiMarcas.getByParam('fornecedorId', currentFornecedor)
      .then(response => {
        const data = response.map(marca => (
          {value:marca.id, text:marca.nome}
        ))
        setMarcas(data);
      });
  }

  const buscarLocais = () => {
    apiLocais.getAll()
    .then(response => {
      const data = response.content.map(local => (
        {value: local.id, text: local.nome}
      ))
      setLocais(data);
    })
  }

  const buscarSetores = () => {
    apiSetores.getByParam('localId', currentLocal)
    .then(response => {
      const data = response.map(setor => ({value:setor.id, text:setor.nome}))
      setSetores(data);
    })
  }

  const handleChanges = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    apiItensEstocados.post({...form})
    .then(response => console.log(response))
    console.log(form);
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
      <FormHeader
        icon='address book'
        header='Cadastro de Mercadorias'
        subheader='Adição de novas Mercadorias ao Sistema'
		  />
      <Form.Group >
        <Form.Input
          width='5' 
          name='codigo'
          label={InputInfoCodigo} 
          placeholder='Magnus Adulto carne'
          value={form.codigo}
          onChange={handleChanges} 
        />
        <Form.Input 
          name='nome'
          width='11'
          label={InputInfoNome}
          placeholder='Magnus Adulto carne'
          value={form.nome}
          onChange={handleChanges}
        />
      </Form.Group>

      <Form.Group>
      <Form.Field>
        {InputInfoFornecedor}
        <Dropdown 
          placeholder='Selecione um fornecedor'
          search
          selection
          options={fornecedores}
          onChange={(event, data) => setCurrentFornecedor(data.value)}
        />
      </Form.Field>
      <Form.Field>
        {InputInfoMarca}
        <Dropdown 
          placeholder='Selecione uma marca do fornecedor'
          search
          selection
          options={marcas}
          onChange={(event, data) => setForm({...form, marcaId:data.value})}
        />
      </Form.Field>
      </Form.Group>

      <Form.Group>
      <Form.Field>
        {InputInfoLocal}
        <Dropdown 
          placeholder='Selecione um Local'
          search
          selection
          options={locais}
          onChange={(event, data) => setCurrentLocal(data.value)}
          
        />
      </Form.Field>
      <Form.Field>
        {InputInfoSetor}
        <Dropdown 
          placeholder='Selecione um Setor'
          search
          selection
          options={setores}
          onChange={(event, data) => setForm({...form, setorId: data.value})}
        />
      </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field width='3'>
          {InputInfoUnidade}
          <Input
            name='unidade' 
            placeholder='Metro'
            value={form.unidade}
            onChange={handleChanges} 
          />
        </Form.Field>
        <Form.Field width='4'>
          {InputInfoPrecoCompra}
          <Input 
            name='precoCompra'
            onInputChange={console.log("HIII")}
            label={{basic: true, content:'R$'}}
            labelPosition='right'
            placeholder='10,90'
            value={form.precoCompra}
            onChange={handleChanges} 
          />
        </Form.Field>
        <Form.Field width='4'>
          {InputInfoPrecoVenda}
          <Input 
            name='precoVenda'
            label={{basic: true, content:'R$'}}
            labelPosition='right'
            placeholder='22,90'
            value={form.precoVenda}
            onChange={handleChanges} 
          />
        </Form.Field>
      </Form.Group>

      <Form.Group>
      <Form.Field>
        {InputInfoDataFabricacao}
        <Input
          name='dataFabricacao'
          type='date'
          width='4'
          value={form.dataFabricacao}
          onChange={handleChanges}  
        />
      </Form.Field>

      <Form.Field>
        {InputInfoDataVencimento}
        <Input
          name='dataVencimento'
          type='date'
          width='4'
          value={form.dataVencimento}
          onChange={handleChanges}  
        />
      </Form.Field>
      </Form.Group>

      <Form.Input 
        name='descricaoReduzida'
        label={InputInfoDescricaoReduzida} 
        placeholder='22,90'
        value={form.descricaoReduzida}
        onChange={handleChanges} 
      />
      <Form.TextArea 
        name='descricao'
        label={InputInfoDescricao}
        value={form.descricao}
        onChange={handleChanges}
      />
      <Form.Button primary >Cadastrar</Form.Button>
      </Form>
      <Mensagem />
    </React.Fragment>
  );
}
export default ItemEstocadoCadastro;
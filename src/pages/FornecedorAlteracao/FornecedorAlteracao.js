import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Form, Popup, Label, Icon } from 'semantic-ui-react';

import apiFornecedores from '../../service/individuals/apiFornecedores';

import Endereco from '../../components/Endereco/Endereco';
import Contato from '../../components/Contato/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';

import { validate } from '../../validations/Formularios/Fornecedor/fornecedorValidations';

import { InputInfoNomeFantasia, InputInfoRazaoSocial, InputInfoCnpj } from '../../domain_files/Fornecedor/FornecedorInputInfo';

import NotFound from '../../components/NotFound/NotFound'

const FornecedorAlteracao = (props) => {
  const history = useHistory();
  const [fornecedor, setFornecedor] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(async ()=>{
    apiFornecedores.getSingle(props.match.params.id)
      .then(response => setFornecedor(response))
      .catch(error => console.log(error));
  }, []);


  const handleInputs = (event) => {
    const {name, value} = event.target;
    setFornecedor({...fornecedor, [name]:value});
  }

  useEffect(() => {
    if(errors.initialize && Object.keys(errors).length == 1) {
      apiFornecedores.put({...fornecedor})
        .then(response => console.log(response));
      history.push('/fornecedores');
    }
  },[errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(fornecedor));
  }

  const render = () => {
    if(fornecedor.contato) {
    return(
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
			<FormularioHeader 
				icon='handshake outline' 
				header='Alterar Fornecedor' 
				subheader='Alteracao de Atributos de cadastro'
			/>
      <Form.Group widths='equal'>
			<Form.Input 
				name='nomeFantasia'
				label={InputInfoNomeFantasia}
				placeholder='Hana Flores'
				value={fornecedor.nomeFantasia}
				onChange={handleInputs}
        error={errors.nomeFantasia}
			/>
			<Form.Input 
				name='razaoSocial'
				label={InputInfoRazaoSocial}
				placeholder='Hana Pereira'
				value={fornecedor.razaoSocial}
				onChange={handleInputs}
        error={errors.razaoSocial}
			/>
			<Form.Input 
				name='cnpj'
				label={InputInfoCnpj}
				placeholder='Hana Pereira'
				value={fornecedor.cnpj}
				onChange={handleInputs} 
        error={errors.cnpj}
			/>
			</Form.Group>
      {fornecedor.endereco && <Endereco reference={fornecedor.endereco} />}
      {fornecedor.contato && <Contato reference={fornecedor.contato}/>}
			<Form.Button primary submit>Atualizar</Form.Button>
      </Form>
    </React.Fragment>
    )} else {
      return <NotFound />
    }
  }
  return render()
}
export default FornecedorAlteracao;

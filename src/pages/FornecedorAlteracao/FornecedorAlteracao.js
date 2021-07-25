import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Form } from 'semantic-ui-react';

import apiFornecedores from '../../service/individuals/apiFornecedores';

import Endereco from '../../components/Endereco';
import Contato from '../../components/Contato';
import FormularioHeader from '../../components/Formulario/FormularioHeader/FormularioHeader';

const FornecedorAlteracao = (props) => {
  const history = useHistory();
  const [fornecedor, setFornecedor] = useState({});

  useEffect(async ()=>{
    apiFornecedores.getSingle(props.match.params.id)
      .then(response => setFornecedor(response));
  }, []);

  const handleInputs = (event) => {
    const {name, value} = event.target;
    setFornecedor({...fornecedor, [name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiFornecedores.put({...fornecedor})
      .then(response => console.log(response));
    history.push('/fornecedores');
  }

  const renderContato= () => {
    if(fornecedor.contato !== undefined) {
      return <Contato reference={fornecedor.contato}/>
    }
  }

  const renderEndereco = () => {
    if(fornecedor.endereco !== undefined) {
      return <Endereco reference={fornecedor.endereco} />
    }
  }

  return (
    <React.Fragment>
      <Form>
			<FormularioHeader 
				icon='handshake outline' 
				header='Alterar Fornecedor' 
				subheader='Alteracao de Atributos de cadastro'
			/>
      <Form.Group widths='equal'>
			<Form.Input 
				name='nomeFantasia'
				label='Nome Fantasia' 
				placeholder='Hana Flores'
				value={fornecedor.nomeFantasia}
				onChange={handleInputs} 
			/>
			<Form.Input 
				name='razaoSocial'
				label='Razão Social' 
				placeholder='Hana Pereira'
				value={fornecedor.razaoSocial}
				onChange={handleInputs} 
			/>
			<Form.Input 
				name='cnpj'
				label='CNPJ' 
				placeholder='Hana Pereira'
				value={fornecedor.cnpj}
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
export default FornecedorAlteracao;
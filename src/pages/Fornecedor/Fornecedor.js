import React, {useState, useEffect} from 'react';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody'
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes'
import ListagemBodyTelefones from '../../components/Listagem/ListagemBody/ListagemBodyTelefones/ListagemBodyTelefones';

import apiFornecedores from '../../service/individuals/apiFornecedores'

const Fornecedor = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const headerRow = ['Nome Fantasia', 'Razão Social', 'E-mail', 'CNPJ', 'Telefones', 'Opcoes'];
  const renderBodyRow = ({id, nomeFantasia, razaoSocial, contato, cnpj}, index) => ({
    key: id,
    cells: [
      nomeFantasia || '',
      razaoSocial || '',
      contato.email || '',
      cnpj || '',
      <ListagemBodyTelefones fixo={contato.telefoneFixo} celular={contato.telefoneCelular} />,
      <ListagemBodyOpcoes path='/fornecedores' id={id} />
    ]
  });

  useEffect(() => {
    apiFornecedores.getAll()
      .then(response => setFornecedores(response.content))
  }, []);

  return(
    <React.Fragment>
      <ListagemHeader icon='handshake outline' content='Fornecedores'/>
      <ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={fornecedores} />
    </React.Fragment>
  );
}
export default Fornecedor;

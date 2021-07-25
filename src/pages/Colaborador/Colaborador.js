import React, { useState, useEffect } from 'react';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import ListagemBodyTelefones from '../../components/Listagem/ListagemBody/ListagemBodyTelefones/ListagemBodyTelefones';
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes'

import sexos from '../../util/sexos';
import apiColaboradores from '../../service/individuals/apiColaboradores';


const Colaborador = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const headerRow = ['Nome', 'E-mail', 'CPF', 'Sexo', 'Telefones', 'Opções'];
	const renderBodyRow = ({id, nome, sobrenome, cpf, sexo, contato}, index) => ({
		key: id,
		cells: [
			nome + ' ' + sobrenome,
			contato.email,
			cpf,
			sexos[sexo],
			<ListagemBodyTelefones fixo={contato.telefoneFixo} celular={contato.telefoneCelular} />,
			<ListagemBodyOpcoes path='/colaboradores' id={id} />
		]
	});

  useEffect(() => {
    apiColaboradores.getAll()
      .then(response => setColaboradores(response.content))
  }, []);

  return (
    <React.Fragment>
			<ListagemHeader icon='id badge' content='Colaboradores'/>
			<ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={colaboradores}/>
		</React.Fragment>
  );

}

export default Colaborador;
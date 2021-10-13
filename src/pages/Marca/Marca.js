import React, { useState, useEffect } from 'react'


import apiMarcas from '../../service/individuals/apiMarcas';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes'

const Marca = () => {
  const [marcas, setMarcas] = useState([]);
	const headerRow = ['Nome', 'Fornecedor', 'Opções'];
	const renderBodyRow = ({id, nome, fornecedor}, index) => ({
		key: id,
		cells: [
			nome || '',
			fornecedor.nomeFantasia || '',
			<ListagemBodyOpcoes path='/marcas' id={id} />
		],
	})

  useEffect(() => {
    apiMarcas.getAll()
      .then(response => setMarcas(response.content));
  }, []);

  return (
    <React.Fragment>
      <ListagemHeader icon='star' content='Marcas' />
      <ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={marcas}/>
    </React.Fragment>
  );

};


export default Marca;
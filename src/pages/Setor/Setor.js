import React, { useState, useEffect } from 'react';

import apiSetores from '../../service/individuals/apiSetores';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes'

const Setor = () => { 
  const [setores, setSetores] = useState([]);
  
  const headerRow = ['Nome', 'Local', 'Opções'];
	const renderBodyRow = ({id, nome, local}, index) => ({
		key: id,
		cells: [
			nome,
			local.nome,
			<ListagemBodyOpcoes path='/marcas' id={id} />
		],
	})

  useEffect(() => {
    apiSetores.getAll()
      .then(response => setSetores(response.content));
  }, []);

  return (
    <React.Fragment>
      <ListagemHeader icon='sitemap' content='Setores' />
      <ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={setores}/>
    </React.Fragment>
  );

}

export default Setor;
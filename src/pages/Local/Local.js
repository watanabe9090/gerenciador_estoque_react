import React, {useState, useEffect}from 'react';

import apiLocais from '../../service/individuals/apiLocais';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes'

const Local = () => {
	const [locais, setLocais] = useState([]);
	const headerRow = ['Nome', 'Logradouro', 'Numero', 'Bairro', 'Opções'];
	const renderBodyRow = ({id, nome, endereco}, index) => ({
		key: id,
		cells: [
			nome || '',
			endereco.logradouro || '',
			endereco.numero|| '',
			endereco.bairro|| '',
			<ListagemBodyOpcoes path='/locais' id={id} />
		],
	})
	
	useEffect(() => {
		apiLocais.getAll()
			.then(response => setLocais(response.content))
	}, []);
	
	return (
		<React.Fragment>
			<ListagemHeader icon='map marker' content='Locais'/>
			<ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={locais}/>
		</React.Fragment>
	);
};
	
export default Local;
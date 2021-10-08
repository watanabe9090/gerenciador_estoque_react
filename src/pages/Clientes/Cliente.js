import React, {useState, useEffect} from 'react';
import apiClientes from '../../service/individuals/apiClientes';
import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import ListagemBodyTelefones from '../../components/Listagem/ListagemBody/ListagemBodyTelefones/ListagemBodyTelefones';
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes'
import sexos from '../../util/sexos';

const Cliente = () => {
	const [clientes, setClientes] = useState({});
	const headerRow = ['Nome', 'E-mail', 'CPF', 'Sexo', 'Telefones', 'Opções'];
	const renderBodyRow = ({id, nome, sobrenome, cpf, sexo, contato}, index) => ({
		key: id,
		cells: [
			nome + ' ' + sobrenome,
			contato.email || '',
			cpf,
			sexos[sexo],
			<ListagemBodyTelefones fixo={contato.telefoneFixo} celular={contato.telefoneCelular} />,
			<ListagemBodyOpcoes path='/clientes' id={id} />
		]
	});

	useEffect(() => {
		apiClientes.getAll()
		.then(response => setClientes(response.content));
	}, []);

	return (
		<React.Fragment>
			<ListagemHeader icon='address book' content='Clientes'/>
			<ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={clientes}/>
		</React.Fragment>
	);
}

export default Cliente;
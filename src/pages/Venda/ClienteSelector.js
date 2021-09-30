import React, {useState, useEffect} from 'react'
import { Dropdown, Select } from 'semantic-ui-react'
import apiClientes from '../../service/individuals/apiClientes';

const ClienteSelector = () => {

  const [clientes, setClientes] = useState([]);
  const [currentCliente, setCurrentCliente] = useState(-1);

  useEffect(() => {
    apiClientes.getAll()
    .then(response => {
      const data = response.content.map(cliente => ({value: cliente.id, text:`${cliente.nome} ${cliente.sobrenome}`}))
      setClientes(data);
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <React.Fragment>
      <label>Clientes</label>
      <Dropdown 
        placeholder='Seleciona um Cliente'
        search
        selection
        options={clientes}
        onChange={(event, data) => setCurrentCliente(data.value)}
      />
    </React.Fragment>
  )
}

export default ClienteSelector
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Table} from 'semantic-ui-react';
import NotFoundPage from '../NotFound/NotFoundPage';

const VendaDetalhes = (props) => {
  const [venda, setVenda] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/vendas/'+props.match.params.id)
        .then((response) => setVenda(response.data))
    }, [])

  const render = () => {
    if(Object.keys(venda).length !== 0) {
      const headerRow = ['Campo', 'Valor'];
      const renderBodyRow = ({field, value}, index) => ({
        key: index,
        cells: [field, value ]
      });
      const tableData = [
        {field:"ID:" , value: venda.vendaId || ''},
        {field:"Cliente", value: `${venda.cliente.nome} ${venda.cliente.sobrenome}` || ''},
        {field:"CPF do Cliente", value: venda.cliente.cpf || ''},
        {field:"Valor Total: ", value: `R$: ${venda.valor.toFixed(2)}` || ''},
        {field:"Data de Expedição", value: new Date(venda.dataCadastro).toLocaleString() || ''}
      ];

      const headerRowItems = ['Nome', 'Valor Unitário', 'Valor Total'];
      const renderBodyRowItems = ({field, valueU, valueT}, index) => ({
        key: index,
        cells: [field, valueU, valueT ]
      });
      const tableDataItems = venda.itensVendidos.map((i) => {
        return {
          field: i.itemEstocado.mercadoria.nome, 
          valueU: `R$: ${i.itemEstocado.precoVenda.toFixed(2)} - (${i.quantidade})`, 
          valueT: `R$: ${(i.itemEstocado.precoVenda * i.quantidade).toFixed(2)}`
        };
      });
      console.log(tableDataItems)
      return (
        <React.Fragment>
          <Table 
            celled
            headerRow={headerRow}
            renderBodyRow={renderBodyRow}
            tableData={tableData}
          />
          <h2>Mercadorias</h2>
          <Table 
            celled
            headerRow={headerRowItems}
            renderBodyRow={renderBodyRowItems}
            tableData={tableDataItems}
          />
        </React.Fragment>
      );
    } else return <NotFoundPage></NotFoundPage>
    
  }

  return render();
}

export default VendaDetalhes;
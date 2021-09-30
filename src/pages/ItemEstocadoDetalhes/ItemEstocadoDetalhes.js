import React, {useState, useEffect} from 'react';
import {Table} from 'semantic-ui-react';

import apiItensEstocados from '../../service/individuals/apiItensEstocados';

const ItemEstocadoDetalhes = (props) => {
  const [itemEstocado, setItemEstocado] = useState({});
  const headerRow = ['Campo', 'Valor'];
  const renderBodyRow = ({field, value}, index) => ({
    key: index,
    cells: [field, value]
  });
  const tableData = [
    {field:"Código:" ,value:itemEstocado.codigo},
    {field:"Nome", value:itemEstocado.nome},
    {field:"Unidade", value:itemEstocado.unidade},
    {field:"Preço de Compra", value:itemEstocado.precoCompra},
    {field:"Preço de Venda", value:itemEstocado.precoVenda},
    {field:"Data de Fabricação", value:itemEstocado.dataFabricacao},
    {field:"Data de Vencimento", value:itemEstocado.dataVencimento},
    {field:"Descrição", value:itemEstocado.descricao},
    {field:"Descrição Reduzida", value:itemEstocado.descricaoReduzida},
    {field:"Marca", value:itemEstocado.marcaNome},
    {field:"Fornecedor", value:itemEstocado.fornecedorNomeFantasia},
    {field:"Local", value:itemEstocado.localNome},
    {field:"Setor", value:itemEstocado.setorNome}
  ];

  useEffect(async () => {
    apiItensEstocados.getSingle(props.match.params.id)
      .then(response => {console.log(response); setItemEstocado(response)});
  },[])

  return (
    <React.Fragment>
    <Table 
      celled
      headerRow={headerRow}
      renderBodyRow={renderBodyRow}
      tableData={tableData}
    />
    </React.Fragment>
  );
}

export default ItemEstocadoDetalhes
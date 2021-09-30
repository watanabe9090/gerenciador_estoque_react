import React, { useState, useEffect } from 'react';

import apiItensEstocados from '../../service/individuals/apiItensEstocados';

import ListagemHeader from '../../components/Listagem/ListagemHeader/ListagemHeader';
import ListagemBody from '../../components/Listagem/ListagemBody/ListagemBody';
import ListagemBodyOpcoes from '../../components/Listagem/ListagemBody/ListagemBodyOpcoes/ListagemBodyOpcoes';
import ListagemBodyPrecos from '../../components/Listagem/ListagemBody/ListagemBodyPrecos/ListagemBodyPrecos';
import ListagemBodyLote from '../../components/Listagem/ListagemBody/ListagemBodyLote/ListagemBodyLote';

const ItemEstocado = () => {
  const [itensEstocados, setItensEstocados] = useState([]);
  const headerRow = ['Nome' , 'Marca', 'Preços', 'Lote', 'Setor', 'Opcões'];
  const renderBodyRow = ({id, mercadoria, precoCompra, precoVenda, lote, setor}, index) => ({
    key: id,
    cells: [
      mercadoria.nome,
      mercadoria.marca.nome,
      <ListagemBodyPrecos compra={precoCompra} venda={precoVenda} unidade={mercadoria.unidade}/>,
      <ListagemBodyLote fabricacao={lote.dataFabricacao} vencimento={lote.dataVencimento} />,
      setor.nome,
      <ListagemBodyOpcoes path='/itens_estocados' id={id} />
    ]
  });

  useEffect(() => {
    apiItensEstocados.getAll()
    .then(response => setItensEstocados(response.content));
  }, []);

  return (
    <React.Fragment>
      <ListagemHeader icon='' content='Mercadorias'/>
      <ListagemBody header={headerRow} renderBodyRow={renderBodyRow} tableData={itensEstocados} />
    </React.Fragment>
  );
}

export default ItemEstocado;




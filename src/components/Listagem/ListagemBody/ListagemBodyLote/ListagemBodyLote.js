import React from 'react';

const ListagemBodyLote = (props) => {
  const {fabricacao, vencimento} = props;
  return (
    <td>
      Fabricação: {fabricacao} <br/>
      Vencimento: {vencimento} 
    </td>
  );
}
export default ListagemBodyLote;
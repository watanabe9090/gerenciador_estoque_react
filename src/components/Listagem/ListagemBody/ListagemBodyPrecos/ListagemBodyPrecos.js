import React from 'react';

const ListagemBodyPrecos = (props) => {
  const {venda, compra, unidade} = props;
  return (
    <td>
      Unidade: {unidade} <br/>
      Compra: {compra} RS$ <br/>
      Venda: {venda} RS$ 
    </td>
  );
}
export default ListagemBodyPrecos;
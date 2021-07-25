import React from 'react';


const ListagemBodyTelefones = (props) => {
  return (
    <td>
      Fixo: {props.fixo} <br/>
      Celular: {props.celular}
    </td>
  );
}

export default ListagemBodyTelefones;
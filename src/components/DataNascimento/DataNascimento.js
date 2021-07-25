import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const DataNascimento = () => {
  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);

  return (
    <React.Fragment>
      <Input
        name='dia'
        label='Dia'
        value={dia}
        onChange={event => setDia(event.target.value)}
      />
    </React.Fragment>
  );
}

export default DataNascimento;
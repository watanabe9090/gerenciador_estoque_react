import React, {useState} from 'react';
import {Header, Divider, Input, Icon, Button} from 'semantic-ui-react';

const ListagemHeader = (props) => {
  const [input, setInput] = useState('');

  return (
    <React.Fragment>
      <Header as='h2'>
        <Icon name={props.icon}/>
        <Header.Content>{props.content}</Header.Content>
        <Divider />
      </Header>
      {/* <Input 
        placeholder='Procurar...'
        onChange={event => setInput(event.target.value)} 
        value={input}
      />
      <Button icon color='black'>
        <Icon name='search'/>
      </Button> */}
    </React.Fragment>
  );
}
export default ListagemHeader;

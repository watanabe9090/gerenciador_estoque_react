import React,{useState, useEffect} from 'react';
import {Message, Progress} from 'semantic-ui-react'

const Mensagem = (props) => {
  const {header, list} = props;
  let [counter, setCount] = useState(0);
  

  return (
    <React.Fragment>
      <Message error >
        <Message.Header>{header || 'SOme Header'}</Message.Header>
        <Message.Content>
          <Progress percent={counter} attached='top' error/>
          <Message.List items={list || ['Erro 1', 'Erro 2']}/>
        </Message.Content>
      </Message>
    </React.Fragment>
  )
}
export default Mensagem;
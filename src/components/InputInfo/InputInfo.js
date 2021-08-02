import { Popup, Icon } from 'semantic-ui-react';

/**
 * @param {string} label  texto da label
 * @param {string} popup  texto que sera exibido quando houver o mouse passar por cima do icone
 */
const InputInfo = (props) => {
  return (
    <label>
      {props.label || ''}
      <Popup 
      content={props.popup || ''} 
      trigger={<Icon style={{marginLeft: "10px"}}  name='help' color='grey' circular/>} />
    </label>
  );
}

export {InputInfo};
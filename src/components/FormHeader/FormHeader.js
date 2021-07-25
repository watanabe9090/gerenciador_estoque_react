import React from 'react';
import {Header, Divider, Icon} from 'semantic-ui-react';

const FormHeader = (props) => {
  return (
    <React.Fragment>
      <Header as='h2'>
        <Icon name={props.icon} />
        {props.header}
          <Header.Subheader>
            {props.subheader}
          </Header.Subheader>
      </Header>
      <Divider />
    </React.Fragment>
  );
}

export default FormHeader;
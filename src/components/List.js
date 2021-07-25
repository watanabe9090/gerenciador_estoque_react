import React from 'react';
import { Button, Header, Divider, Table, Input, Icon, Container } from 'semantic-ui-react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      url: props.url,
      object: props.object,
      list: []
    };
  }

  componentDidMount() {
    Axios.get(this.state.url)
        .then(response => {this.setState({
            ...this.state,
            list: response.data.content
        })
      }
    );

  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header as='h2'>

          </Header>
          <Divider />
          <Input />
          <Table celled color='black'>
            <Table.Header>
              <Table.Row>
                {this.state.object.map(property => (
                  <Table.Cell key={}></Table.Cell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.list.map}
            </Table.Body>
          </Table>
        </Container>
      </React.Fragment>
    )
  }
}
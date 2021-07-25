import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Icon } from 'semantic-ui-react';
function NotFound() {
	let location = useLocation();
	return(
		<React.Fragment>
		<Container textAlign='center'>
			<Icon size='massive' name='close' />
			<h1>404 Not Found</h1>
			<h2>
			Ops!! A página: {location.pathname} não foi encontrada
			</h2>
		</Container>
		</React.Fragment>
		)
	}
	
	export default NotFound;
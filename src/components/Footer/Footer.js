import React from 'react';
import {Grid, List} from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
	return (
		<Grid textAlign='center' padded='vertically' columns={4}>
			<Grid.Row color='black'>
				<h3>Projeto de Laboratorio de Engenharia de Software</h3>
			</Grid.Row>
			

			<Grid.Row color='black'>
				<Grid.Column>
				<List>
					<List.Item><h4>Tenologias Utilizadas</h4></List.Item>
					<List.Item>Spring Framework : Backend</List.Item>
					<List.Item>Reactjs : Frontend</List.Item>
					<List.Item>H2 : Banco de dados</List.Item>
					<List.Item>JUnit : Testes</List.Item>
					<List.Item>Semantic UI : Framework frontend</List.Item>
				</List>
				</Grid.Column>
			
				<Grid.Column>
				<List>
					<List.Item><h4>Integrantes do Grupo</h4></List.Item>
					<List.Item>Antonio Vinicius Soriani Barreto</List.Item>
					<List.Item>Eduardo Augusto Rezaghi Taliani</List.Item>
					<List.Item>Gabriel Francischini Collet Pereira</List.Item>
					<List.Item>Yuri Takae Watanabe</List.Item>
				</List>
				</Grid.Column>

				<Grid.Column>
				<List>
					<List.Item><h4>E-mail institucional</h4></List.Item>
					<List.Item>antonio.barreto2@fatec.sp.gov.br</List.Item>
					<List.Item>eduardo.taliani@fatec.sp.gov.br</List.Item>
					<List.Item>gabriel.pereira72@fatec.sp.gov.br</List.Item>
					<List.Item>yuri.watanabe@fatec.sp.gov.br</List.Item>
				</List>
				</Grid.Column>

				<Grid.Column>
				<List>
					<List.Item><h4>Github</h4></List.Item>
					<List.Item>
						<List.Icon name='github'/>
						https://github.com/AntonioViniciusSBarreto
					</List.Item>
					<List.Item>
						<List.Icon name='github'/>
						https://github.com/eduardorezaghi
					</List.Item>
					<List.Item>
						<List.Icon name='github'/>
						https://github.com/gabriel-francischini
					</List.Item>
					<List.Item>
						<List.Icon name='github'/>
						https://github.com/watanabe9090
					</List.Item>
				</List>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		)
};
	
export default Footer;
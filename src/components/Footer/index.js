import React from 'react';
import {Grid, List} from 'semantic-ui-react';

const tecnologias = [
	'Spring Framework : Backend',
	'Reactjs : Frontend',
	'H2 : Banco de dados',
	'JUnit : Testes',
	'Semantic UI : Framework frontend'
]

const integrantes = [
	'Antonio Vinicius Soriani Barreto',
	'Eduardo Augusto Rezaghi Taliani',
	'Gabriel Francischini Collet Pereira',
	'Geovanni Silva Dos Santos',
	'Yuri Takae Watanabe'
]

const emails = [
	'antonio.barreto2@fatec.sp.gov.br',
	'eduardo.taliani@fatec.sp.gov.br',
	'gabriel.pereira72@fatec.sp.gov.br',
	'geovanni.santos@fatec.sp.gov.br',
	'yuri.watanabe@fatec.sp.gov.br'
]

const githubs = [
	'https://github.com/AntonioViniciusSBarreto',
	'https://github.com/eduardorezaghi',
	'https://github.com/gabriel-francischini',
	'https://github.com/GeovanniSantos',
	'https://github.com/watanabe9090'
]

export default function Footer() {
	return (
		<Grid className="footer" textAlign='center' padded='vertically' columns={4}>
			<Grid.Row color='black'>
				<h2>Projeto de Laboratorio de Engenharia de Software</h2>
			</Grid.Row>

			<Grid.Row color='black'>
				<Grid.Column>
					<h3><u>Tecnologias Utilizadas</u></h3>
					<List items={tecnologias}/>
				</Grid.Column>
			
				<Grid.Column>
					<h3><u>Integrantes do Grupo</u></h3>
					<List items={integrantes}/>
				</Grid.Column>

				<Grid.Column>
					<h3><u>E-mail institucional</u></h3>
					<List items={emails} />
				</Grid.Column>

				<Grid.Column>
					<h3><u>GitHub</u></h3>
					<List>
						{githubs.map(github => <List.Item><List.Icon name='github'/>{github}</List.Item>)}
					</List>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		)
};
	
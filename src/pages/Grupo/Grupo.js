import React from "react";
import { Card } from "semantic-ui-react";

const Grupo = () => {
    return (
        <React.Fragment>
            <Card.Group>
				<Card 
					image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
					header='ANTONIO VINICIUS SORIANI BARRETO '
					meta='192119-77'
				/>
				<Card 
					image='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
					header='EDUARDO AUGUSTO REZAGHI TALIANI '
					meta='192072-12 '
				/>
				<Card 
					image='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
					header='GEOVANNI SILVA DOS SANTOS'
					meta='192072-12 '
				/>
				<Card 
					image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
					header='YURI TAKAE WATANABE'
					meta='192142-62 '
				/>
				</Card.Group>
        </React.Fragment>
    )
}

export default Grupo;
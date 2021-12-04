import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const style = {
  textDecoration: 'none'
};

const SideMenu = () => {
  return (
    <React.Fragment>
      <Menu vertical  >
        <Menu.Item>
        <Menu.Header  href='/clientes'>
          <Icon  name='address book'/>
          Clientes
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Clientes'
            href='/clientes/cadastro'
          />
        </Menu.Menu>
        </Menu.Item>


        <Menu.Item>
        <Menu.Header href='/vendas'>
          <Icon name='shopping cart' />
          Vendas
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Venda'
            href='/vendas/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>


        <Menu.Item>
        <Menu.Header href='/fornecedores'>
          <Icon name='handshake outline' />
          Fornecedores
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Fornecedores'
            href='/fornecedores/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>

        <Menu.Item>
        <Menu.Header href='/marcas'>
          <Icon name='star' />
          Marcas
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Marcas'
            href='/marcas/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>

				<Menu.Item>
        <Menu.Header href='/itens_estocados'>
          <Icon name='tags'/>
          Mercadorias
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Mercadorias'
            href='/itens_estocados/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>
        

        <Menu.Item>
        <Menu.Header href='/locais'>
          <Icon name='map marker alternate'/>
          Locais
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Locais'
            href='/locais/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>

        <Menu.Item>
        <Menu.Header href='/setores'>
          <Icon name='sitemap'/>
          Setores
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Setores'
            href='/setores/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>

        <Menu.Item>
					<Menu.Header href='/colaboradores'>
						<Icon name='id badge' />
						Colaboradores
					</Menu.Header>
					<Menu.Menu>
						<Menu.Item
							name='Cadastrar Colaboradores'
              href='/colaboradores/cadastro'
						/>
					</Menu.Menu>
				</Menu.Item>

        <Menu.Item style={{pointerEvents: "none", opacity: "0.5"}}>
        <Menu.Header href='/recebimentos'>
          <Icon name='boxes' />
          Recebimentos
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Recebimento'
            href='/recebimentos/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>

        <Menu.Item style={{pointerEvents: "none", opacity: "0.5"}}>
        <Menu.Header href='/recebimentos'>
          <Icon name='dolly' />
          Transeferências
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Cadastrar Transferências'
            href='/recebimentos/cadastro'
          />
        </Menu.Menu>
				</Menu.Item>

        <Menu.Item style={{pointerEvents: "none", opacity: "0.5"}}> 
        <Menu.Header href='/info/ajuda'>
          <Icon name='question circle'  />
          Ajuda
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='Utilização básica'
          />
          <Menu.Item
            name='Entrar em contato'
          />
        </Menu.Menu>
				</Menu.Item> 

      </Menu>
    </React.Fragment>
  );
}
export default SideMenu;


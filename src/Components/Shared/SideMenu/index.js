import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const items = [
  {name: 'Clientes', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
  {name: 'Cliente', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
  {name: 'Clientes', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
  {name: 'Clientes', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
  {name: 'Clientes', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
  {name: 'Clientes', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
  {name: 'Clientes', icon: 'address book', href:'/clientes', subItems: [
    {name: 'Cadastrar cliente', href: '/clientes/cadastro'}
  ]},
];

export default function SideMenu() {
  return(
    <Menu className="side-menu" size='large' vertical>
      {items.map(item => 
        <Menu.Item >
          <Menu.Header href={item.href}>
            <Icon name={item.icon}/>
            {item.name}
          </Menu.Header>
          {item.subItems.map(subItem => 
            <Menu.Menu content={ <Menu.Item name={subItem.name} href={subItem.href}/>}/>
          )}
        </Menu.Item>  
      )}
    </Menu>
  )
}
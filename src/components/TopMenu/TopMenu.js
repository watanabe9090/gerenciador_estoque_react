import React, { useState } from 'react';
import {Menu, Label} from 'semantic-ui-react';
const TopMenu = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu >
      <Menu.Item>
        <Label size='huge' color='black' href='/'>
          SwitfLog
        </Label>
      </Menu.Item>
      <Menu.Item 
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        content='Home'
        href='/'
      />
      <Menu.Item
        name='documentacao'
        active={activeItem === 'documentacao'}
        onClick={handleItemClick}
        content='Documentação'
        href='https://drive.google.com/drive/folders/16P2SGiu8JUUBuI5UBk5lZLezqe5uvPNa?usp=sharing'
      />
       
      {/*
      <Menu.Item 
        name='proposta'
        active={activeItem === 'proposta'}
        onClick={handleItemClick}
        content='Proposta'
        href='/info/proposta'
      /> */}
      <Menu.Item
        name='ajuda'
        active={activeItem === 'ajuda'}
        onClick={handleItemClick}
        content='Ajuda'
        href='/info/ajuda'
      />
      <Menu.Item position='right'>
      <Label size='huge' color='black'>
          IES-301
        </Label>
      </Menu.Item>
    </Menu>
  )
}

export default TopMenu;
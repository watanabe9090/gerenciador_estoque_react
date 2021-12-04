import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


import SideMenu from './components/SideMenu/SideMenu';
import TopMenu from './components/TopMenu/TopMenu';
import Footer from './Components/Shared/Footer';

import AjudaPage from './pages/Ajuda/Ajuda';
import PropostaPage from './pages/Proposta/Proposta';

import MarcaPage from './pages/Marca/Marca';
import MarcaCadastroPage from './pages/MarcaCadastro/MarcaCadastro';
import MarcaAlteracaoPage from './pages/MarcaAlteracao/MarcaAlteracao';
import MarcaDetalhesPage from './pages/MarcaDetalhes/MarcaDetalhes';

import ClientePage from './pages/Clientes/Cliente';
import ClienteCadastroPage from './pages/ClienteCadastro/ClienteCadastro';
import ClienteAlteracaoPage from './pages/ClienteAlteracao/ClienteAlteracao';
import ClienteDetalhesPage from './pages/ClienteDetalhes/ClienteDetalhes';

import ColaboradorPage from './pages/Colaborador/Colaborador';
import ColaboradorCadastroPage from './pages/ColaboradorCadastro/ColaboradorCadastro';
import ColaboradorAlteracaoPage from './pages/ColaboradorAlteracao/ColaboradorAlteracao';
import ColaboradorDetalhesPage from './pages/ColaboradorDetalhes/ColaboradorDetalhes';

import ItemEstocadoPage from './pages/ItemEstocado/ItemEstocado';
import ItemEstocadoCadastro from './pages/ItemEstocadoCadastro/ItemEstocadoCadastro';
import ItemEstocadoDetalhes from './pages/ItemEstocadoDetalhes/ItemEstocadoDetalhes';

import FornecedorPage from './pages/Fornecedor/Fornecedor';
import FornecedorCadastroPage from './pages/FornecedorCadastro/FornecedorCadastro';
import FornecedorAlteracaoPage from './pages/FornecedorAlteracao/FornecedorAlteracao';
import FornecedorDetalhesPage from './pages/FornecedorDetalhes/FornecedorDetalhes';

import HomePage from './pages/Home/Home';

import LocalPage from './pages/Local/Local';
import LocalCadastroPage from './pages/LocalCadastro/LocalCadastro';
import LocalAlteracaoPage from './pages/LocalAlteracao/LocalAlteracao';
import LocalDetalhesPage from './pages/LocalDetalhes/LocalDetalhes';

import SetorPage from './pages/Setor/Setor';
import SetorCadastroPage from './pages/SetorCadastro/SetorCadastro';
import SetorAlteracaoPage from './pages/SetorAlteracao/SetorAlteracao';
import SetorDetalhesPage from './pages/SetorDetalhes/SetorDetalhes';

import RecebimentoPage from './pages/Recebimentos/index';

import UsuarioPage from './pages/Usuarios/index';

import NotFoundPage from './pages/NotFound/NotFoundPage';
import VendaPage from './pages/Venda/Venda';
import VendaCadastroPage from './pages/VendaCadastro/VendaCadastro';
import VendaDetalhePage from './pages/VendaDetalhes/VendaDetalhes';

import GrupoPage from './pages/Grupo/Grupo';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div className="App">
        <div className="TopMenu">
          <TopMenu />
        </div>
        <div className="SideMenu">
          <SideMenu />
        </div>
        <div className="Content">
          <Segment>
          <Switch >
            <Route path="/" exact component={HomePage} />

            <Route path="/clientes" exact component={ClientePage} />
            <Redirect path="/clientes/redirect" to="/clientes" />
            <Route path="/clientes/cadastro" exact component={ClienteCadastroPage} />
            <Route path="/clientes/:id" exact component={ClienteAlteracaoPage} />
            <Route path="/clientes/detalhes/:id" exact component={ClienteDetalhesPage} />

            <Route path="/colaboradores" exact component={ColaboradorPage} />
            <Route path="/colaboradores/cadastro" exact component={ColaboradorCadastroPage} />
            <Route path="/colaboradores/:id" exact component={ColaboradorAlteracaoPage} />
            <Route path="/colaboradores/detalhes/:id" exact component={ColaboradorDetalhesPage} />

            <Route path="/fornecedores" exact component={FornecedorPage} />
            <Redirect path="/fornecedores/redirect" to="/fornecedores" />
            <Route path="/fornecedores/cadastro" exact component={FornecedorCadastroPage} />
            <Route path="/fornecedores/:id" exact component={FornecedorAlteracaoPage} />
            <Route path="/fornecedores/detalhes/:id" exact component={FornecedorDetalhesPage} />

            <Route path="/itens_estocados/" exact component={ItemEstocadoPage} />
            <Route path="/itens_estocados/cadastro" exact component={ItemEstocadoCadastro} />
            <Route path="/itens_estocados/detalhes/:id" exact component={ItemEstocadoDetalhes} />

            <Route path="/locais" exact component={LocalPage} />
            <Redirect path="/locais/redirect" to="/locais" />
            <Route path="/locais/cadastro" exact component={LocalCadastroPage} />
            <Route path="/locais/:id" exact component={LocalAlteracaoPage} />
            <Route path="/locais/detalhes/:id" exact component={LocalDetalhesPage} />

            <Route path="/marcas" exact component={MarcaPage} />
            <Redirect path="/marcas/redirect" to="/marcas" />
            <Route path="/marcas/cadastro" exact component={MarcaCadastroPage} />
            <Route path="/marcas/:id" exact component={MarcaAlteracaoPage} />
            <Route path="/marcas/detalhes/:id" exact component={MarcaDetalhesPage} />
            
            <Route path="/setores" exact component={SetorPage} />
            <Route path="/setores/cadastro" exact component={SetorCadastroPage} />
            <Route path="/setores/:id" exact component={SetorAlteracaoPage} />
            <Route path="/setores/detalhes/:id" exact component={SetorDetalhesPage} />

            <Route path="/vendas/detalhes/:id" exact component={VendaDetalhePage} />
            <Route path="/vendas/cadastro" exact component={VendaCadastroPage} />
            <Route path="/vendas" exact component={VendaPage} />

            <Route path="/recebimentos" exact component={RecebimentoPage} />
            <Route path="/usuarios" exact component={UsuarioPage} />

            <Route path="/info/proposta" exact component={PropostaPage} />
            <Route path="/info/ajuda" exact component={AjudaPage} />

            <Route path="/grupo" exact component={GrupoPage} />

            <Route path="*" exact component={NotFoundPage} />
          </Switch>
          </Segment>
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

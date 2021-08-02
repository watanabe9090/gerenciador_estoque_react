import React from 'react';
import {InputInfo} from '../../components/InputInfo/InputInfo';

const InputInfoCodigo = <InputInfo label='Codigo' popup='Código de referência para da Mercadoria'/>
const InputInfoNome = <InputInfo label='Nome' popup='Nome da Mercadoria'/>
const InputInfoFornecedor = <InputInfo label='Fornecedor' popup='Fornecedor responsável pela venda mercadoria'/>
const InputInfoMarca = <InputInfo label='Marca' popup='Marca a qual a mercadoria pertence'/>
const InputInfoLocal = <InputInfo label='Local' popup='Localização do estoque'/>
const InputInfoSetor = <InputInfo label='Setor' popup='Setor a qual a mercadoria se encontra'/>
const InputInfoUnidade = <InputInfo label='Unidade' popup='Unidade de medidada utilizada para venda da mercadoria'/>
const InputInfoDataFabricacao = <InputInfo label='Data de Fabricação' popup='Data de fabricação da mercadoria'/>
const InputInfoDataVencimento = <InputInfo label='Data de Vencimento' popup='Data de Vencimento da mercadoria'/>
const InputInfoPrecoCompra = <InputInfo label='Preço de Compra' popup='Preço para a compra da mercadoria provida pelos fornecedores'/>
const InputInfoPrecoVenda = <InputInfo label='Preço de Venda' popup='Preço em que a mercadoria e vendida no estabelecimento'/>
const InputInfoDescricao = <InputInfo label='Descrição' popup='Descrição detalhada sobre a mercadoria(Opcional)'/>
const InputInfoDescricaoReduzida = <InputInfo label='Descrição Reduzida' popup='Descrição Reduzida que aparecerá nas listagens'/>

export {
  InputInfoNome,
  InputInfoCodigo,
  InputInfoFornecedor,
  InputInfoMarca,
  InputInfoLocal,
  InputInfoSetor,
  InputInfoUnidade,
  InputInfoDataFabricacao,
  InputInfoDataVencimento,
  InputInfoPrecoCompra,
  InputInfoPrecoVenda,
  InputInfoDescricao,
  InputInfoDescricaoReduzida
};
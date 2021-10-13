import { InputInfo } from "../InputInfo/InputInfo";

const InputInfoCep = <InputInfo label='CEP' popup='Código de Endereçamento Postal (sem traços ou pontuações) Ex:01011100 ' />
const InputInfoLogradouro = <InputInfo label='Logradouro' popup='Ruas, Avenidas, ... Ex: Rua São Bento' />
const InputInfoBairro = <InputInfo label='Bairro' popup='Subáreas das cidades e munícipios Ex: Centro' />
const InputInfoLocalidade = <InputInfo label='Localidade' popup='Município ou cidade em que se encontra Ex: São Paulo' />
const InputInfoNumero = <InputInfo label='Número' popup='Número da Residência Ex: 912' />
const InputInfoComplemento = <InputInfo label='Complemento' popup='Informações extras para indicar com exatidão a localização correta, Ex: lado ímpar ...' />



export {
  InputInfoCep,
  InputInfoLogradouro,
  InputInfoBairro,
  InputInfoLocalidade,
  InputInfoNumero,
  InputInfoComplemento
};
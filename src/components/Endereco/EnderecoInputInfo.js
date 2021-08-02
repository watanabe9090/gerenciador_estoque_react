import { InputInfo } from "../InputInfo/InputInfo";

const InputInfoCep = <InputInfo label='CEP' popup='' />
const InputInfoLogradouro = <InputInfo label='Logradouro' popup='Ruas, Avenidas, ...' />
const InputInfoBairro = <InputInfo label='Bairro' popup='' />
const InputInfoLocalidade = <InputInfo label='Localidade' popup='Município em que se encontra' />
const InputInfoNumero = <InputInfo label='Número' popup='Número da Residência' />
const InputInfoComplemento = <InputInfo label='Complemento' popup='Informações extras para indicar com exatidão a localização correta' />



export {
  InputInfoCep,
  InputInfoLogradouro,
  InputInfoBairro,
  InputInfoLocalidade,
  InputInfoNumero,
  InputInfoComplemento
};
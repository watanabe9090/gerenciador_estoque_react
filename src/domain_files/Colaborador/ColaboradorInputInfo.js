import { InputInfo } from '../../components/InputInfo/InputInfo';

const InputInfoNome = <InputInfo label='Nome' popup='Primeiro nome do Indivíduo'/>
const InputInfoSobrenome = <InputInfo label='Sobrenome' popup='Sobrenome do Indivíduo'/>
const InputInfoSexo = <InputInfo label='Sexo' popup='Sexo do Indivíduo'/>
const InputInfoCpf = <InputInfo label='CPF' popup='Comprovante de pessoa física (sem pontuação)'/>
const InputInfoDataNascimento = <InputInfo label='Data de Nascimento' popup='Dia que o colaborador nasceu'/>


export {
  InputInfoNome,
  InputInfoSobrenome,
  InputInfoSexo,
  InputInfoCpf,
  InputInfoDataNascimento
};
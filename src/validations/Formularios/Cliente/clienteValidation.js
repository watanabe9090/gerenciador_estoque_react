import isCpfValid from "../../cpfValidator";
import { justLetters } from "../../regexPatterns";

function validate(values) {
  const errors = {
    nome: null,
		sobrenome: null,
		cpf: null,
    ok: true
  };
  const {cpf, nome, sobrenome} = values;
  if(!isCpfValid(cpf)) {
    errors.cpf = 'Não é Válido';
    errors.ok = false
  }
  if(!justLetters.test(nome)) {
    errors.nome = 'Nome Inválido';
    errors.ok = false
  }
  if(!justLetters.test(sobrenome)) {
    errors.sobrenome = 'Sobrenome Inválido';
    errors.ok = false
  }
  

  return errors;
  
}

export default validate;
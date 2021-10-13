import {justIntegers, justLetterAndSpaces } from '../../regexPatterns'; 

function validate(values) {
  const errors = {
    cnpj: null,
    nomeFantasia: null,
    razaoSocial: null,
    ok: true
  };
  const {cnpj, razaoSocial, nomeFantasia} = values;

  if(nomeFantasia.length < 1) {
    errors.nomeFantasia = "O Nome Fantasia não pode estar em branco";
    errors.ok = false;
  }
  if (!justLetterAndSpaces.test(razaoSocial)) {
    errors.razaoSocial = "Razão Social deve conter apenas letras";
    errors.ok = false;
  }
  if(!justIntegers.test(cnpj)) {
    errors.cnpj = "CNPJ deve contar apenas números";
    errors.ok = false;
  }
  if (cnpj.length != 14) {
    errors.cnpj = "Número de Caracters do CNPJ inválido Inválido";
    errors.ok = false;
  }
  return errors;

}

export {validate};
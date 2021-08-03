import {justIntegers, justLetterAndSpaces } from '../../regexPatterns'; 

function validate(values) {
  const errors = {initialize:true};
  const {cnpj, razaoSocial, nomeFantasia} = values;

  if(nomeFantasia.length < 1) {
    errors.nomeFantasia = "O Nome Fantasia não pode estar em branco";
  }
  if (!justLetterAndSpaces.test(razaoSocial)) {
    errors.razaoSocial = "Razão Social deve conter apenas letras";
  }
  if(!justIntegers.test(cnpj)) {
    errors.cnpj = "CNPJ deve contar apenas números";
  }
  if (cnpj.length != 14) {
    errors.cnpj = "Número de Caracters do CNPJ inválido Inválido";
  }

  return errors;

  // console.log(Object.keys(values)); 
}

export {validate};
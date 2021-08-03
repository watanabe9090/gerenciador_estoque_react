const cpf = "   49779094882   "

function validate(cpf) {
  let digit1;
  let digit2;
  let sum = 0;
  cpf = cpf.trim();

  // Calculo do primeiro digito
  for(let i=10, c=0; i >= 2; i--, c++) {
    sum += Number.parseInt(cpf.charAt(c)) * i;
  }
  digit1 = ((sum *10) % 11 == 10)? 0 : ((sum *10) % 11);
  
  //Calculo do segundo digito
  sum = 0
  for(let i=11, c=0; i >= 3; i--, c++) {
    sum += Number.parseInt(cpf.charAt(c)) * i;
  }
  sum += 2 * digit1;
  digit2 = ((sum *10) % 11 == 10)? 0 : ((sum *10) % 11);

  console.log(digit1, digit2)
  if( digit1 == Number.parseInt(cpf.charAt(9)) && digit2 == Number.parseInt(cpf.charAt(10))) {
    return true;
  } else {
    return false
  }
}

export default validate;
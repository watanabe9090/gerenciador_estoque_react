import isCpfValid from "../../cpfValidator";

function validate(values) {
  const errors = {initialize:true};
  const {cpf, nome, sobrenome} = values;
  if(!isCpfValid(cpf)) {

  }
  
}

export default validate;
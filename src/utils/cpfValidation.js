import { cpf } from 'cpf-cnpj-validator'; 

export const validateCpf = (value) => {
  if (cpf.isValid(value)) {
    return true
  }

  return 'CPF inválido'
}
export const isNumeric = (value) => {
  if (/^\d+$/.test(value)) {
    return true;
  }
  return 'Deve ser um número válido'
}
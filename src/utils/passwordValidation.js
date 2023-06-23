export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return 'As senhas não conferem'
  }
  
  return true;
}
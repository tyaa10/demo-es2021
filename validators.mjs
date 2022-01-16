function validateLogin(login) {
  return /^[A-z]{3,25}$/.test(login)
}
function validatePassword(password) {
  return /^[A-zА-я0-9]{8,16}$/.test(password)
}
export { validateLogin, validatePassword }
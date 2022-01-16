import {validateLogin as vLogin, validatePassword as vPassword} from './validators.mjs'
console.log('Hello ES Modules')
document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()
  if (!vLogin(document.getElementById('login').value)) {
    document.getElementById('loginError').style.display = 'inline'
  } else {
    document.getElementById('loginError').style.display = 'none'
  }
  if (!vPassword(document.getElementById('password').value)) {
    document.getElementById('passwordError').style.display = 'inline'
  } else {
    document.getElementById('passwordError').style.display = 'none'
  }
})
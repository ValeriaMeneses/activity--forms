var loginForm = document.forms.login
console.log(loginForm);

loginForm.addEventListener('submit', function(e) {
  e.preventDefault()
  var nombre = loginForm.elements.name.value
  var password = loginForm.elements.password.value
  var error = document.querySelector('.error')
console.log(nombre);

  if (nombre.length < 4 ) {
    error.textContent = "Tu nombre debe tener mas de 4 caracteres"
    loginForm.elements.name.value = ''

  }else {
    loginForm.elements.name.value = ''
    loginForm.elements.password.value = ''
    error.textContent = ''
    alert('Tu nombre si tiene mas de 4 caracteres')
  }



})

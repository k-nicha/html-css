function generateForm () {
  // variable
  // x = 1
  var a

  console.log(a) // undefined

  a = 7

  console.log(a) // 7


  var container = document.getElementById("registrationForm") // <div id="registrationForm" ></div>

  var usernameInput = document.createElement("input")  // <input />

  usernameInput.setAttribute("id", "username")
  usernameInput.setAttribute("type", "text")
  usernameInput.setAttribute("placeholder", "Username")

  var passwordInput = document.createElement("input")

  // passwordInput.setAttribute("id", "password")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("placeholder", "Password")

  var button = document.createElement("button")
  var text = document.createTextNode("Sign Up")

  button.appendChild(text)


  button.className = "btn btn-success"

  
  container.appendChild(usernameInput)
  container.appendChild(passwordInput)
  container.appendChild(button)

  
}

function deleteForm () {
  
  var parent = document.getElementById("registrationForm")

  var child = document.getElementById("password")

  parent.removeChild(child)
}

generateForm()



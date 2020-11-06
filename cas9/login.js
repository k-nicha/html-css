function submit () {
  // function body

  // alert(
  //   // konkatenacija
  //   document.getElementById("username").value + " " + document.getElementById("password").value
  // )

  console.log(document.getElementById("username").value + " " + document.getElementById("password").value)

  document.getElementById("username").className = "form-control"
  document.getElementById("password").className = "form-control"

  console.log(document.getElementsByClassName("form-control"))

}

function printMyName (e) {
  console.log(document.getElementById("username").value)
}
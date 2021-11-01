// grab the input element
let inputElement = document.getElementById("userinput")

// listen for keyup events on the input
inputElement.addEventListener("keyup", onKeyUp)

// print the value from the input element
function onKeyUp() {
  console.log(inputElement.value)
  // send this information to the content page
}

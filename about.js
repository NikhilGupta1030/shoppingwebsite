// MODAL POPUP login

// Get the modal
var modal = document.getElementById("Modal-1");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-1")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
const closeLogin = () =>{
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modala = document.getElementById("Modal-2");

// Get the button that opens the modal
var btna = document.getElementById("signup");

// Get the <span> element that closes the modal
var spana = document.getElementsByClassName("close-2")[0];

// When the user clicks on the button, open the modal
btna.onclick = function() {
  modala.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
const closeSignUp = () => {
  modala.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modala) {
    modala.style.display = "none";
  }
}
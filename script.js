function getUserData() {
  var details = document.getElementById("receivedText").value;

  document.getElementById("output").innerText =
    "given text " + details + " is printed";
}

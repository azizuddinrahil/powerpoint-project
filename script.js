function getUserData() {
  const details = document.getElementById("receivedText").value;
  console.log(details);
}
function moreText() {
  const newinputs = document.querySelectorAll(".addMoreText input");
  for (let i = 0; i < newinputs.length; i++) {
    console.log(newinputs[i].value);
  }
}

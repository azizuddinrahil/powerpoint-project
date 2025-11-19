function getUserData() {
  const details = document.getElementById("receivedText").value;
  console.log("title:", details);
}
function moreText() {
  const newinputs = document.querySelectorAll(".addMoreText input");

  const title = document.getElementById("receivedText").value;
  let out = "title: " + title + "\n";

  const newtitle = document.getElementById("receivedText").value;
  let newout = "title: " + title + "\n";
  for (let i = 0; i < newinputs.length; i++) {
    const v = newinputs[i].value;
    if (v) {
      out += "point" + (i + 1) + ": " + v + "\n";
    }
  }

  console.log(out);
}

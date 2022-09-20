console.log("Hello World");

//Function to alternate the title between red and purple when clicked
function beenClicked() {
  let titleElement = document.querySelector("h1");
  let test = getComputedStyle(titleElement).getPropertyValue("color");

  if (test === "rgb(138, 43, 226)") {
    document.querySelector("h1").setAttribute("style", "color: red");
  } else {
    document.querySelector("h1").setAttribute("style", "color: blueviolet");
  }
}

document.querySelector("h1").addEventListener("click", beenClicked);

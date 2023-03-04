let previousTarget = null;
let previousColor = null;

document.getElementById("svg2").onclick = getDetails;

const URL = "https://countries.plaul.dk/api/countries/";

function getDetails(evt) {
  const target = evt.target;
  const id = target.id;

  if (previousTarget) {
    // Reset the fill color of the previously clicked element
    previousTarget.style.fill = previousColor;
  }

  fetch(URL+id)
  .then(res => res.json())
  .then(data => {
    // Save the original color of the clicked element
    previousColor = target.style.fill;

    // Set the fill color of the clicked element to red
    target.style.fill = "black";

    document.getElementById("flag").src = data.flag;
    document.getElementById("name").innerText = data.name.common;
    document.getElementById("un-member").innerText = data.unMember;
    document.getElementById("capital").innerText = data.capital;
    document.getElementById("borders").innerText = data.borders;
    document.getElementById("currencies").innerText = Object.values(data.currencies)[0].name;

    // Update the previous target to the currently clicked element
    previousTarget = target;
  });
}

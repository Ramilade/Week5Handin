

document.getElementById("svg2").onclick = getDetails

const URL = "https://countries.plaul.dk/api/countries/"

function getDetails(evt) {
const target = evt.target
const id = target.id

fetch(URL+id)
.then(res => res.json())
.then(data => {
    document.getElementById("flag").src = data.flag
    document.getElementById("name").innerText = data.name.common
    document.getElementById("unMember").innerText = data.unMember
    document.getElementById("unMember").innerText = data.unMember



})

}
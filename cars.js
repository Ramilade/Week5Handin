document.getElementById("btn-get-all").onclick = getAllCars
document.getElementById("btn-fetch-car").onclick = getCarByID;



const URL = "https://rami0904.azurewebsites.net/api/cars"
function getAllCars(evt){
    fetch(URL)
          .then(res=>res.json())
          .then(cars=> makeTable(cars))


}
function makeTable(cars){
    const tableRows = cars.map(car => `
    <tr>
        <td>${car.carId}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
    </tr>
    `)
    const tableRowsAsString = tableRows.join("")

    document.getElementById("table-body-cars").innerHTML = tableRowsAsString

}


/*
function getCarByID(evt){
    const id = document.getElementById("text-for-id").value
    fetch(URL+"/"+id)
    .then(res => {
     return res.json()})

    .then(data => {
     document.getElementById("car-id").innerText = data.id;
     document.getElementById("car-brand").innerText = data.brand;
     document.getElementById("car-model").innerText = data.model;
     document.getElementById("car-model").innerText = data.pricePrDay;

    })
    .catch((error) => {
     document.getElementById("car-error").innerText = error
    })
 }*/
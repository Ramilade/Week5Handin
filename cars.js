document.getElementById("btn-get-all").onclick = getAllCars



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

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
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
    </tr>
    `)
    const tableRowsAsString = tableRows.join("")

    document.getElementById("table-body-cars").innerHTML = tableRowsAsString

}



document.getElementById("btn-find-car").onclick = findCar

function findCar() {
  const id = document.getElementById("input-car-id").value;
  fetch(URL + '/' + id)
    .then(res => {
      if (!res.ok) {
        alert("Car ID doesn't exist - Please input valid ID")
        throw new Error("Car not found")
        
      }
      return res.json()
    })
    .then(car => renderUserDetails(car))
    .catch(error => document.getElementById("err-find-car").innerText = error)

}

function renderUserDetails(car) {
  document.getElementById("car-brand").innerText = car.brand
  document.getElementById("car-model").innerText = car.model
  document.getElementById("car-price").innerText = car.pricePrDay
}
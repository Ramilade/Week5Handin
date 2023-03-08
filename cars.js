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



const carTableBody = document.getElementById('car-table-body');
const errorFindCar = document.getElementById('err-find-car');
const btnFindCar = document.getElementById('btn-find-car');

btnFindCar.addEventListener('click', findCar);

function findCar() {
  const carId = document.getElementById('input-car-id').value;
  fetch(URL + '/' + carId)
    .then(response => {
      if (!response.ok) {
        throw new Error('Car not found');
      }
      return response.json();
    })
    .then(car => {
      // Populate table with fetched data
      carTableBody.innerHTML = `
        <tr>
          <td>${car.brand}</td>
          <td>${car.model}</td>
          <td>${car.pricePrDay}</td>
        </tr>
      `;
      errorFindCar.textContent = ''; // clear error message
    })
    .catch(error => {
      console.error('Error:', error);
      errorFindCar.textContent = error.message;
      carTableBody.innerHTML = ''; // clear table
    });
}
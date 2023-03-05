document.getElementById("btn-get-all").onclick = getAllCars
document.getElementById("btn-get-car").onclick = getCarByID



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

function getCarByID(evt){
    
    const id = document.getElementById("text-for-id2").value;
    fetch(URLCar + "/" + id)
      .then((res) => res.json())
      .then((car) => {
        const tr = `
        <tr>
        <td id="update-brand" contenteditable="true">${car.brand}</td>
        <td id="update-model" contenteditable="true">${car.model}</td>
        <td id="update-price" contenteditable="true">${car.pricePrDay}</td>
        <td id="update-discount" contenteditable="true">${car.bestDiscount}</td>
        </tr>`;
        document.getElementById("tbody-car-fetched").innerHTML = tr;
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
  }

document.getElementById("btn-create-car").onclick = createCar;
function createCar() {
  const car = {
    brand: document.getElementById("input-brand").value,
    model: document.getElementById("input-model").value,
    pricePrDay: document.getElementById("input-priceprday").value,
    bestDiscount: document.getElementById("input-bestdiscount").value,
  };

  const returnMessage = document.getElementById("create-car-message");
}
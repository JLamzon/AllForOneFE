console.log('Hello')

let foodInput = document.getElementById("foodInput");
let foodSubBtn = document.getElementById("foodSubBtn");
let foodReturn = document.getElementById("foodReturn");





let saveInput = "";
let sayHelloUrl = "";

foodSubBtn.addEventListener("click", function () {
  foodApi(foodInput);
});

foodInputLower = foodInput.value.toLowerCase();

console.log(foodSubBtn);


function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
        foodReturn.textContent = data;
      console.log(data);
    });
}

function foodApi(foodInputLower) {
  // //data validation
  // var letters = /^[A-Za-z]+$/;
    saveInput = foodInputLower.value;
    
    foodUrl =
      "https://jessieallforonebe.azurewebsites.net/restaurantpicker/foodpicker/" +
      saveInput;
    urlCall(foodUrl);
}
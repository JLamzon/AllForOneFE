console.log('Hello')

let reverseSubBtn = document.getElementById("reverseSubBtn");
let reverseInput = document.getElementById("reverseInput");
let reverseReturn = document.getElementById("reverseReturn");

let saveInput = "";
let sayHelloUrl = "";

reverseSubBtn.addEventListener("click", function () {
  reverseApi(reverseInput);
});


function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('reverseReturn').innerText = data;
    });
}

function reverseApi(reverseInput) {
  // //data validation
  // var letters = /^[A-Za-z]+$/;
    saveInput = reverseInput.value;
    
    reverseUrl =
      "https://jessieallforonebe.azurewebsites.net/reverseit/reverse/" +
      saveInput;
    urlCall(reverseUrl);
}
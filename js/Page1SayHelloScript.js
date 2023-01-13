//mini challenge 1
let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");

let saveInput = "";
let sayHelloUrl = "";

helloSubBtn.addEventListener("click", function () {
  helloApi(nameInput);
});



function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      helloReturn.textContent = data;
      console.log(data);
    });
}

function helloApi(nameInput) {
  //data validation
  var letters = /^[A-Za-z]+$/;

  if (nameInput.value.match(letters)) {
    saveInput = nameInput.value;
    sayHelloUrl =
      "https://jessieallforonebe.azurewebsites.net/sayhello/hello/" +
      saveInput;
    urlCall(sayHelloUrl);
  } else {
    helloReturn.textContent = "Enter a valid response";
  }
}
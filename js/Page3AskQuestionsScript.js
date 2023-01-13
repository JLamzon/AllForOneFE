console.log('Hello')

let nameInput = document.getElementById("nameInput");
let timeInput = document.getElementById("timeInput");
let askReturn = document.getElementById("askReturn");
let askSubBtn = document.getElementById("askSubBtn");

let saveInput = "";
let askUrl = "";

askSubBtn.addEventListener("click", function () {
  AskApi(nameInput, timeInput );
});

console.log(nameInput);
console.log(timeInput);

function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      askReturn.textContent = data;
      console.log(data);
    });
}

function AskApi(nameInput, timeInput) {

  saveInput = nameInput.value;
  saveInput2 = timeInput.value;


    askUrl =
      "https://jessieallforonebe.azurewebsites.net/askquestions/askquestions/" +
      saveInput + "/" + saveInput2;
    urlCall(askUrl);

}


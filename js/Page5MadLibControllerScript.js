console.log("Hello");

let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let thirdInput = document.getElementById("thirdInput");
let fourthInput = document.getElementById("fourthInput");
let fifthInput = document.getElementById("fifthInput");
let sixthInput = document.getElementById("sixthInput");
let seventhInput = document.getElementById("seventhInput");
let eigthInput = document.getElementById("eigthInput");
let ninthInput = document.getElementById("ninthInput");

let madReturn = document.getElementById("madReturn");
let madSubBtn = document.getElementById("madSubBtn");

let saveInput = "";
let madUrl = "";

madSubBtn.addEventListener("click", function () {
  madApi(
    firstInput,
    secondInput,
    thirdInput,
    fourthInput,
    fifthInput,
    sixthInput,
    seventhInput,
    eigthInput
  );
});

function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      madReturn.textContent = data;
      console.log(data);
    });
}

function madApi(
  firstInput,
  secondInput,
  thirdInput,
  fourthInput,
  fifthInput,
  sixthInput,
  seventhInput,
  eigthInput
) {
  //data validation
  // var letters = /^[A-Za-z]+$/;

  // if (nameInput.value.match() && timeInput.value.match(letters) ) {
  saveInput = firstInput.value;
  saveInput2 = secondInput.value;
  saveInput3 = thirdInput.value;
  saveInput4 = fourthInput.value;
  saveInput5 = fifthInput.value;
  saveInput6 = sixthInput.value;
  saveInput7 = seventhInput.value;
  saveInput8 = eigthInput.value;

  //   console.log(saveInput)

  madUrl =
    "https://jessieallforonebe.azurewebsites.net/madlib/madlib/" +
    saveInput +
    "/" +
    saveInput2 +
    "/" +
    saveInput3 +
    "/" +
    saveInput4 +
    "/" +
    saveInput5 +
    "/" +
    saveInput6 +
    "/" +
    saveInput7 +
    "/" +
    saveInput8;
  urlCall(madUrl);
  // } else {
  //   askReturn.textContent = "Enter a valid response";
  // }
}

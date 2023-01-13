console.log('Hello')

let numberOneInput = document.getElementById('numberOneInput');
let numberTwoInput = document.getElementById('numberTwoInput');
let greaterSubBtn = document.getElementById('greaterSubBtn');
let greaterReturn = document.getElementById('greaterReturn');

    greaterSubBtn.addEventListener("click", function () {
    greaterApi(numberOneInput, numberTwoInput);
  });

function urlCall(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        greaterReturn.textContent = data;
        console.log(data);
      });
  }

function greaterApi(numberOneInput, numberTwoInput)
{
    saveInput = numberOneInput.value;
    saveInput2 = numberTwoInput.value;

    greaterUrl =
    "https://jessieallforonebe.azurewebsites.net/greaterorless/greaterthanlessthan/" + saveInput + "/" + saveInput2;
    urlCall(greaterUrl)
}
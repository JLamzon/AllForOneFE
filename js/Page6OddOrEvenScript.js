console.log('Hello')

let numberInput = document.getElementById('numberInput');
let oddOrEvenSubBtn = document.getElementById('oddOrEvenSubBtn');
let oddOrEvenReturn = document.getElementById('oddOrEvenReturn');


oddOrEvenSubBtn.addEventListener("click", function () {
    oddOrEvenApi(numberInput);
  });

  console.log(numberInput);

function urlCall(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        oddOrEvenReturn.textContent = data;
        console.log(data);
      });
  }

function oddOrEvenApi(numberInput)
{
    saveInput = numberInput.value;

    oddUrl =
    "https://jessieallforonebe.azurewebsites.net/oddoreven/oddoreven/" + saveInput;
    urlCall(oddUrl)
}
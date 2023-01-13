console.log('Hello')

let numberInput = document.getElementById('numberInput');
let numberInputTwo = document.getElementById('numberInputTwo');
let addingSubBtn = document.getElementById('addingSubBtn');
let addReturn = document.getElementById('addReturn');

console.log(numberInput);

addingSubBtn.addEventListener("click", function () {
    addingApi(numberInput, numberInputTwo );
  });


function urlCall(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        addReturn.textContent = data;
        console.log(data);
      });
  }

function addingApi(numberInput, numberInputTwo)
{
    saveInput = numberInput.value;
    saveInput2 = numberInputTwo.value;

    addingUrl =
    "https://jessieallforonebe.azurewebsites.net/adding2numbers/adding/" + saveInput + "/" + saveInput2;
    urlCall(addingUrl)
}
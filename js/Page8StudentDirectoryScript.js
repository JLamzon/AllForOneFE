console.log('Hello')

let firstNameBtn = document.getElementById("firstNameBtn");
let lastNameBtn = document.getElementById("lastNameBtn");
let slackNameBtn = document.getElementById("slackNameBtn");
let emailBtn = document.getElementById("emailBtn");
let hobbiesBtn = document.getElementById("hobbiesBtn");
let studentReturn = document.getElementById("studentReturn");

let saveInput = "";
const studentInfo = JSON.stringify(studentInput);

firstNameBtn.addEventListener("click", function () {
  studentApi(studentInput);
});

lastNameBtn.addEventListener("click", function () {
  lastNameApi(studentInput);
});

slackNameBtn.addEventListener("click", function () {
  slackApi(studentInput);
});

emailBtn.addEventListener("click", function () {
  emailApi(studentInput);
});


function urlCall(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      const {firstName, lastName, slackName, email} = data
      document.getElementById('studentReturn').innerHTML = `
      First Name: ${firstName}<br>
      Last Name: ${lastName}<br>
      Slack Name: ${slackName}<br>
      Email: ${email}`;

    });
}


function studentApi(studentInput) {

    saveInput = studentInput.value;
    
    studentUrl =
      "https://jessieallforonebe.azurewebsites.net/studentdirectory/getstudentbyfirstname/" +
      saveInput;
    urlCall(studentUrl);
}

//------------------Last Name

function lastNameApi(studentInput) {

    saveInput = studentInput.value;
    
    studentUrl =
      "https://jessieallforonebe.azurewebsites.net/studentdirectory/getstudentbylastname/" +
      saveInput;
    urlCall(studentUrl);
}

//-----------------slack name

function emailApi(studentInput) {

    saveInput = studentInput.value;
    
    studentUrl =
      "https://jessieallforonebe.azurewebsites.net/studentdirectory/getstudentbyemail/" +
      saveInput;
    urlCall(studentUrl);
}

//------------------email

function slackApi(studentInput) {

    saveInput = studentInput.value;
    
    studentUrl =
      "https://jessieallforonebe.azurewebsites.net/studentdirectory/getstudentbyslackname/" +
      saveInput;
    urlCall(studentUrl);
}
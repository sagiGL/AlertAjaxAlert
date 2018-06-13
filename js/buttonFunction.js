
const delayDisplay = document.getElementById("d1");
// function  randomizedAlert() {
//     let randomNumber = Math.floor(Math.random() * 5000);
//     setTimeout( function () {
//         alert("Hello! I am an alert box!!")
//     }, randomNumber);
//     console.log(delayDisplay);
//     delayDisplay.innerText = "response returned after " + randomNumber + "ms";
// }

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            delayDisplay.innerHTML=  xhttp.status;
            alert(xhttp.response)
        }
    };
    xhttp.open("GET", "data/response.txt", true);
    xhttp.send();
}
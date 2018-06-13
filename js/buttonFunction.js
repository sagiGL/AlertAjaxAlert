const statusDisplay = document.getElementById("d1");

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            statusDisplay.innerHTML=  "http status: " + xhttp.status;
            alert(xhttp.response);
        }
    };
    xhttp.open("GET", "data/response.txt", true);
    xhttp.send();
}


// function  randomizedAlert() {
//     let randomNumber = Math.floor(Math.random() * 5000);
//     setTimeout( function () {
//         alert("Hello! I am an alert box!!")
//     }, randomNumber);
//     console.log(delayDisplay);
//     delayDisplay.innerText = "response returned after " + randomNumber + "ms";
// }
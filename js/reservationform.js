
//select variable to select required elements in the reservation form
const modal = document.querySelector(".modal-dialog");
const reservebutton = document.querySelector(".reservetable");
const modalreservetable = document.querySelector(".modalreservetable");
const reserveform = document.getElementById("userForm");
const fname = document.querySelector("#name");
const emailaddress = document.querySelector("#exampleInputEmail1");
const selecteddatetime = document.querySelector("#result");
const tablenumber = document.getElementById("randomNumber");


//
/* reservebutton.onclick = function() {
    modal.style.display = "block";
} */

//function to grab the entries in the reservation form and save it in local storage. The function also shows an error if the user has left any field blank.

function reserveatable(event) {
    event.preventDefault();
    if (!fname.value || !emailaddress.value || !result.value) {
        let element = document.querySelector ('#error');
        element.innerHTML = "All fields are mandatory. Update fields and resubmit";
        element.style = "color:red";
        return;
        }
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("exampleInputEmail1").value,
        dateAndTime: document.getElementById("result").value,
        tableNumber: Math.floor(Math.random() * 10) + 1,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "reservationconfirmation.html";


}


modalreservetable.addEventListener('click', reserveatable);


//function for date picker in the reservation form.
$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });
});

function updateDateTime() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    
    if (date && time) {
        const result = `${date} ${time}`;
        document.getElementById('result').value = result;
    } else {
        alert('Please select both date and time.');
    }
}
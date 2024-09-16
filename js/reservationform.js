
//select variable to select required elements in the reservation form
const modal = document.querySelector(".modalDialog");
const reserveButton = document.querySelector(".reserveTable");
const modalReserveTable = document.querySelector(".modalReserveTable");
const reserveForm = document.getElementById("userForm");
const fName = document.querySelector("#name");
const emailAddress = document.querySelector("#exampleInputEmail1");
const selectedDateTime = document.querySelector("#result");
const tableNumber = document.getElementById("randomNumber");

//function to grab the entries in the reservation form and save it in local storage. The function also shows an error if the user has left any field blank.

function reserveaTable(event) {
    event.preventDefault();
    if (!fName.value || !emailAddress.value || !result.value) {
        let element = document.querySelector ('#error');
        element.innerHTML = "All fields are mandatory. Update fields and resubmit";
        element.style = "color:red";
        return;
        }
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("exampleInputEmail1").value,
        date: document.getElementById("dateInput").value,
        time: document.getElementById("timeInput").value,
        guest:document.getElementById("guest").value,
        tableNumber: Math.floor(Math.random() * 10) + 1,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Clear form and Trigger the close modal button
    triggerCloseModalButton();

    window.location.hash = "#/confirmation"
    
}

// Function to close the modal
function triggerCloseModalButton() {
    document.getElementById("name").value = ''
    document.getElementById("exampleInputEmail1").value = ''
    document.getElementById("dateInput").value = ''
    document.getElementById("timeInput").value = ''
    document.getElementById("guest").value = ''
    document.getElementById("result").value = ''
    const closeButton = document.querySelector('.modalClose');
    if (closeButton) {
        closeButton.click();
    } else {
        console.error('Close modal button not found');
    }
}


modalReserveTable.addEventListener('click', reserveaTable);

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
    const guest = document.getElementById('guest').value;
    
    if (date && time && guest) {
        const result = `Date: ${date}, Time: ${time}, Guest: ${guest}`;
        document.getElementById('result').value = result;
    } else {
        alert('Please select date, time and number of guest.');
    }
}

//select variable to select required elements in the reservation form
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("userForm");

//
btn.onclick = function() {
    modal.style.display = "block";
}

//function to close 
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function(e) {
    e.preventDefault();
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "reservationconfirmation.html";
}
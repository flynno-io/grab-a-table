
//Add a event listner to run a function that loads content from local storage when the page loads (resource - https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
document.addEventListener('DOMContentLoaded', function() {

    //select variable to select required elements.
    const userInfo = document.getElementById("userInfo");
    const randomNumberSpan = document.getElementById("randomNumber");
    
    //grab inputs from local storage     
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        userInfo.innerHTML = `
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Message:</strong> ${userData.message}</p>
        `;
    } else {
    //publish data from local storage as inner HTML
        userInfo.innerHTML = "<p>No user data found.</p>";
    }

    //assign variable that shows the table number using random number. 
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    randomNumberSpan.textContent = randomNumber;
});
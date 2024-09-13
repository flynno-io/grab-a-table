// Add a eventListener to run a function that loads content from localStorage 
// when the page loads (resource - https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
document.addEventListener("DOMContentLoaded", function () {
	//select variable to select required elements.
	const userInfo = document.getElementById("userInfo")

	//grab inputs from local storage
	const userData = JSON.parse(localStorage.getItem("userData"))
	if (userData) {
		userInfo.innerHTML = `
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Table ${userData.tableNumber} has been reserved for you! <strong></p>
        `
	} else {
		//publish data from local storage as inner HTML
		userInfo.innerHTML = "<p>No user data found.</p>"
	}
})

// TODO: move the code into the 'confirmationPage.js'

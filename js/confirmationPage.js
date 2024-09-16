// js/confirmationPage.js

class ConfirmationPage extends HTMLElement {
	constructor() {
		super()
	}

	render() {
		this.innerHTML = `
            <section id="confirmation-page" class="m-5">
                <div class="container text-center d-flex justify-content-center">
                    <div class="col-8 text-start text-md-center d-flex flex-fill flex-column mx-3" id="userInfo"></div>
                </div>
            </section>
        `
	}

	connectedCallback() {
		this.render()

		// select variable to select required elements.
		const userInfo = document.getElementById("userInfo")

		//grab inputs from local storage
		const userData = JSON.parse(localStorage.getItem("userData"))
		if (userData) {
			userInfo.innerHTML = `
                <h1 class="fw-bold">Table Reserved For <span style="color: darkorange;">${userData.name}</span></h1>
                <p class="fs-5"><strong>Email:</strong> ${userData.email}</p>
                <p class="fs-5"><strong>Date:</strong> ${userData.date}</p>
                <p class="fs-5"><strong>Time:</strong> ${userData.time}</p>
                <p class="fs-5"><strong>Table ${userData.tableNumber} has been reserved for ${userData.guest} guest(s)! </strong></p>
            `
		} else {
			//publish data from local storage as inner HTML
			userInfo.innerHTML = `
                <div>
                    <img class="warning-icon" src="../assets/images/warning.png" alt="warning message" />
                    <p class="fs-3 fw-medium">No user data found.</p>
                </div>
            `
		}
	}
}

customElements.define("confirmation-page", ConfirmationPage)

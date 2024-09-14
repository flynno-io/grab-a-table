// js/confirmationPage.js

class ConfirmationPage extends HTMLElement {
	constructor() {
		super()
    }

    render() {
        this.innerHTML = `
            <section id="confirmation-page">
                <div class="container text-center">
                    <div class="row align-items-center">
                    </div>
                    <div class="row align-items-center">
                        <div class="col-12" id="userInfo">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-12" id="randomNumber">
                            
                        </div>
                    </div>
                </div>
            </section>
        `
    }

    connectedCallback() {
        this.render()
        
            //select variable to select required elements.
            const userInfo = document.getElementById("userInfo")
        
            //grab inputs from local storage
            const userData = JSON.parse(localStorage.getItem("userData"))
            if (userData) {
                userInfo.innerHTML = `
                    <h1>Table Reserved For ${userData.name} </h1>
                    <p><strong>Email:</strong> ${userData.email}</p>
                    <p><strong>Date:</strong> ${userData.date}</p>
                    <p><strong>Time:</strong> ${userData.time}</p>
                    <p><strong>Table ${userData.tableNumber} has been reserved for ${userData.guest} guest! <strong></p>
                `
            } else {
                //publish data from local storage as inner HTML
                userInfo.innerHTML = "<p>No user data found.</p>"
            }
        }
}

customElements.define("confirmation-page", ConfirmationPage);

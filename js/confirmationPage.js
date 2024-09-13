// js/confirmationPage.js

class ConfirmationPage extends HTMLElement {
	constructor() {
		super()
    }

    render() {
        this.innerHTML = `
            <section>
                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <h1>Reservation Confirmed</h1>
                        </div>
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
                    <p><strong>Name:</strong> ${userData.name}</p>
                    <p><strong>Email:</strong> ${userData.email}</p>
                    <p><strong>Table ${userData.tableNumber} has been reserved for you! <strong></p>
                `
            } else {
                //publish data from local storage as inner HTML
                userInfo.innerHTML = "<p>No user data found.</p>"
            }
        }
}

customElements.define("confirmation-page", ConfirmationPage);

// js/signupPage.js

class SignupPage extends HTMLElement {
	constructor() {
		super()
	}

	render() {
		this.innerHTML = `
            <section class="container-fluid m-0 mt-3 mt-sm-5 h-50 d-flex flex-column justify-content-center align-items-center">
                <div class="signup-wrapper px-4 py-3 d-flex w-60 h-60 rounded-2 mw-sm-20">
                    <form id="signup-form" class="w-100 h-100 m-2 d-flex flex-column flex-nowrap justify-content-around gap-2">
                        <h1 class="fw-bold fs-1 m-0 p-0 text-center">Sign Up</h1>
                        <p class="mx-4 my-2 fs-6 text-center lh-1">Sign up to simplify your next restaurant reservation</p>
                        <div class="input-box my-1">
                            <input id="signup-fname" class="w-100 h-100 ps-3 rounded-1 border-0" type="text" placeholder="First Name" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="signup-lname" class="w-100 h-100 ps-3 rounded-1 border-0" type="text" placeholder="Last Name" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="signup-username" class="w-100 h-100 ps-3 rounded-1 border-0" type="text" placeholder="Username" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="signup-email" class="w-100 h-100 ps-3 rounded-1 border-0" type="email" placeholder="Email" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="signup-password" class="w-100 h-100 ps-3 rounded-1 border-0" type="Password" placeholder="Password" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="signup-confirm-password" class="w-100 h-100 ps-3 rounded-1 border-0" type="Password" placeholder="Confirm Password" required>
                        </div>
                        <button id="sign-up-btn" type="submit" class="btn">Signup</button>
                        <span id="signup-error" class="w-100 h-20 m-0 my-1 p-1 text-warning fst-italic"></span>
                    </form>
                </div>
                <p class="w-60 m-1 mx-2 p-1 text-start">Already have an account? <a href="#/login">Log in</a></p>
            </section>
        `
	}

	connectedCallback() {
		this.render()

		//select variable to select required elements in the reservation form
		const fname = document.getElementById("signup-fname")
		const lname = document.getElementById("signup-lname")
		const username = document.getElementById("signup-username")
		const email = document.getElementById("signup-email")
		const password = document.getElementById("signup-password")
		const confirmPassword = document.getElementById("signup-confirm-password")
		const error = document.getElementById("signup-error")
		// const signupButton = document.getElementById("sign-up-btn");
		const signUpForm = document.getElementById("signup-form")

		function signup(event) {
			event.preventDefault()

			// check that all values are completed
			if (
				!fname.value ||
				!lname.value ||
				!username.value ||
				!email.value ||
				!password.value ||
				!confirmPassword.value
			) {
				error.innerHTML = "Please add all required information!"
				return
			} else if (password.value.length < 8) { // ensures password is at least 8 characters
				error.innerHTML = "Password must be more than 8 characters"
				return
			} else if (password.value != confirmPassword.value) { // ensures no errors in the final password
				error.innerHTML = "Please ensure your passwords match"
				return
			} else {
                error.innerHTML = ''
            }

			// create User Credential object
			const userCredentials = {
				firstName: fname.value,
				lastName: lname.value,
				username: username.value,
				email: email.value,
				password: confirmPassword.value,
			}

			// encrypt the data
            const encryptedUserCredentials = encryptData(userCredentials)

			// save encrypted data to local storage
			localStorage.setItem("userCredentials", encryptedUserCredentials)
            console.log('Sign up successful!')
		}

        function encryptData(obj) {
            // Secret key for encryption/decryption
            const secretKey = "gat-aljj-20240805"; // normally would be stored on server

            // Convert object to string for encryption
            const credentialsString = JSON.stringify(obj);

            // Encrypt the string using AES
            const encryptedCredentials = CryptoJS.AES.encrypt(credentialsString, secretKey).toString();

            return encryptedCredentials
        }

		// Run validation, encrypt credentials, save to Local Storage
		signUpForm.addEventListener("submit", signup)
	}
}
customElements.define("signup-page", SignupPage)

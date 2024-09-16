// js/loginPage.js

class LoginPage extends HTMLElement {
	constructor() {
		super()
	}

    render() {
        this.innerHTML = `
            <section class="container-fluid m-0 mt-3 mt-sm-5 h-50 d-flex flex-column justify-content-center align-items-center">
                <div id="login-container" class="login-wrapper px-4 py-3 d-flex w-60 h-60 rounded-2 mw-sm-20">
                    <form id="login-form" class="w-100 h-100 m-2 d-flex flex-column flex-nowrap justify-content-around gap-2">
                        <h1 class="fw-bold fs-1 m-0 p-0 text-center">Login</h1>
                        <p class="mx-4 my-2 fs-6 text-center lh-1">Sign in to schedule your next restaurant reservation</p>
                        <div class="input-box my-1">
                            <input id="login-username" class="w-100 h-100 ps-3 rounded-1 border-0" type="text" placeholder="Username" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="login-email" class="w-100 h-100 ps-3 rounded-1 border-0" type="email" placeholder="Email" required>
                        </div>
                        <div class="input-box my-1">
                            <input id="login-password" class="w-100 h-100 ps-3 rounded-1 border-0" type="Password" placeholder="Password" required>
                        </div>
                        <button id="login-btn" type="submit" class="btn">Login</button>
                        <span id="login-error" class="w-100 h-20 m-0 my-1 p-1 text-warning fst-italic"></span>
                    </form>
                </div>
                <p class="signup-switch w-60 m-1 mx-2 p-1 text-start">Don't have an account? <a href="#/signup">Sign Up</a></p>
            </section>
        `
    }

    isLoggedIn() {
        // Retrieve the boolean string from session storage
        const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!storedIsLoggedIn) { return false }

        // Convert the string back to a boolean
        const isLoggedInBoolean = storedIsLoggedIn === 'true';
        
        // set variable on
        return isLoggedInBoolean
    }

    connectedCallback() {
        let isLoggedIn = this.isLoggedIn()
        this.render()

        //select variable to select required elements in the reservation form
		const username = document.getElementById("login-username")
		const email = document.getElementById("login-email")
		const password = document.getElementById("login-password")
		const error = document.getElementById("login-error")
		const loginForm = document.getElementById("login-form")
        const loginContainer = document.querySelector(".login-wrapper")

		function signup(event) {
			event.preventDefault()

			if ( // check that all values are completed
				!username.value ||
				!email.value ||
				!password.value
			) {
				error.innerHTML = "Please add all required information!"
				return
			} else {
                error.innerHTML = ''
            }

            // Get 'userCredential' data from localStorage
			const encryptedUserCredentials = localStorage.getItem("userCredentials")

			// Decrypt the data
            const userCredentials = decryptData(encryptedUserCredentials)

            // confirm credentials match
            if (username.value != userCredentials.username) {
                error.innerHTML = 'Username does not match'
                return
            } else if (email.value != userCredentials.email) {
                error.innerHTML = 'Email does not match'
                return
            } else if (password.value != userCredentials.password) {
                error.innerHTML = 'Password is incorrect'
                return
            } else {
                error.innerHTML = ''

                // Set 'IsLoggedIn' to 'true'
                isLoggedIn = true
                sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());

                // Save user credentials to the session too
                sessionStorage.setItem('userCredentials', JSON.stringify(userCredentials))

                console.log('Login successful!')
                loginContainer.innerHTML = `
                    <div class="login-confirmation d-flex flex-column m-1 p-1">
                        <h1>Welcome back, ${userCredentials.firstName}!</h1>
                        <p>When you click on 'Reserve a Table' your data will populate automatically.</p>
                        <a class="btn" href="#/reserve">Begin browsing your next reservation</a>
                    </div>
                `
            }
		}

        function decryptData(encryptedData) {
            // Secret key for encryption/decryption
            const secretKey = "gat-aljj-20240805"; // normally would be stored on server

            // Decrypt the string using AES
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
            const decryptedCredentialsString = decryptedBytes.toString(CryptoJS.enc.Utf8);

            // Convert the decrypted string back to an object
            const decryptedCredentials = JSON.parse(decryptedCredentialsString);

            return decryptedCredentials
        }

        console.log(isLoggedIn)
        if (isLoggedIn) {
            const userCredentials = JSON.parse(sessionStorage.getItem('userCredentials'))
            loginContainer.innerHTML = `
                <div class="login-confirmation d-flex flex-column m-1 p-4 border-1">
                    <h1>${userCredentials.firstName}, you are logged in.</h1>
                    <p>When you click on 'Reserve a Table' your data will populate automatically.</p>
                    <a class="btn" href="#/reserve">Begin browsing your next reservation</a>
                    <p id="logout"><a href="#/login">Log out</a></p>
                </div>
            `

            // Get logout button and add 'logout' function to it
            const logout = document.getElementById("logout")
            logout.addEventListener('click', () => {
                sessionStorage.setItem('isLoggedIn', false.toString())
                sessionStorage.removeItem('userCredentials')
                window.location.reload(true)
            })

        } else {
            // Run validation, encrypt credentials, save to Local Storage
            loginForm.addEventListener("submit", signup)
        }

    }
}

customElements.define("login-page", LoginPage)

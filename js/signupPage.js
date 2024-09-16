// js/signupPage.js

class SignupPage extends HTMLElement {
	constructor() {
		super()
	}

    render() {
        this.innerHTML = `
            <style>${SignupPage.css}</style>
            <section class="container-fluid m-5 h-50 d-flex justify-content-center align-items-center">
                <div class="signup-wrapper px-5 py-4 d-flex w-60 h-60">
                    <form class="w-100 h-100 m-2 d-flex flex-column flex-nowrap justify-content-around gap-2"action="">
                        <h1 class="fw-bold fs-1 m-0 p-0 text-center">Signup</h1>
                        <p class="mx-4 my-2 text-center lh-1">Sign up to schedule your next restaurant reservation</p>
                        <div class="input-box my-1">
                            <input class="w-100 h-100 ps-3 rounded-1 border-0" type="text" placeholder="Username" required>
                        </div>
                        <div class="input-box my-1">
                            <input class="w-100 h-100 ps-3 rounded-1 border-0" type="email" placeholder="Email" required>
                        </div>
                        <div class="input-box my-1">
                            <input class="w-100 h-100 ps-3 rounded-1 border-0" type="Password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn">Signup</button>
                    </form>
                </div>
            </section>
        `
    }

    connectedCallback() {
        this.render()

        //select variable to select required elements in the reservation form
        const username = document.querySelector("#signup-username");
        const email = document.querySelector("#signup-email");
        const password = document.querySelector("#signup-password");
        const signupButton = document.querySelector(".btn");

        console.log(signupButton)

        function signup(event) {
            event.preventDefault();
            if (!username.value || !email.value || !password.value) {
                alert('Please add all required information!')
                return
            }
            const userCredentials = {
                username: username.value,
                email: email.value,
                password: password.value
            };
            localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
        }
        signupButton.addEventListener('click', signup);
    }

    disconnectedCallback() {
        signupButton.removeEventListener('click', signup);
    }
}
customElements.define("signup-page", SignupPage)



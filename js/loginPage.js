// js/loginPage.js

class LoginPage extends HTMLElement {
	constructor() {
		super()
	}

    render() {
        this.innerHTML = `
            <section class="container-fluid m-5 h-50 d-flex justify-content-center align-items-center">
                <div class="login-wrapper px-5 py-4 d-flex w-60 h-60">
                    <form class="w-100 h-100 m-2 d-flex flex-column flex-nowrap justify-content-around gap-2"action="">
                        <h1 class="fw-bold fs-1 m-0 p-0 text-center">Login</h1>
                        <p class="mx-4 my-2 text-center lh-1">Sign in to schedule your next restaurant reservation</p>
                        <div class="input-box my-1">
                            <input class="w-100 h-100 ps-3 rounded-1 border-0" type="text" placeholder="Username" required>
                        </div>
                        <div class="input-box my-1">
                            <input class="w-100 h-100 ps-3 rounded-1 border-0" type="email" placeholder="Email" required>
                        </div>
                        <div class="input-box my-1">
                            <input class="w-100 h-100 ps-3 rounded-1 border-0" type="Password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn">Login</button>
                    </form>
                </div>
            </section>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("login-page", LoginPage)

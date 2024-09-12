// js/loginPage.js

class LoginPage extends HTMLElement {
	constructor() {
		super()
	}

    static css = `
        h1 { color: cornflowerblue; }
    `

    render() {
        this.innerHTML = `
            <style>${LoginPage.css}</style>
            
            <section>
                <h1>Login Page</h1>
                <p>Welcome to the Login Page!</p>
                <button>Please login here!</button>
            </section>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("login-page", LoginPage)

// js/loginPage.js

class LoginPage extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
	}

    static css = `
        h1 { color: cornflowerblue; }
    `

    render() {
        this.shadowRoot.innerHTML = `
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

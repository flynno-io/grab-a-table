// js/signupPage.js

class SignupPage extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
	}

    static css = `
        h1 { color: chartreuse; }
    `

    render() {
        this.shadowRoot.innerHTML = `
            <style>${SignupPage.css}</style>
            
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

customElements.define("signup-page", SignupPage)

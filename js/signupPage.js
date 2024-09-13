// js/signupPage.js

class SignupPage extends HTMLElement {
	constructor() {
		super()
	}

    static css = `
        h1 { color: pink; }
    `

    render() {
        this.innerHTML = `
            <style>${SignupPage.css}</style>
            
            <section>
                <h1>SignUp Page</h1>
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

// js/confirmationPage.js

class ConfirmationPage extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
    }

    static css = `
        h1 { color: Green; }
    `

    render() {
        this.shadowRoot.innerHTML = `
            <style>${ConfirmationPage.css}</style>

            <section>
                <h1>Confirmation Page</h1>
                <p>Welcome to the Confirmation Page!</p>
            </section>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("confirmation-page", ConfirmationPage)

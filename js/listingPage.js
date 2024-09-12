// js/listingPage.js

class ListingPage extends HTMLElement {
	constructor() {
		super()
    }

    static get observedAttributes() {
		return ["name", "logo", "address", "type", "description"]
	}

	attributeChangedCallback(name, _, newValue) {
		this[name] = newValue
		this.render()
	}

    static css = `
        h1 { color: Pink; }
    `

    render() {
        this.innerHTML = `
            <style>${ListingPage.css}</style>

            <section>
                <h1>${this.name} Page</h1>
                <p>Welcome to the ${this.name} Page!</p>
            </section>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("listing-page", ListingPage)

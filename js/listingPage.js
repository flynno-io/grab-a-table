// js/listingPage.js

class ListingPage extends HTMLElement {
	constructor() {
		super()
    }

	static get observedAttributes() {
		return ["id", "name", "logo", "altText", "address", "type", "description"]
	}

	attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
        }
		this.render()
	}

    render() {
        this.innerHTML = `
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

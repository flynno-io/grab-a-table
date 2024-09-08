// js/ListingItem.js

class ListingItem extends HTMLElement {
	static css = `
    h1 { color: purple; }
    `
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = `<p>Loading data...</p>`;
	}

	static get observedAttributes() {
		return ["name", "logo", "address", "type", "description"]
	}

	attributeChangedCallback(name, _, newValue) {
		this[name] = newValue
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = `
        <style>${this.css}</style>
        
        <section>
            <img src="${this.logo}" alt="restaurant photo"/>
            <h2>${this.name}</h2>
            <span class="type">${this.type}</span>
            <span class="address">${this.address}</span>
            <hr>
            <p class="description">${this.description}</p>
        </section>
        `
	}

	connectedCallback() {
		console.log(`Listing: ${this.name} has loaded.`)
	}
}

customElements.define("listing-item", ListingItem)

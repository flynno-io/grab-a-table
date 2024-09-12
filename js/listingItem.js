// js/ListingItem.js

class ListingItem extends HTMLElement {
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
        h2 { color: deeppink; }
    `

	render() {
		this.innerHTML = `
            <style>${ListingItem.css}</style>
            
            <section>
                <img src="${this.logo}" alt="restaurant photo"/>
                <h2>${this.name}</h2>
                <p class="type">${this.type}</p>
                <p class="address">${this.address}</p>
                <p class="description">${this.description}</p>
                <hr>
            </section>
        `
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define("listing-item", ListingItem)

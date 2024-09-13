// js/listingCard.js

class ListingCard extends HTMLElement {
	constructor() {
		super()
	}

	static get observedAttributes() {
		return ["id", "name", "logo", "altText", "address", "type", "description"]
	}

	attributeChangedCallback(name, _, newValue) {
		this[name] = newValue
		this.render()
	}

    // FIXME: fix the console error "Uncaught RangeError: Maximum call stack size exceeded. > listingCard.js:13"
    // the element is being called too many times.

	render() {
		this.innerHTML = `
            <section class="card" style="width: 18rem;">
                <img src="${this.logo}" class="card-img-top" alt="${this.altText}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${this.type}</h6>
                    <p class="card-text">${this.description}</p>
                    <div class="btn-wrapper">
                        <a href="#/reserve/listing/${this.id}" class="btn btn-primary">View restaurant</a>
                        <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Reserve Table
                        </button>
                    </div>
                </div>
                <div class="card-footer">
                    ${this.address}
                </div>
            </section>
        `
	}

	connectedCallback() {
		this.render()
        console.log(this.id)
	}
}

customElements.define("listing-card", ListingCard)

// js/listingCard.js

class ListingCard extends HTMLElement {
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
            <section class="listing card" style="width: 22rem; height: 100%">
                <img src="${this.logo}" class="card-img-top mt-4" alt="${this.altText}">
                <div class="card-body">
                    <h4 class="card-title">${this.name}</h4>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${this.type}</h6>
                    <p class="card-text text-start m-2 p-2">${this.description}</p>
                    <div class="btn-wrapper d-flex flex-row flex-nowrap m-2 justify-content-around">
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
	}
}

customElements.define("listing-card", ListingCard)

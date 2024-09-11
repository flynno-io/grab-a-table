// js/listingPage.js

class ListingPage extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
        this.name = 'TEST'
	}

    static css = `
        h1 { color: chartreuse; }
    `

    render() {
        this.shadowRoot.innerHTML = `
            <style>${ListingPage.css}</style>
            
            <section>
                <h1>Listing Page for ${Listing.name}</h1>
                <p>Welcome to the Login Page!</p>
                <button>Please login here!</button>
            </section>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("listing-page", ListingPage)

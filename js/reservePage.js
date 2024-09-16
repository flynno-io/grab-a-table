// js/reservePage.js

class ReservePage extends HTMLElement {
	constructor() {
		super()
	}

    // Fetch data using async/await
    async fetchData() {
        const response = await fetch('../assets/data/listings.json');
        // Handle potential HTTP errors
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        return await response.json();
    }

    // Render the component based on fetched data
    render(data) {
        const listings = data.listings
        this.innerHTML = `
            <section class="reserve-page-title container-fluid m-0 p-3 text-center text-dark">
                <h1 class="mb-3 pb-2 mx-sm-5">Reserve a Table</h1>
                <p class="mb-4 mx-sm-5 text-start">Browse through the participating restaurants. Click 'View restaurant' to read learn more or click 'Reserve Table' if you like what you see.</p>
                <div id="listings_div" class="d-flex flex-row align-items-start justify-content-center flex-wrap gap-3"></div>
            </section>
        `

        // get the target element to append listings to
		const listingsEl = this.querySelector("#listings_div")

	    // loop through the listing array provided and create
		// a <listing-card> for each object
        listings.forEach((listingObj, index) => {
            // console.log(listing, index)
			const listing = document.createElement("listing-card")
            listing.setAttribute("id", listingObj.id)
			listing.setAttribute("name", listingObj.name)
			listing.setAttribute("logo", listingObj.logo)
			listing.setAttribute("address", listingObj.address)
			listing.setAttribute("type", listingObj.type)
			listing.setAttribute("description", listingObj.description)
            listingsEl.appendChild(listing)
		})
    }

    // Handle errors gracefully
    renderError(error) {
        this.innerHTML = `
        <div>
            <h2>Error Loading Data</h2>
            <p>${error}</p>
        </div>
        `;
    }

	async connectedCallback() {
        // get listings from 'listings.json' file
        try {
            const data = await this.fetchData();
            this.render(data);
        } catch (error) {
            this.renderError(error);
        }
	}

}

customElements.define("reserve-page", ReservePage)

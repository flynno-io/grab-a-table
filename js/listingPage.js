// js/listingPage.js

class ListingPage extends HTMLElement {
	constructor() {
		super()
    }

	static get observedAttributes() {
		return ["id", "name", "logo", "altText", "address", "type", "description", 
            "caption", "caption2", "caption3", "caption4", "caption5", 
            "carousel1", "carousel2", "carousel3", "carousel4", "carousel5"
        ]
	}

	attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
        }
		this.render()
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

    render(listingObj) {
        this.innerHTML = `
            <section>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img src="${listingObj.logo}" class="w-50" alt="Taco Guild img">
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <h1 class="display-1 fw-bold .text-left">${listingObj.name} </h1>
                        </div>
                    </div>
                </div>       
                <div class="container text-center">
                    <div class="row">
                        <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">Reserve Table</button>
                    </div>
                    <div class="row">
                        <div class="card">
                            <dl>
                            <dt>Description:</dt>
                            <dd>${listingObj.description}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <dl>
                            <dt>Address:</dt>
                            <dd>${listingObj.address}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <dt>Cuisines:</dt>
                            <dd>${listingObj.type}</dd>
                        </div>
                        <div class="card">
                            <dt>Average Cost:</dt>
                            <dd>${listingObj.cost}</dd>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <h2>Popular Dishes:</h2>
                        </div>
                    </div>
                    <div class="row">
                        <section id="hero" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators mb-1">
                                <button type="button" data-bs-target="#hero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#hero" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#hero" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#hero" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#hero" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner width=50rem">
                                <div class="carousel-item active">
                                    <img src="${listingObj.carousel1}" class="d-block w-100">
                                    <div class="carousel-caption">
                                        <p class="text-center">${listingObj.caption}<p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel2}" class="d-block w-100">
                                    <div class="carousel-caption">
                                        <p class="text-center">${listingObj.caption2}</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel3}" class="d-block w-100">
                                    <div class="carousel-caption">
                                        <p class="text-center">${listingObj.caption3}</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel4}" class="d-block w-100">
                                    <div class="carousel-caption">
                                        <p class="text-center">${listingObj.caption4}</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel5}" class="d-block w-100">
                                    <div class="carousel-caption">
                                        <p class="text-center">${listingObj.caption5}</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </section>
                    </div>
                </div>
            </section>
        `
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
            const listing = data.listings.find(listing => listing.id === this.id)
            console.log(listing)
            this.render(listing);
        } catch (error) {
            this.renderError(error);
        }
    }
}

customElements.define("listing-page", ListingPage)

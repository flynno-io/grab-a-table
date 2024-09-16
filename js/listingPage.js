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
        const response = await fetch('/assets/data/listings.json');
        
        // Handle potential HTTP errors
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        return await response.json();
    }

    render(listingObj) {
        this.innerHTML = `
            <section>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="my-4 p-0 col-lg-6 col-md-12 col-sm-12">
                            <img src="${listingObj.logo}" class="w-50" alt="Taco Guild img">
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 align-self-center">
                            <h1 class="display-1 fw-bold text-left">${listingObj.name} </h1>
                        </div>
                    </div>
                </div>       
                <div class="container-fluid text-center">
                    <div class="row mx-3 mt-2 mb-4">
                        <button type="button" class="btn btn-primary fs-5 reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">Reserve Table</button>
                    </div>
                    <div class="row">
                        <div class="">
                            <dl class="mx-3 my-1 m-0 mx-3 p-1 d-flex flew-nowrap align-items-start text-start border-top">
                                <dt class="fs-6 me-2 pe-4">Description:</dt>
                                <dd class="fs-6 m-0 ms-3 p-0">${listingObj.description}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="">
                            <dl class="mx-3 my-1 m-0 mx-3 p-1 d-flex flew-nowrap align-items-start text-start border-top">
                                <dt class="fs-6 me-2 pe-4">Address:</dt>
                                <dd class="fs-6 m-0 ms-3 p-0">${listingObj.address}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="">
                            <dl class="mx-3 my-1 m-0 mx-3 p-1 d-flex flew-nowrap align-items-start text-start border-top">
                                <dt class="fs-6 me-2 pe-4">Cuisines:</dt>
                                <dd class="fs-6 m-0 ms-3 p-0">${listingObj.type}</dd>
                            </dl>
                        </div>
                        <div class="mb-4">
                            <dl class="mx-3 my-1 m-0 mx-3 p-1 d-flex flew-nowrap align-items-start text-start border-top border-bottom">
                                <dt class="fs-6 me-2 pe-4">Average Cost:</dt>
                                <dd class="fs-6 m-0 ms-3 p-0">${listingObj.cost}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="">
                            <h2 class="fw-bold">Popular Dishes:</h2>
                        </div>
                    </div>
                    <div class="row mx-1">
                        <section id="food-carousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators mb-1">
                                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner width=50rem">
                                <div class="carousel-item active">
                                    <img src="${listingObj.carousel1}" class="d-block w-100">
                                    <div class="carousel-caption m-2 p-2">
                                        <p class="text-center m-2 p-2">${listingObj.caption}<p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel2}" class="d-block w-100">
                                    <div class="carousel-caption m-2 p-2">
                                        <p class="text-center m-2 p-2">${listingObj.caption2}</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel3}" class="d-block w-100">
                                    <div class="carousel-caption m-2 p-2">
                                        <p class="text-center m-2 p-2">${listingObj.caption3}</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel4}" class="d-block w-100">
                                    <div class="carousel-caption m-2 p-2">
                                        <p class="text-center m-2 p-2">${listingObj.caption4}</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="${listingObj.carousel5}" class="d-block w-100">
                                    <div class="carousel-caption m-2 p-2">
                                        <p class="text-center m-2 p-2">${listingObj.caption5}</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#food-carousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#food-carousel" data-bs-slide="next">
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

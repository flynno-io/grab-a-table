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
                        <h1 class="display-1 fw-bold text-left">${listingObj.name} </h1>
                    </div>
                </div>
            </div>
  
        

            <div class="container text-center">
                <div class="row">
                    <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">Reserve Table</button>
                </div>
                <div class="row">
                    <div class="card">
                        <h2>Description:</h2>
                        <p>${listingObj.description} </p>
                  </div>
                </div>
                <div class="row">
                        <div class="card">
                            <h2>Address: ${listingObj.address} </h2>
                        </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h2>Cuisines: ${listingObj.type}</h2>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h2>Average Cost: ${listingObj.cost}</h2>
                        </div>
                    </div>
                </div>
                <div class="row"></div>
                        <div class="card">
                            <h2>Popular Dishes:</h2>
                        </div>
                </div>
                <div class="row"></div>
                    <div class="col">
                        <div class="card">   
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

        <section id="hero" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators mb-1">
                <button type="button" data-bs-target="#hero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#hero" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#hero" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#hero" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#hero" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#hero" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#hero" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/images/tacos.jpg" class="d-block w-100" alt="Pastor tacos">
                    <div class="carousel-caption">
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/tacos-2-food.jpg" class="d-block w-100" alt="Ceviche">
                    <div class="carousel-caption">
                    </div>
                </div>
                <div class="carousel-item">
                <img src="../assets/images/taco-3-food.jpg" class="d-block w-100" alt="Spicy Cocktail">
                    <div class="carousel-caption">
                        <h5></h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/tacos-4.jpg" class="d-block w-100" alt="Sauced Tacos">
                    <div class="carousel-caption">
                        <h5></h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/tacos-5.jpg" class="d-block w-100" alt="">
                    <div class="carousel-caption">
                        <h5></h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/tacos-6.jpg" class="d-block w-100" alt="">
                    <div class="carousel-caption">
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

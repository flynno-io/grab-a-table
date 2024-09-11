// js/homePage.js

class HomePage extends HTMLElement {
	constructor() {
		super()
	}

	render() {
		this.innerHTML = `            
            <div id="homePage" class="page-wrapper">
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
                            <img src="../assets/images/sun_bathed_restaurant.jpeg" class="d-block w-100" alt="Sun-bathed restaurant">
                            <div class="carousel-caption">
                                <h5>Reserve a table</h5>
                                <p>Review, reserve, and relax before your next meal out.</p>
                                <button class="btn btn-primary">Reserve</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/family_dinner.jpeg" class="d-block w-100" alt="Family night out for dinner">
                            <div class="carousel-caption">
                                <h5>A table for family</h5>
                                <p>Find restaurants that are perfect for your next family outing.</p>
                                <button class="btn btn-primary">Reserve</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/images/plate_collage.jpeg" class="d-block w-100" alt="collage of fancy dishes">
                            <div class="carousel-caption">
                                <h5>Find the food you love</h5>
                                <p>Peruse each restaurants menu for the food you enjoy!</p>
                                <button class="btn btn-primary">Menus</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/father_w_kids.jpeg" class="d-block w-100" alt="father with his kids">
                            <div class="carousel-caption">
                                <h5>Reserve in advance</h5>
                                <p>Book a table up to 3 weeks in advance so you can plan ahead. </p>
                                <button class="btn btn-primary">Reserve</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/fancy_beach_restaurant.jpeg" class="d-block w-100" alt="fancy sea-side restaurant">
                            <div class="carousel-caption">
                                <h5>Fancy Night out</h5>
                                <p>Whether its fancy or family, we have table reservations for a variety of restaurants. Check it out.</p>
                                <button class="btn btn-primary">Reserve</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/selfie_w_friends.jpeg" class="d-block w-100" alt="Friends taking a selfie at a bar">
                            <div class="carousel-caption">
                                <h5>Tables for groups</h5>
                                <p>Find restaurants that accommodate large groups for your next friend meet up.</p>
                                <button class="btn btn-primary">Reserve</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/relaxed_bar.jpeg" class="d-block w-100" alt="Cozy bay-side bar">
                            <div class="carousel-caption">
                                <h5>Time for you</h5>
                                <p>Book a table at your favorite café for when you need a little <i>me</i> time.</p>
                                <button class="btn btn-primary">Schedule</button>
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
        `
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define("home-page", HomePage)

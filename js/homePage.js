// js/homePage.js

class HomePage extends HTMLElement {
	constructor() {
		super()
	}

	render() {
		this.innerHTML = `
            <section id="homePage" class="page-wrapper">
                <div id="hero" class="carousel slide" data-bs-ride="carousel">
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
                                <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reserve Table
                                </button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/family_dinner.jpeg" class="d-block w-100" alt="Family night out for dinner">
                            <div class="carousel-caption">
                                <h5>A table for family</h5>
                                <p>Find restaurants that are perfect for your next family outing.</p>
                                <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reserve Table
                                </button>
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
                                <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reserve Table
                                </button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/fancy_beach_restaurant.jpeg" class="d-block w-100" alt="fancy sea-side restaurant">
                            <div class="carousel-caption">
                                <h5>Fancy Night out</h5>
                                <p>Whether its fancy or family, we have table reservations for a variety of restaurants. Check it out.</p>
                                <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reserve Table
                                </button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/selfie_w_friends.jpeg" class="d-block w-100" alt="Friends taking a selfie at a bar">
                            <div class="carousel-caption">
                                <h5>Tables for groups</h5>
                                <p>Find restaurants that accommodate large groups for your next friend meet up.</p>
                                <button type="button" class="btn btn-primary reservetable" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reserve Table
                                </button>
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
                </div>
            </section>
            <section class="hero-title container-fluid m-0 p-3 text-center text-dark bg-light">
                <h1 class="m-0">Welcome to Grab a Table</h1>
            </section>

            <section class="tutorial container-fluid m-0 p-5 d-flex flex-wrap flex-lg-row flex-xl-nowrap align-items-center">
                <h2 class="flex-grow-2">Let's look at how it works</h2>
                <div class="container d-flex m-3 flex-shrink-1 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="m-3" width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        1. Browse all restaurants.
                    </div>
                </div>
                <div class="container d-flex m-3 flex-shrink-1 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="m-3" width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        2. Browse all restaurants.
                    </div>
                </div>
                <div class="container d-flex m-3 flex-shrink-1 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="m-3" width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        1. Browse all restaurants.
                    </div>
                </div>
                <div class="container d-flex m-3 flex-shrink-1 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="m-3" width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        1. Browse all restaurants.
                    </div>
                </div>
            </section>

            <section class="customer-reviews container-fluid m-0 p-5">
                <h2 class="text-center mb-3 p-1">Customer Reviews</h2>
                <div class="reviews flex-md-row">
                    <div class="card mt-3 mb-3">
                        <div class="card-header">
                            <svg class="quotations left me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
                            Love, love, love it!!!
                        </div>
                        <div class="card-body d-flex flex-column flex-no-wrap">
                            <blockquote class="m-0 p-0">I have experienced more unique cuisine with Grab a table! Being able to book a table 3-weeks in advance makes scheduling meet-ups much easier</blockquote>
                            <div class="reviewer-info flex-md-column flex-lg-row">
                                <span class="reviewer-name">Carl M.</span>
                                <span class="reviewer-city">Seattle, WA</span>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3 mb-3">
                        <div class="card-header">
                            <svg class="quotations left me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
                            Meet-ups are easier
                        </div>
                        <div class="card-body d-flex flex-column flex-no-wrap">
                            <blockquote class="m-0 p-0">I get together with my friends a lot and we like a specific table at our local cafe; I can now book that table in advance each week. It's great!</blockquote>
                            <div class="reviewer-info flex-md-column flex-lg-row">
                                <span class="reviewer-name">Sammy N.</span>
                                <span class="reviewer-city">Salt Lake City, UT</span>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3 mb-3">
                        <div class="card-header">
                            <svg class="quotations left me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
                            Business ready app
                        </div>
                        <div class="card-body d-flex flex-column flex-no-wrap">
                            <blockquote class="m-0 p-0">I book quick lunch meetings with perspective clients within minutes and I get to pick the window seat.</blockquote>
                            <div class="reviewer-info flex-md-column flex-lg-row">
                                <span class="reviewer-name">Sammy N.</span>
                                <span class="reviewer-city">Salt Lake City, UT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define("home-page", HomePage)

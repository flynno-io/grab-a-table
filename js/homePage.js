// js/homePage.js

class HomePage extends HTMLElement {
	constructor() {
		super()
	}

	render() {
		this.innerHTML = `
            <section id="homePage" class="page-wrapper">
                <div id="hero" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators mb-0">
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
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">Reserve a table</h5>
                                <p class="carousel-description fs-5 fw-light">Review, reserve, and relax before your next meal out.</p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/family_dinner.jpeg" class="d-block w-100" alt="Family night out for dinner">
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">A table for family</h5>
                                <p class="carousel-description fs-5 fw-light">Find restaurants that are perfect for your next family outing.</p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/images/plate_collage.jpeg" class="d-block w-100" alt="collage of fancy dishes">
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">Find the food you love</h5>
                                <p class="carousel-description fs-5 fw-light">Peruse each restaurants menu for the food you enjoy!</p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/father_w_kids.jpeg" class="d-block w-100" alt="father with his kids">
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">Reserve in advance</h5>
                                <p class="carousel-description fs-5 fw-light">Book a table up to 3 weeks in advance so you can plan ahead. </p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/fancy_beach_restaurant.jpeg" class="d-block w-100" alt="fancy sea-side restaurant">
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">Fancy Night out</h5>
                                <p class="carousel-description fs-5 fw-light">Whether its fancy or family, we have table reservations for a variety of restaurants. Check it out.</p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/selfie_w_friends.jpeg" class="d-block w-100" alt="Friends taking a selfie at a bar">
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">Tables for groups</h5>
                                <p class="carousel-description fs-5 fw-light">Find restaurants that accommodate large groups for your next friend meet up.</p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/relaxed_bar.jpeg" class="d-block w-100" alt="Cozy bay-side bar">
                            <div class="carousel-caption text-start mb-2 p-3 rounded-2">
                                <h5 class="carousel-item-h5 fs-4">Time for you</h5>
                                <p class="carousel-description fs-5 fw-light">Book a table at your favorite café for when you need a little <i>me</i> time.</p>
                                <a class="btn btn-primary" href="#/reserve">Reserve a Table</a>
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
                <h1 class="m-0">Welcome, Grab a Table</h1>
            </section>

            <section class="tutorial container-fluid m-0 p-5 d-flex flex-wrap flex-row flex-xl-nowrap justify-content-center align-items-center">
                <h2 class="flex-xl-shrink-3 fs-1 fw-bold text-center text-xl-start">Let's look at how it works</h2>
                <div class="container fs-5 fw-light d-flex m-3 flex-md-grow-2 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="step-icon m-3"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>
                    <div class="step-text text-center flex-grow-1 m-0">
                        1. Browse all restaurants.
                    </div>
                </div>
                <div class="container fs-5 fw-light d-flex m-3 flex-md-grow-2 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="step-icon m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40l0 148.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48l0 48 0 16 0 48c0 70.7-57.3 128-128 128l-16 0-64 0-.1 0-5.2 0c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7L128 40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm48-16c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z"/></svg>
                    </div>
                    <div class="step-text text-center flex-grow-1 m-0">
                        2. Select a venue and food type.
                    </div>
                </div>
                <div class="container fs-5 fw-light d-flex m-3 flex-md-grow-2 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="step-icon m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"/></svg>
                    </div>
                    <div class="step-text text-center flex-grow-1 m-0">
                        3. Reserve a Table.
                    </div>
                </div>
                <div class="container fs-5 fw-light d-flex m-3 flex-md-grow-2 flex-column align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                        <svg class="step-icon m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
                    </div>
                    <div class="step-text text-center flex-grow-1 m-0">
                        4. Arrive and enjoy.
                    </div>
                </div>
            </section>

            <section class="customer-reviews container-fluid m-0 p-5">
                <h2 class="text-center mb-3 p-1">Customer Reviews</h2>
                <div class="reviews d-flex flex-column flex-md-row gap-2">
                    <div class="card m-2 ">
                        <div class="card-header fs-4 d-flex align-items-baseline column-gap-1">
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
                    <div class="card m-2 ">
                        <div class="card-header fs-4 d-flex align-items-baseline column-gap-1">
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
                    <div class="card m-2 ">
                        <div class="card-header fs-4 d-flex align-items-baseline column-gap-1">
                            <svg class="quotations left me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
                            Business ready app
                        </div>
                        <div class="card-body d-flex flex-column flex-no-wrap">
                            <blockquote class="m-0 p-0">I book quick lunch meetings with perspective clients within minutes and I get to pick the window seat.</blockquote>
                            <div class="reviewer-info flex-md-column flex-lg-row">
                                <span class="reviewer-name">Jade D.</span>
                                <span class="reviewer-city">New York City, NY</span>
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

// js/notFoundPage.js

class NotFoundPage extends HTMLElement {
	constructor() {
		super()
	}

	render() {
		this.innerHTML = `
            <section class="pnf-wrapper">
                <div class="page-not-found container m-5 p-5">
                    <img class="warning-icon" src="../assets/images/warning.png" alt="warning message" />
                    <h1 class="m-2 p-2">Page Not Found</h1>
                    <p>Oops! The page you are looking for doesn't exist.</p>
                </div>
            </section>
        `
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define("notfound-page", NotFoundPage)

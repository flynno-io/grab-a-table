// js/notFoundPage.js

class NotFoundPage extends HTMLElement {
	constructor() {
		super()
	}

	static css = `
        h1 { color: red; }
    `
    
	render() {
		this.innerHTML = `
            <style>${NotFoundPage.css}</style>
            
            <section>
                <h1>404 Page Not Found</h1>
                <p>We cannot find the page you are looking for</p>
            </section>
        `
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define("notfound-page", NotFoundPage)

// js/homePage.js

class HomePage extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
        // this.heroImage = getAttribute('hero')
	}

	static css = `
        h1 { color: blue; }
    `
    
	render() {
		this.shadowRoot.innerHTML = `
            <style>${HomePage.css}</style>
            
            <section>
                <img src=${this.heroImage}
                <h1>Home Page</h1>
                <p>Welcome to the Home Page!</p>
            </section>
        `
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define("home-page", HomePage)

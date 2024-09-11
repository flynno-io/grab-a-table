// js/homePage.js

class HomePage extends HTMLElement {
	constructor() {
		super()
	}

	static css = `
        h1 { color: blue; }
    `
    
	render() {
		this.innerHTML = `
            <style>${HomePage.css}</style>
            
            <section>
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

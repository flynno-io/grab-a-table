// js/homePage.js

class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h1 { color: blue; }
      </style>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
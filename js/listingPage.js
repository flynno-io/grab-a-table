// js/listingPage.js

class ListingPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h1 { color: purple; }
      </style>
      <div>
        <h1>Listing Page</h1>
        <p>Welcome to the Listing Page!</p>
        <article>Your listing info is here.</article>
      </div>
    `;
  }
}

customElements.define('listing-page', ListingPage);
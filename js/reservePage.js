// js/reservePage.js

class ReservePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h1 { color: orange; }
      </style>
      <div>
        <h1>Reserve Page</h1>
        <p>Welcome to the Reserve Page!</p>
        <button>Please Reserve a table here!</button>
      </div>
    `;
  }
}

customElements.define('reserve-page', ReservePage);
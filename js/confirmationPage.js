// js/confirmationPage.js

class ConfirmationPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h1 { color: Green; }
      </style>
      <div>
        <h1>Confirmation Page</h1>
        <p>Welcome to the Confirmation Page!</p>
      </div>
    `;
  }
}

customElements.define('confirmation-page', ConfirmationPage);
// js/loginPage.js

class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h1 { color: cornflowerblue; }
      </style>
      <div>
        <h1>Login Page</h1>
        <p>Welcome to the Login Page!</p>
        <button>Please login here!</button>
      </div>
    `;
  }
}

customElements.define('login-page', LoginPage);
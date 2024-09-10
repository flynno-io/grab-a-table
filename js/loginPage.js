// js/loginPage.js

class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
       

:root {
    --accent-color: red;
    --base-color: white;
    --text-color: black;
    --input-color: white;
}
*{
    margin: 0;
    padding: 0;
}
html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12pt;
    color: var(--text-color);
    text-align: center;    
}
body {
    min-width: 100vh;
    background-color: gray;
    background-size: cover;
    background-position: right;
    overflow: hidden;
}
.wapper {
    background-color: var(--base-color);
    height: 100vh;
    width: max(40%, 600px);
    padding: 10px;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1{
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
}
form {
    width: min(400px 100%);
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
form > div {
    width: 100%;
    display: flex;
    justify-content: center;
}
form label {
    flex-shrink: 0;
    height: 50px;
    width: 50px;
    background-color: var(--accent-color);
    fill: var(--base-color);
}
form input {
    box-sizing: border-box;
    flex-grow: 1;
    min-width: 0;
    height: 50px;
    padding: 1em;
    font: inherit;
    border-radius: 0 10px 10px 0;
    border: none;
    background-color: var(--input-color);
    transition: 150ms ease;
}

      </style>
      <div>

      <h1>Sign up</h1>

      <form>

      <div>
      <lable for="firstname-input">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
      </lable>
      <input type="text" name="firstname" id="fristname-input" placeholder="Firstname">
      </div>
      <div>
      <lable for="email-input">
      <span>@</span>
      </lable>
      <input type="email" name="email" id="email-input" placeholder="Email">
      </div>
       <div>
       <lable for="password-input">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
       </label>
      <input type="password" name="password" id="password-input" placeholder="Password">
      </div>
        <div>
         <lable for="repeat-password-input">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
       </label>
      <input type="repeat-password" name="repeat-password" id="repeat-password-input" placeholder="Repeat Password">
      </div>
      <button type="submit">Signup</button>

      </form>
      <p>Already have an Account? <a> login </a></p>


      </div>
    `;
  }
}

customElements.define('login-page', LoginPage);
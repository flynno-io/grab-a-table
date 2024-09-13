// js/loginPage.js

class LoginPage extends HTMLElement {
	constructor() {
		super()
	}

    static css = `
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    }

 section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: gray;
    }
    
    .wrapper{
    width: 420px;
    background: orange;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    } 
    .wrapper h1 {
    font-size: 30px;
    text-align: center;
    }

    .wrapper .input-box {
    width: 100%;
    height: 50px;
    background: orange;
    }

    .input-box input {
    width: 100%;
    height:100%;
    background: transparent;
    border:none;
    outline: none;
    border: 2px solid gray;
    border-radius: 40px;
    font-size: 16px;
    color:black;
    padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
    color: black;
    }

    .input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform:translateY(-50%);
    font-size: 20px;
    }
    .wrapper .btn {
    width: 100%;
    height: 45px;
    background: white;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px black;
    cursor: pointer;
    font-size: 15px;
    color: black;
    font-weight: 600;
    }

    `

    render() {
        this.innerHTML = `
            <style>${LoginPage.css}</style>
            
            <section>
            <body>
            <div class="wrapper">
            <form action="">
            <h1> Login </h1>
            <div class="input-box">
            <input type="text" placeholder="Username" >
            </div>
            <div class="input-box">
            <input type="email" placeholder="Email">
            </div>
           <div class="input-box">
            <input type="Password" placeholder="Password" >
            </div>
            <button type="submit" class="btn">Login</button>
 
            </form>

            </body>
          

   
            </section>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("login-page", LoginPage)
